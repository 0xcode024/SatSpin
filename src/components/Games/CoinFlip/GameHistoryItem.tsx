import sat_icon from "@/assets/images/game_icons/sat_icon.png";
import usd_icon from "@/assets/images/game_icons/usd_icon.png";

interface GameHistoryItemProps {
  status: boolean;
  amount: number;
}
const GameHistoryItem = ({ status, amount }: GameHistoryItemProps) => {
  return (
    <div
      className={`${status ? "border-bgColor24" : "border-bgColor13"} flex items-center gap-2 rounded-r-lg border-r-[10px] border-solid bg-bg-dark py-4 pl-4 pr-5 text-sm`}
    >
      <div>
        <img src={sat_icon} width="50px"></img>
      </div>
      <div className="w-full">
        <div className="text-tColor1">COIN FLIP</div>
        <div className="flex justify-between">
          <div className={status ? "text-bgColor24" : "text-bgColor13"}>
            {status ? "WIN" : "LOSE"}
          </div>

          <div className="text-tColor2">
            {status ? "+" : "-"}
            {amount}USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHistoryItem;
