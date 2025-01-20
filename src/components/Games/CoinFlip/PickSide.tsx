import usd_icon from "@/assets/images/game_icons/usd_icon.png";
import sat_icon from "@/assets/images/game_icons/sat_icon.png";
import Toogle from "./Toogle";

const PickSide = () => {
  return (
    <div className="bg-bgColor8 py-14 font-space font-bold">
      <div className="flex flex-col items-center gap-7 pb-[120px] pl-[15%] pr-[25%]">
        <div className="">PICK SIDE</div>
        <div className="h-[3px] w-full bg-bgColor11"></div>
        <div className="flex flex-col gap-8">
          <img src={usd_icon} />
          <img src={sat_icon} />
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
