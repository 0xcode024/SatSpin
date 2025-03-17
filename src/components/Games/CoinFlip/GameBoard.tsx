import { useRef, useState } from "react";

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
const GameBoard = () => {
  const { point, setPoint } = useAccountContext();
  const [selectedSide, setSelectedSide] = useState("");
  const [betAmount, setBetAmount] = useState(0);
  const [current, setCurrent] = useState("heads");
  const gameHistoryContainerRef = useRef<HTMLDivElement | null>(null);
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
    let token = await getJWT();
    console.log("TOKEN--->", token);
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
            amount: betAmount,
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

      setTimeout(() => {
        setPoint(response.newBalance);
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
          {gameHistoryData.map((data, key) => (
            <GameHistoryItem
              status={data.status}
              amount={data.amount}
              key={key}
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

      <GameBottomBar betAmount={betAmount} setBetAmount={setBetAmount} />
    </div>
  );
};

export default GameBoard;
