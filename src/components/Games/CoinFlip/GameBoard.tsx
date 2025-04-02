import { useEffect, useRef, useState } from "react";

import gameHistoryData from "@/static/gameHistory";
import CoinflipLeaderboard from "../GameLeaderBoard";
import GameBottomBar from "./GameBottomBar";
import GameHistoryItem from "./GameHistoryItem";
import GameSquare from "./GameSquare";
import PickSide from "./PickSide";
import vector_img from "@/assets/images/vector.png";
import PlayerBar from "../PlayerBar";
import { BASE_URL } from "@/constants/config";
import axios from "axios";
import { getJWT, isTokenExpired } from "@/utils/token";
import { JWT_COOKIE } from "@/constants/auth.constants";
import { useLaserEyes } from "@omnisat/lasereyes";
import { useAccountContext } from "@/context/AccountContext";
import { toast } from "sonner";
import { shortenNumber } from "@/utils/utils";

type HistoryEntry = {
  status: boolean;
  amount: number;
};

const GameBoard = () => {
  const { point, setPoint } = useAccountContext();
  const [selectedSide, setSelectedSide] = useState("");
  const [betAmount, setBetAmount] = useState(0);
  const [current, setCurrent] = useState("heads");
  const gameHistoryContainerRef = useRef<HTMLDivElement | null>(null);
  const [gameHistory, setGameHistory] = useState<HistoryEntry[]>([]);
  const {
    connect,
    connected,
    paymentAddress,
    paymentPublicKey,
    address,
    publicKey,
    hasUnisat,
    disconnect,
    provider,
    balance,
    getBalance,
    network,
    getNetwork,
    switchNetwork,
    signMessage,
    signPsbt,
  } = useLaserEyes();

  useEffect(() => {
    const fetchHistory = async () => {
      if (!paymentAddress) return;
      console.log(
        "HISTORY => ",
        `${BASE_URL}api/games/coinflip/history/${paymentAddress}`
      );
      const response = await axios
        .get(`${BASE_URL}api/games/coinflip/history/${paymentAddress}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.error("Error fetching points:", err));
      console.log("res history:", response);
      let history: HistoryEntry[] = [];

      if (response) {
        for (const item of response.history) {
          history.push({
            status: item.win,
            amount: Number(shortenNumber(item.payout / 10 ** 8)),
          });
        }
        setGameHistory(history);
      }
    };
    fetchHistory();
    // setPoint(formatNumber(response.balance.btc));
  }, [paymentAddress]);

  const sign = async (message: string) => {
    try {
      const result = sessionStorage.getItem(JWT_COOKIE);
      if (result != null) {
        if (!isTokenExpired(result)) {
          return;
        }
      }
      const signature = await signMessage(message, paymentAddress);
      console.log("signature", signature);

      const data = {
        paymentAddress: paymentAddress,
        paymentPubkey: paymentPublicKey,
        message: message,
        signature: signature,
        userInfo: {
          username: "",
          balance: {
            btc: 0,
            inscriptions: [],
            runes: [],
          },
          paymentAddress: paymentAddress,
          paymentPubkey: paymentPublicKey,
          ordinalAddress: address,
          ordinalPubkey: publicKey,
        },
      };

      const response = await axios
        .post(`${BASE_URL}api/auth/login`, { ...data })
        .then((res) => {
          return res.data;
        });
      console.log("jwt token: ", response.token);
      sessionStorage.setItem(JWT_COOKIE, response.token);
      const jwt = sessionStorage.getItem(JWT_COOKIE);

      console.log("jwt", jwt);
    } catch (error) {}
  };

  const getRotateCount = async () => {
    if (!paymentAddress || !connected) {
      toast.info("Please connect your wallet first", {
        duration: 1000,
      });
      return -1;
    }

    if (!selectedSide) {
      toast.info("Select one side of the coin.", {
        duration: 2000,
      });
      return -1;
    }
    if (!betAmount) {
      toast.info("Set your bet amount.", {
        duration: 2000,
      });
      return -1;
    }

    let token = await getJWT();
    if (token == null || isTokenExpired(token)) {
      await sign("Sat Spin: Test Message");
      token = sessionStorage.getItem(JWT_COOKIE);
    }

    if (token && selectedSide && betAmount && current) {
      const response = await axios
        .post(
          `${BASE_URL}api/games/coinflip/play`,
          {
            bet: selectedSide,
            amount: betAmount * 10 ** 8,
            current: current,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.error("Error fetching points:", err));
      console.log("bet result", response);
      const payout = shortenNumber(response.payout / 10 ** 8);
      const newBalance = shortenNumber(response.newBalance / 10 ** 8);

      setTimeout(() => {
        setPoint(response.newBalance);
        toast.info(
          response.win
            ? `🎉 Congratulations! You won the coin flip! You gained ${payout}. Your new balance is ${newBalance}.`
            : `😢 Oh no! You lost the coin flip. You lost ${payout}. Your new balance is ${newBalance}.`,
          {
            duration: 2000,
          }
        );
        setGameHistory([
          ...gameHistory,
          {
            status: response.win,
            amount: Number(shortenNumber(response.payout / 10 ** 8)),
          },
        ]);
      }, 500 * response.num);

      if (response.num % 2 == 1) {
        setCurrent(current == "tails" ? "heads" : "tails");
      }
      return response.num;
    }
    return -1;
  };
  const handleScroll = () => {
    if (gameHistoryContainerRef.current) {
      gameHistoryContainerRef.current.scrollBy({
        top: 50,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative block justify-between overflow-hidden rounded-lg pt-14  font-space text-xl xl:flex">
      <div className="hidden w-[310px] overflow-hidden rounded-tl-lg bg-bgColor8 xl:block">
        <PickSide
          selectedSide={selectedSide}
          setSelectedSide={setSelectedSide}
        />
      </div>
      <GameSquare getRotateCount={getRotateCount} />
      <div className="relative hidden w-[260px] overflow-hidden rounded-tr-lg bg-bgColor9 bg-opacity-[40%] xl:block">
        <div className="bg-bgColor8 py-7 text-center"> GAME HISTORY</div>
        <div
          ref={gameHistoryContainerRef}
          className="flex h-[560px] flex-col gap-2 overflow-auto bg-bgColor11 pr-3"
        >
          {[...gameHistory].reverse().map((data, index) => (
            <GameHistoryItem
              key={index}
              amount={data.amount}
              status={data.status}
            />
          ))}
        </div>
        <div
          onClick={() => handleScroll()}
          className="absolute bottom-0 hidden h-[120px] w-full cursor-pointer items-center justify-center bg-gradient-to-t from-bg-dark to-transparent md:flex"
        >
          <img src={vector_img}></img>
        </div>
      </div>
      <PlayerBar
        title="Leader Board"
        customClasses="xl:hidden block"
        width="full"
        bar_height="250px"
      />

      <GameBottomBar
        betAmount={betAmount}
        setBetAmount={setBetAmount}
        selectedSide={selectedSide}
        setSelectedSide={setSelectedSide}
      />
    </div>
  );
};

export default GameBoard;
