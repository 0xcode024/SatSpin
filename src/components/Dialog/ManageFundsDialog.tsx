import { depositCoins } from "@/static/coins";
import FundDialogItem from "../Items/FundDialogItem";
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
import { toast } from "sonner";
import { useAccountContext } from "@/context/AccountContext";
import { error } from "console";

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
    balance,
    paymentAddress,
    paymentPublicKey,
    address,
    publicKey,
  } = useLaserEyes();
  const { point, setPoint } = useAccountContext();

  const sign = async (message: string) => {
    try {
      const result = sessionStorage.getItem(JWT_COOKIE);
      if (result != null) {
        if (!isTokenExpired(result)) {
          return;
        }
      }
      const signature = await signMessage(message, paymentAddress);
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
      sessionStorage.setItem(JWT_COOKIE, response.token);
      const jwt = sessionStorage.getItem(JWT_COOKIE);
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
      if (balance && balance < Number(amount)) {
        toast.info("Insufficient wallet balance", {
          duration: 1000,
        });
        setShowDepositDialog(false);
        setProgress(0);
        setDepositStatus("");
        return;
      }
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
      if (response.data?.psbt?.hex) {
        const { hex, base64 } = response.data.psbt;

        setProgress(50);
        setDepositStatus(
          "Please approve the trasnaction to confirm the deposit"
        );
        const signPsbtResponse = await signPsbt(hex, true, false);

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
      }
    } catch (error: any) {
      toast.info("Deposit Rejected", {
        duration: 1000,
      });
      setShowDepositDialog(false);
      setProgress(0);
      setDepositStatus("");
      onClose();
      console.error(
        "Deposit BTC Error:",
        error?.response?.data || error.message
      );
    }
  };

  const withdrawBTC = async (amount: string) => {
    try {
      if (Number(amount) > point) {
        toast.info("Insufficient withdraw amount", {
          duration: 1000,
        });
        setShowDepositDialog(false);
        setProgress(0);
        setDepositStatus("");
        return;
      }

      const token = await getToken();
      if (!token) {
        console.error("Failed to retrieve valid token");
        throw new Error("Failed to retrieve valid token");
      }
      setShowDepositDialog(true);

      const response = await axios.post(
        `${BASE_URL}api/cash/btc/withdraw`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProgress(70);
      setDepositStatus("Sent. Awaiting confirmation...");

      console.log("Response data of withdraw", response.data);

      await delay(1000);
      setProgress(80);
      setDepositStatus("Confirmed. Awaiting to be finalized...");
    } catch (error: any) {
      toast.info("Withdraw Rejected", {
        duration: 1000,
      });
      setShowDepositDialog(false);
      setProgress(0);
      setDepositStatus("");
      onClose();
      console.error(
        "Withdraw BTC Error:",
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
        delay(3000).then(() => {
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
            label={toogle ? "Withdraw" : "Deposit"}
            customClasses="bg-bitcoin-orange px-8 py-5 sm:px-12 lg:px-16 border-0 font-space lg:text-xl text-lg text-black mt-10"
            onClick={async () => {
              if (Number(btcAmount) == 0) {
                toast.info("Please enter the amount", {
                  duration: 500,
                });
              } else {
                if (toogle) {
                  await withdrawBTC(
                    BigInt(
                      Math.round(parseFloat(btcAmount) * 10 ** 8)
                    ).toString()
                  );
                } else {
                  await depositBTC(
                    BigInt(
                      Math.round(parseFloat(btcAmount) * 10 ** 8)
                    ).toString()
                  );
                }
              }
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
          option={toogle}
          progress={progress}
          from={shortenAddress(paymentAddress)}
          amount={Number(btcAmount).toString()}
          status={depositStatus}
        />
      )}
    </div>
  );
};

export default ManageFundsDialog;
