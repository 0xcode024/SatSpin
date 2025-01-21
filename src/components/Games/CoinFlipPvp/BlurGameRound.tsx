import GameRound from "./GameRound";
import usd_icon from "@/assets/images/game_icons/usd_icon.png";
const BlurGameRound = () => {
  return (
    <div className="relative">
      <div className="w-full blur-md">
        <GameRound />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <img src={usd_icon} width="135px" />
      </div>
    </div>
  );
};
export default BlurGameRound;
