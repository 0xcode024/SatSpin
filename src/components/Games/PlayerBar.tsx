import playerInfoData from "@/static/playerInfos";
import PlayerInfoItem from "./PlayerInfoItem";
import vector_img from "@/assets/images/vector.png";
import { title } from "process";

interface PlayerBarProps {
  title: string;
  customClasses: string;
  width: string;
  bar_height: string;
}
const PlayerBar = ({
  customClasses,
  title,
  width,
  bar_height,
}: PlayerBarProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-tr-lg bg-bgColor9 bg-opacity-[40%] ${customClasses}`}
      style={{
        width: `${width}`,
      }}
    >
      <div className="bg-bgColor8 py-7 text-center"> {title} </div>
      <div
        className="flex  flex-col gap-2 overflow-auto bg-bgColor11 min-h-full h-[200px]"
        // style={{ height: `${bar_height}` }}
      >
        {playerInfoData.map((data, key) => (
          <PlayerInfoItem
            id={data.id}
            percent={data.percent}
            point={data.point}
            balance={data.balance}
            color={data.color}
            image={data.image}
            key={key}
          />
        ))}
      </div>
      <div className="absolute bottom-0 flex h-[120px] w-full cursor-pointer items-center justify-center bg-gradient-to-t from-bg-dark to-transparent">
        <img src={vector_img}></img>
      </div>
    </div>
  );
};

export default PlayerBar;
