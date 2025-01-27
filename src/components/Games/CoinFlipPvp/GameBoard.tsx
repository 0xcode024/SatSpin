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
        customClasses="2xl:order-0 order-1"
        width="w-full"
        bar_height="560px"
      />
      <div className="w-full  p-4 bg-black 2xl:order-1 order-0">
        <div className="grid gap-8 grid-cols-1 2xl:grid-cols-3">
          <div className="border-[3px] border-bgColor39 rounded-lg order-4 2xl:order-1">
            <CreateGameItem />
          </div>
          <div className="hidden 2xl:block order-6 2xl:order-2">
            <GameRound />
          </div>
          <div className="border-[3px] border-bgColor39 rounded-lg order-1 2xl:order-3">
            <WinGameRound />
          </div>
          <div className="order-5 2xl:order-4">
            <JoinGameItem />
          </div>
          <div className="order-2 2xl:order-5">
            <GameRound />
          </div>
          <div className="order-3 2xl:order-6">
            <GameRound />
          </div>
          <div className="hidden 2xl:block order-7 2xl:order-7">
            <GameRound />
          </div>
          <div className="hidden 2xl:block order-8 2xl:order-8">
            <GameRound />
          </div>
          <div className="hidden 2xl:block order-9 2xl:order-9">
            <BlurGameRound />
          </div>
        </div>


      </div>
    </div>
  );
};

export default GameBoard;
