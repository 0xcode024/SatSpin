import gameHistoryData from "@/static/gameHistory";
import CoinflipLeaderboard from "./CoinFlipLeaderBoard";
import GameBottomBar from "./GameBottomBar";
import GameHistoryItem from "./GameHistoryItem";
import GameSquare from "./GameSquare";
import PickSide from "./PickSide";
import vector_img from "@/assets/images/vector.png";
const GameBoard = () => {
  return (
    <div className="relative flex justify-between overflow-hidden rounded-lg  pt-14 font-space text-xl">
      <div className="w-[30%] overflow-hidden rounded-tl-lg bg-bgColor8">
        <PickSide />
      </div>
      <GameSquare />
      <div className="relative w-[25%] overflow-hidden rounded-tr-lg bg-bgColor9 bg-opacity-[40%]">
        <div className="bg-bgColor8 py-7 text-center"> GAME HISTORY</div>
        <div className="flex h-[560px] flex-col gap-2 overflow-auto bg-bgColor11 pr-3">
          {gameHistoryData.map((data, key) => (
            <GameHistoryItem
              status={data.status}
              amount={data.amount}
              key={key}
            />
          ))}
        </div>
        <div className="absolute bottom-0 flex h-[120px] w-full cursor-pointer items-center justify-center bg-gradient-to-t from-bg-dark to-transparent">
          <img src={vector_img}></img>
        </div>
      </div>
      <GameBottomBar />
    </div>
  );
};

export default GameBoard;
