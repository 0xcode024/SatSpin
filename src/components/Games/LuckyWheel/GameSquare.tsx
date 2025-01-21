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
  const ringSize = 80 * 0.8; // Inner ring 80 (80% of the parent size)
  const borderWidth = 80 * 0.1; // Border width (10% of the size)
  return (
    <div className="flex h-full flex-col justify-between">
      <div
        className="relative flex h-full w-full items-center justify-center gap-2 pb-2"
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
            customClasses="text-sm text-tColor2 bg-bgColor31"
            onClick={() => {}}
          />
        </div>
        <div className="relative">
          <div className="absolute left-[-40px] top-[-40px] flex h-[460px] w-[460px] items-center justify-center">
            <svg
              aria-hidden="true"
              className="h-[480px] w-[480px] animate-spin"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Static Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                className="text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2" /* Spinning circle's stroke width */
                strokeDasharray="283" /* Circumference of the circle (2 * π * r) */
                strokeDashoffset="75" /* Creates the spinning effect */
                strokeLinecap="round" /* Smooth edges */
                className="text-[#5A5A5A]"
              />
            </svg>
          </div>

          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-3">
            <div className="text-3xl font-bold">0.07</div>
            <div>
              <img src={bitcoin} width="35x" />
            </div>
          </div>
          <DonutChart />
        </div>
      </div>
      <div className="bg-borderColor2 p-5">
        <div className="flex w-[100%] items-center gap-4 overflow-auto rounded-lg bg-bgColor29 p-3">
          {betData.map((data, key) => (
            <BetItem amount={data.amount} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSquare;
