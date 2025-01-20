// import gameHistoryData from "@/static/gameHistory";
// import CoinflipLeaderboard from "../GameLeaderBoard";
// import GameBottomBar from "./GameBottomBar";
// import GameHistoryItem from "./GameHistoryItem";
// import GameSquare from "./GameSquare";
// import PickSide from "./PickSide";
import adm from "@/assets/images/profile/adm.png";
import vector_img from "@/assets/images/vector.png";
import PlayerInfoItem from "./PlayerInfoItem";
import playerInfoData from "@/static/playerInfos";
import bitcoin from "@/assets/images/coins/bitcoin.png";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import GameSquare from "./GameSquare";
const GameBoard = () => {
  return (
    <div className="relative mt-14 flex justify-between overflow-hidden  rounded-lg font-space text-xl">
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
      <div className="w-[100%]">
        <GameSquare />
      </div>
      <div className="flex w-[30%] flex-col bg-bgColor11">
        <div className="flex items-center justify-between bg-bgColor21 px-5 py-7 text-sm">
          <div className="text-tColor2">Round No: 5554</div>
          <div className="bg-bgColor25 rounded-lg border border-bgColor24 bg-red-300 p-2 text-bgColor24">
            00:21
          </div>
        </div>
        <div className="bg-bgColor26 m-3 h-[55%] px-3 py-10">
          <div className="bg-bgColor27 h-[1px] w-full" />
          <div className="flex justify-start gap-16 py-4">
            <div className="">
              <div className="flex items-center gap-2">
                <div>
                  <img src={bitcoin} />
                </div>
                <div>0.07</div>
              </div>
              <div className="text-bgColor27 text-sm">Prize Pool</div>
            </div>
            <div>
              <div>5/300</div>
              <div className="text-bgColor27 text-sm">Players</div>
            </div>
          </div>
          <div className="bg-bgColor27 h-[1px] w-full"></div>
          <div className="flex py-4 pr-11">
            <div className="w-full">
              <div className="flex items-center gap-2">
                <div>
                  <img src={bitcoin} />
                </div>
                <div>0.00</div>
              </div>
              <div className="text-bgColor27 text-sm">Your Entries</div>
            </div>
            <div>
              <div>%99</div>
              <div className="text-bgColor27 text-sm">Your Win Chance</div>
            </div>
          </div>
          <div className="bg-bgColor27 h-[1px] w-full" />
          <div className="text-bgColor27 flex justify-between text-sm">
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
        <div className="bg-bgColor26 m-3 flex h-[45%] items-center justify-center text-sm">
          <ButtonDefault
            label="connect"
            customClasses="border-0 bg-bgColor28"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* <div className="w-[30%] overflow-hidden rounded-tl-lg bg-bgColor8">
        <PickSide />
      </div>
      <GameSquare /> */}
    </div>
  );
};

export default GameBoard;
