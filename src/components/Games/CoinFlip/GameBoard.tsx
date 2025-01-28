import { useRef } from "react";

import gameHistoryData from "@/static/gameHistory";
import CoinflipLeaderboard from "../GameLeaderBoard";
import GameBottomBar from "./GameBottomBar";
import GameHistoryItem from "./GameHistoryItem";
import GameSquare from "./GameSquare";
import PickSide from "./PickSide";
import vector_img from "@/assets/images/vector.png";
import PlayerBar from "../PlayerBar";
const GameBoard = () => {
  const gameHistoryContainerRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = () => {
    if (gameHistoryContainerRef.current) {
      console.log(gameHistoryContainerRef.current.scrollBy({
        top: 50,
        behavior: "smooth"
      }));
    }
  };
  return (
    <div className="relative block justify-between overflow-hidden rounded-lg pt-14  font-space text-xl xl:flex">
      <div className="hidden w-[310px] overflow-hidden rounded-tl-lg bg-bgColor8 xl:block">
        <PickSide />
      </div>
      <GameSquare />
      <div className="relative hidden w-[260px] overflow-hidden rounded-tr-lg bg-bgColor9 bg-opacity-[40%] xl:block">
        <div className="bg-bgColor8 py-7 text-center"> GAME HISTORY</div>
        <div ref={gameHistoryContainerRef}
          className="flex h-[560px] flex-col gap-2 overflow-auto bg-bgColor11 pr-3">
          {gameHistoryData.map((data, key) => (
            <GameHistoryItem
              status={data.status}
              amount={data.amount}
              key={key}
            />
          ))}
        </div>
        <div onClick={() => handleScroll()} className="hidden absolute bottom-0 md:flex h-[120px] w-full cursor-pointer items-center justify-center bg-gradient-to-t from-bg-dark to-transparent">
          <img src={vector_img}></img>
        </div>
      </div>
      <PlayerBar
        title="Leader Board"
        customClasses="xl:hidden block"
        width="full"
        bar_height="250px"
      />

      <GameBottomBar />
    </div>
  );
};

export default GameBoard;
