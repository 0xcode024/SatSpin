import playerInfoData from "@/static/playerInfos";
import PlayerInfoItem from "./PlayerInfoItem";
import vector_img from "@/assets/images/vector.png";
import { title } from "process";
import { useRef } from "react";

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
  const gameHistoryContainerRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = () => {
    if (gameHistoryContainerRef.current) {
      console.log(
        gameHistoryContainerRef.current.scrollBy({
          top: 50,
          behavior: "smooth",
        })
      );
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-tr-lg bg-bgColor9 bg-opacity-[40%] ${customClasses}`}
      style={{
        width: `${width}`,
      }}
    >
      <div className="bg-bgColor8 py-7 text-center"> {title} </div>
      <div
        className="flex  h-[200px] min-h-full flex-col gap-2 overflow-auto bg-bgColor11"
        ref={gameHistoryContainerRef}
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
      <div
        onClick={handleScroll}
        className="absolute bottom-0 hidden h-[120px] w-full cursor-pointer items-center justify-center bg-gradient-to-t from-bg-dark to-transparent md:flex"
      >
        <img src={vector_img}></img>
      </div>
    </div>
  );
};

export default PlayerBar;
