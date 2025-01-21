import GameRound from "./GameRound";
import adm from "@/assets/images/profile/adm.png";
import sat_icon from "@/assets/images/game_icons/sat_icon.png";
import usd_icon from "@/assets/images/game_icons/usd_icon.png";
import bitcoin from "@/assets/images/coins/bitcoin.png";
import circle_win from "@/assets/images/circle_win.png";
const WinGameRound = () => {
  const option = true;

  return (
    <div className="relative">
      <div className="w-full blur-lg brightness-150">
        <GameRound />
      </div>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
        <div className="relative">
          <div>
            <img src={adm} width="60px" />
          </div>
          <div className="right-90 absolute top-0">
            <img
              src={option ? sat_icon : usd_icon}
              className={option ? "grayscale" : ""}
              width="23px"
            />
          </div>
        </div>
        <div className="text-sm">PLAYER NAME</div>
        <div className="flex items-center justify-center gap-3 rounded-lg px-2 py-1">
          <div className="">
            <img src={bitcoin} width="23px" />
          </div>
          <div>0.02</div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden">
        <img src={circle_win} className="w-[350px] max-w-[350px]" />
      </div>
    </div>
  );
};
export default WinGameRound;
