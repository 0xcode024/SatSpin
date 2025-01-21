import playerInfoData from "@/static/playerInfos";
import PlayerInfoItem from "./PlayerInfoItem";
import vector_img from "@/assets/images/vector.png";

const PlayerBar = () => {
  return (
    <div className="relative w-[25%] overflow-hidden rounded-tr-lg bg-bgColor9 bg-opacity-[40%]">
      <div className="bg-bgColor8 py-7 text-center"> GAME HISTORY</div>
      <div className="flex h-[560px] flex-col gap-2 overflow-auto bg-bgColor11">
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
