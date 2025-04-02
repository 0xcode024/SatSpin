import { depositCoins } from "@/static/coins";
import FundDialogItem from "../Items/FundDialogItem";
import qr from "@/assets/images/qr/qr.png";
import esc from "@/assets/images/esc.png";
import { useEffect, useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import { useLaserEyes } from "@omnisat/lasereyes";
import { BASE_URL, socket } from "@/constants/config";
import { isTokenExpired } from "@/utils/token";
import { JWT_COOKIE } from "@/constants/auth.constants";
import axios from "axios";
import DepositStatusDialog from "./DepositStatusDialog";
import { delay } from "@/utils/utils";
import { shortenAddress } from "@/utils/bitcoin.utils";

interface ManageFundDialogProps {
  open: boolean;
  onClose: () => void;
}
const ManageFundsDialog = ({ onClose, open }: ManageFundDialogProps) => {
  const [toogle, setToogle] = useState(false);
  const [btcAmount, setBtcAmount] = useState("0");
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const [depositStatus, setDepositStatus] = useState("");
  const [progress, setProgress] = useState(0);

  const {
    signPsbt,
    signMessage,
    paymentAddress,
    paymentPublicKey,
    address,
    publicKey,
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

  const getToken = async (): Promise<string | null> => {
    let token = sessionStorage.getItem(JWT_COOKIE);
    if (!token || isTokenExpired(token)) {
      await sign("Sat Spin: Test Message");
      token = sessionStorage.getItem(JWT_COOKIE);
    }
    return token;
  };
  const depositBTC = async (amount: string) => {
    try {
      const token = await getToken();
      if (!token) {
        console.error("Failed to retrieve valid token");
        return;
      }
      setShowDepositDialog(true);
      setProgress(10);
      setDepositStatus("Processing...");
      await delay(500);
      setProgress(20);
      setDepositStatus("Please approve the trasnaction to confirm the deposit");

      const response = await axios.post(
        `${BASE_URL}api/cash/btc/deposit`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response data of deposit", response.data);
      if (response.data?.psbt?.hex) {
        const { hex, base64 } = response.data.psbt;
        console.log("PSBT Hex:", hex);
        console.log("PSBT Base64:", base64);
        setProgress(50);
        setDepositStatus(
          "Please approve the trasnaction to confirm the deposit"
        );
        const signPsbtResponse = await signPsbt(hex, true, false);
        console.log("Signed PSBT Response:", signPsbtResponse);
        if (!signPsbtResponse?.signedPsbtHex) {
          console.error("Failed to sign PSBT");
          return;
        }
        setProgress(80);
        setDepositStatus("Sent. Awaiting confirmation...");
        const txResponse = await axios.post(
          `${BASE_URL}api/tx/push`,
          { txHex: signPsbtResponse.signedPsbtHex },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setDepositStatus("Confirmed. Awaiting to be finalized...");
        console.log("Transaction Push Response:", txResponse.data);
      }
    } catch (error: any) {
      console.error(
        "Deposit BTC Error:",
        error?.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    socket.on("UpdateUser", async (data: any) => {
      console.log("UpdateUser Event", data);
      if (data.user.paymentAddress == paymentAddress) {
        setDepositStatus("Your updated balance will reflect shortly");
        setProgress(100);
        delay(2000).then(() => {
          setShowDepositDialog(false);
          onClose();
        });
      }
    });
  }, [paymentAddress]);
  return (
    <div className="z-100 fixed inset-0 flex w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-40">
      <div className="opactiy-100 relative flex flex-col items-center gap-5 rounded-lg bg-bgColor9 px-[5%] pb-[20px] pt-[50px] text-white lg:flex-row lg:items-stretch lg:justify-center lg:gap-[70px] lg:pb-[70px]">
        <div className="flex flex-col gap-2 lg:gap-16">
          <div className="items-around flex gap-5 font-space text-2xl lg:text-3xl">
            <div
              className={`cursor-pointer ${toogle ? "text-grayFont" : "font-bold text-bgColor5 brightness-150 drop-shadow-[0_0_10px_#fff]"}`}
              onClick={() => setToogle(false)}
            >
              DEPOSIT
            </div>
            <div className="h-[50px] w-[2px] bg-borderColor2 "></div>
            <div
              className={`cursor-pointer ${toogle ? "font-bold text-bgColor5 brightness-150 drop-shadow-[0_0_10px_#fff]" : "text-grayFont"}`}
              onClick={() => setToogle(true)}
            >
              WITHDRAW
            </div>
          </div>
          <div className="text-xl">
            {toogle ? "Withdraw Options" : "Deposit Options"}
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-tColor6">Enter amount</div>
            {depositCoins.map((depositCoin, key) => (
              <FundDialogItem
                key={key}
                name={depositCoin.name}
                symbol={depositCoin.symbol}
                image={depositCoin.image}
                amount={btcAmount}
                setAmount={setBtcAmount}
              />
            ))}
          </div>
          <ButtonDefault
            label="Deposit"
            customClasses="bg-bitcoin-orange px-8 py-5 sm:px-12 lg:px-16 border-0 font-space lg:text-xl text-lg text-black mt-10"
            onClick={async () => {
              console.log("lol");
              await depositBTC(
                BigInt(Math.round(parseFloat(btcAmount) * 10 ** 8)).toString()
              );
            }}
          />
        </div>
        <div
          className="absolute right-8 top-8 cursor-pointer"
          onClick={() => onClose()}
        >
          <img src={esc}></img>
        </div>
      </div>
      {showDepositDialog && (
        <DepositStatusDialog
          progress={progress}
          from={shortenAddress(paymentAddress)}
          amount={btcAmount}
          status={depositStatus}
        />
      )}
    </div>
  );
};

export default ManageFundsDialog;
