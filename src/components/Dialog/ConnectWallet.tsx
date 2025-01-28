import esc from "@/assets/images/esc.png";
import WalletItem from "../Items/WalletItem";
import { wallets } from "@/static/wallets";
import ButtonDefault from "../Buttons/ButtonDefault";

interface ConnectWalletDialogProps {
  open: boolean;
  onClose: () => void;
}
const ConnectWalletDialog = ({ onClose, open }: ConnectWalletDialogProps) => {
  return (
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center overflow-y-auto bg-bg-dark bg-opacity-70 shadow-lg backdrop-blur-xl">
      <div className="relative flex w-[300px] lg:w-[400px] flex-col items-center gap-8 font-space">
        <div className="w-full pb-12 text-left text-2xl lg:text-3xl">
          Log in With Wallet
        </div>
        <div className="flex w-[100%] flex-col items-center gap-5">
          {wallets.map((wallet, key) => (
            <WalletItem name={wallet.name} image={wallet.image} />
          ))}
        </div>
        <div className="bg-bgColor12 h-[1px] w-full"></div>
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
