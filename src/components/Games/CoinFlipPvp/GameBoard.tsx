import bitcoin from "@/assets/images/coins/bitcoin.png";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
// import GameSquare from "./GameSquare";
import PlayerBar from "../PlayerBar";
import CreateGameItem from "./CreateGameItem";
import JoinGameItem from "./JoinGameItem";
import PlayerItem from "./PlayerItem";
import adm from "@/assets/images/profile/adm.png";
import GameRound from "./GameRound";
import BlurGameRound from "./BlurGameRound";
import WinGameRound from "./WinGameRound";
const GameBoard = () => {
  return (
    <div className="relative mt-14 flex 2xl:flex-row flex-col justify-between overflow-hidden rounded-lg font-space text-xl pb-14">
      <PlayerBar
        title="PLAYERS"
        customClasses="order-1"
        width="w-full"
        bar_height="560px"
      />
      <div className="w-full  p-4 bg-black order-0">
        <div className="grid gap-4 grid-cols-1 2xl:grid-cols-3 gap-8">
          <div className="border-[3px] border-bgColor39 rounded-lg order-3">
            <CreateGameItem />
          </div>
          <div className="hidden 2xl:block">
            <GameRound />
          </div>
          <div className="border-[3px] border-bgColor39 rounded-lg order-0">
            <WinGameRound />
          </div>
          <div className="order-4">
            <JoinGameItem />
          </div>
          <div className="order-1">
            <GameRound />
          </div>
          <div className="order-2">
            <GameRound />
          </div>
          <div className="hidden 2xl:block">
            <GameRound />
          </div>
          <div className="hidden 2xl:block">
            <GameRound />
          </div>
          <div className="hidden 2xl:block ">
            <BlurGameRound />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
