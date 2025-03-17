import axios from "axios";
import esc from "@/assets/images/esc.png";
import WalletItem from "../Items/WalletItem";
import ButtonDefault from "../Buttons/ButtonDefault";
import { toast } from "sonner";
import {
  LEATHER,
  MAGIC_EDEN,
  OKX,
  OYL,
  UNISAT,
  XVERSE,
  PHANTOM,
  useLaserEyes,
  NetworkType,
} from "@omnisat/lasereyes";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import { SUPPORTED_WALLETS } from "@/context/AuthContext/auth.types";
import {
  MAGIC_EDEN as magicEdenLogo,
  OKX as okxLogo,
  UNISAT as unisatLogo,
  XVERSE as xVerseLogo,
  LEATHER as leatherLogo,
  PHANTOM as phantomLogo,
} from "@/constants/imgs";
import { delay } from "@/utils/utils";

export const WalletProviderConfig: {
  [key in SUPPORTED_WALLETS]: {
    logo: any;
  };
} = {
  [XVERSE]: { logo: xVerseLogo },
  [LEATHER]: { logo: leatherLogo },
  [PHANTOM]: { logo: phantomLogo },
  [OKX]: { logo: okxLogo },
  [UNISAT]: { logo: unisatLogo },
};

interface ConnectWalletDialogProps {
  open: boolean;
  onClose: () => void;
}
const ConnectWalletDialog = ({ onClose, open }: ConnectWalletDialogProps) => {
  const {
    wallet: myWalletInfo,
    loginWithWallet,
    logout,
  } = useContext(AuthContext);
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
    network,
    getNetwork,
    switchNetwork,
    signMessage,
    getBalance,
  } = useLaserEyes();

  const handleConnectWallet = async (key: string) => {
    try {
      if (key == "okx") {
        if (typeof window !== "undefined" && (window as any).okxwallet) {
          console.log("OKX Wallet is installed");
        } else {
          console.log("OKX Wallet is not installed");
          toast.error("Error: OKX Wallet is not installed", {
            duration: 1000,
          });
          return;
        }
      }
      await connect(key as SUPPORTED_WALLETS);
      await delay(300);
      onClose();
    } catch (error) {
      toast.error(`${error}`, {
        duration: 1000,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center overflow-y-auto bg-bg-dark bg-opacity-70 shadow-lg backdrop-blur-xl">
      <div className="relative flex w-[300px] flex-col items-center gap-8 font-space lg:w-[400px]">
        <div className="w-full pb-12 text-left text-2xl lg:text-3xl">
          Log in With Wallet
        </div>
        <div className="flex w-[100%] flex-col items-center gap-5">
          {Object.entries(WalletProviderConfig).map(([key, value], index) => (
            <WalletItem
              name={key}
              image={value.logo}
              key={key}
              onClick={() => {
                handleConnectWallet(key);
              }}
            />
          ))}
        </div>
        <div className="h-[1px] w-full bg-bgColor12"></div>
        <div className="px-2 py-2 text-center text-sm">
          <div>By continuing, you agree to SatSpin's</div>
          <div>
            <span className="text-bgColor5">Privacy Policy</span> and{" "}
            <span className="text-bgColor5">Terms and Conditions</span>
          </div>
        </div>
        <div className="w-full">
          <ButtonDefault
            label="Connect"
            onClick={() => onClose()}
            customClasses="w-full bg-bgColor5 text-black font-space text-sm lg:text-lg font-bold"
          />
        </div>
        <div
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => onClose()}
        >
          <img src={esc} className="w-[20px] lg:w-[25px]"></img>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletDialog;
