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
    <div className="relative mt-14 flex justify-between overflow-hidden  rounded-lg font-space text-xl">
      <PlayerBar />
      <div className="w-[100%] bg-bgColor11 p-4">
        <div className="grid grid-cols-3 gap-4">
          <CreateGameItem />
          <GameRound />
          <WinGameRound />
          <JoinGameItem />
          <GameRound />
          <GameRound />
          <GameRound />
          <GameRound />
          <BlurGameRound />
        </div>
        {/* <CreateGameItem />
        <JoinGameItem />
        <GameRound /> */}
      </div>
      {/* <div className="flex w-[30%] flex-col bg-bgColor11"> */}
      {/* <div className="flex items-center justify-between bg-bgColor21 px-5 py-7 text-sm">
          <div className="text-tColor2">Round No: 5554</div>
          <div className="rounded-lg border border-bgColor24 bg-bgColor25 bg-red-300 p-2 text-bgColor24">
            00:21
          </div>
        </div>
        <div className="m-3 h-[55%] bg-bgColor26 px-3 py-10">
          <div className="h-[1px] w-full bg-bgColor27" />
          <div className="flex justify-start gap-16 py-4">
            <div className="">
              <div className="flex items-center gap-2">
                <div>
                  <img src={bitcoin} />
                </div>
                <div>0.07</div>
              </div>
              <div className="text-sm text-bgColor27">Prize Pool</div>
            </div>
            <div>
              <div>5/300</div>
              <div className="text-sm text-bgColor27">Players</div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-bgColor27"></div>
          <div className="flex py-4 pr-11">
            <div className="w-full">
              <div className="flex items-center gap-2">
                <div>
                  <img src={bitcoin} />
                </div>
                <div>0.00</div>
              </div>
              <div className="text-sm text-bgColor27">Your Entries</div>
            </div>
            <div>
              <div>%99</div>
              <div className="text-sm text-bgColor27">Your Win Chance</div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-bgColor27" />
          <div className="flex justify-between text-sm text-bgColor27">
            <div>
              <div>-</div>
              <div>Your Future Entries</div>
            </div>
            <div>
              <div>-</div>
              <div>Total[0 Avg]</div>
            </div>
          </div>
        </div>
        <div className="m-3 flex h-[45%] items-center justify-center bg-bgColor26 text-sm">
          <ButtonDefault
            label="connect"
            customClasses="border-0 bg-bgColor28"
            onClick={() => {}}
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default GameBoard;
