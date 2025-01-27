import square from "@/assets/images/square.png";
import sat_icon from "@/assets/images/game_icons/big_sat_icon.png";
import logo from "@/assets/images/logo.png";
import betData from "@/static/betdata";
import BetItem from "./BetItem";
import DonutChart from "./DonutChart";
import bitcoin from "@/assets/images/coins/bitcoin.png";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

const GameSquare = () => {
  const size = 400;
  const ringSize = 80 * 0.8;
  const borderWidth = 80 * 0.1;
  return (
    <div className="order-0 flex h-full flex-grow flex-col 2xl:order-1">
      <div
        className="relative flex h-[500px] items-center justify-center gap-2 pb-2"
        style={{
          backgroundImage: `url(${square})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "blend", // or another blend mode
        }}
      >
        <div className="absolute top-14 flex w-full flex-col items-center justify-between gap-2 px-[20px] lg:flex-row">
          <div className="flex gap-2 text-sm opacity-[30%]">
            <div>Lucky Wheel Powered by</div>
            <img src={logo} width="70px" />
          </div>
          <ButtonDefault
            label="HISTORY"
            customClasses="text-sm text-tColor2 bg-bgColor31 hidden lg:block"
            onClick={() => {}}
          />
        </div>
        <div className="relative">
          {/* <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-3">
            <div className="text-3xl font-bold">0.07</div>
            <div>
              <img src={bitcoin} width="35x" />
            </div>
          </div> */}
          <DonutChart />
        </div>
      </div>
      <div className="hidden overflow-x-auto bg-borderColor2 p-4 pr-0 2xl:block">
        <div className="flex items-center gap-4 overflow-x-auto rounded-lg bg-bgColor29 p-3">
          {betData.map((data, key) => (
            <BetItem amount={data.amount} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSquare;
