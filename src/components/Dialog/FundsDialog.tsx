import { depositCoins } from "@/static/coins";
import FundDialogItem from "../Items/FundDialogItem";
import qr from "@/assets/images/qr/qr.png";
import esc from "@/assets/images/esc.png";
import { useState } from "react";

interface FundDialogProps {
  open: boolean;
  onClose: () => void;
}
const FundsDialog = ({ onClose, open }: FundDialogProps) => {
  const [toogle, setToogle] = useState(false);
  return (
    // <div
    //   className="relative"
    //   //   className="relative z-10"
    //   //   aria-labelledby="modal-title"
    //   //   role="dialog"
    //   //   aria-modal="true"
    // >
    // <Dialog open={open} handler={onClose}>
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-40">
      <div className="bg-bgColor9 opactiy-100 relative flex flex-col gap-5 rounded-lg px-[5%] pb-[20px] pt-[50px] text-white lg:flex-row lg:justify-around lg:gap-[70px] lg:pb-[70px]">
        <div className="flex flex-col gap-2 lg:gap-16">
          <div className="items-around flex gap-5 font-space text-3xl">
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
            {depositCoins.map((depositCoin, key) => (
              <FundDialogItem
                key={key}
                name={depositCoin.name}
                symbol={depositCoin.symbol}
                image={depositCoin.image}
              ></FundDialogItem>
            ))}
          </div>
        </div>
        <div className="h-[2px] w-auto bg-borderColor2 lg:h-auto lg:w-[2px]"></div>
        <div className="flex flex-col justify-between">
          <div className="hidden lg:block"></div>
          <div className="flex justify-center">
            <img src={qr}></img>
          </div>
        </div>
        <div
          className="absolute right-8 top-8 cursor-pointer"
          onClick={() => onClose()}
        >
          <img src={esc}></img>
        </div>
      </div>
    </div>
    // </Dialog>

    // </div>
  );
};

export default FundsDialog;
