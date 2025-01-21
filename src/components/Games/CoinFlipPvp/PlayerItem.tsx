import bitcoin from "@/assets/images/coins/bitcoin.png";
import adm from "@/assets/images/profile/adm.png";
import sat_icon from "@/assets/images/game_icons/sat_icon.png";
import usd_icon from "@/assets/images/game_icons/usd_icon.png";

interface PlayerItemProps {
  image: any;
  balance: number;
  option: boolean;
  name: string;
}
const PlayerItem = ({ image, balance, option, name }: PlayerItemProps) => {
  return (
    <div className="from-bgColor34 to-bgColor border-bgColor38 flex w-[150px] flex-col items-center justify-center gap-2 rounded-lg border bg-gradient-to-b py-3">
      <div className="relative">
        <div>
          <img src={image} width="60px" />
        </div>
        <div className="right-90 absolute top-0">
          <img
            src={option ? sat_icon : usd_icon}
            className={option ? "grayscale" : ""}
            width="23px"
          />
        </div>
      </div>
      <div className="text-sm">{name}</div>
      <div className="bg-bgColor40 flex items-center justify-center gap-3 rounded-lg px-2 py-1">
        <div className="">
          <img src={bitcoin} width="23px" />
        </div>
        <div>{balance}</div>
      </div>
    </div>
  );
};
export default PlayerItem;
