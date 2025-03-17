import usd_icon from "@/assets/images/game_icons/usd_icon.png";
import sat_icon from "@/assets/images/game_icons/sat_icon.png";
import Toogle from "./Toogle";
import { useState } from "react";
interface PickSideProps {
  selectedSide: string;
  setSelectedSide: (option: string) => void;
}
const PickSide = ({ selectedSide, setSelectedSide }: PickSideProps) => {
  // const [selectedSide, setSelectedSide] = useState("");

  return (
    <div className="bg-bgColor8 py-14 font-space font-bold">
      <div className="flex flex-col items-center gap-7 pb-[120px] pl-[15%] pr-[25%]">
        <div>PICK SIDE</div>
        <div className="h-[3px] w-full bg-bgColor11"></div>
        <div className="flex flex-col gap-8">
          <div
            onClick={() => setSelectedSide("tails")}
            className={`cursor-pointer rounded-full border-8 p-0 shadow-lg transition-all duration-200 ${
              selectedSide === "tails" ? "border-bgColor47" : "border-bgColor8"
            }`}
          >
            <img src={usd_icon} width="80px" alt="USD" />
          </div>
          <div
            onClick={() => setSelectedSide("heads")}
            className={`cursor-pointer rounded-full border-8 p-0 shadow-lg transition-all duration-200 ${
              selectedSide === "heads" ? "border-bgColor47" : "border-bgColor8"
            }`}
          >
            <img src={sat_icon} width="80px" alt="SAT" />
          </div>
        </div>
        <div className="h-[3px] w-full bg-bgColor11"></div>
        <div className="flex w-full justify-between gap-4">
          <div>AUTO BET</div>
          <Toogle />
        </div>
        <div className="h-[3px] w-full bg-bgColor11"></div>
      </div>
    </div>
  );
};

export default PickSide;
