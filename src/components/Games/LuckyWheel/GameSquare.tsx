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
          {/* <div className="absolute left-[-50px] top-[-50px] flex h-[480px] w-[480px]  items-center justify-center">
            <svg
              aria-hidden="true"
              className="dark:text-gray-600 h-50 w-50 inline animate-spin fill-black text-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div> */}
          {/* <div className="absolute left-[-50px] top-[-50px] flex h-[480px] w-[480px] items-center justify-center">
            <svg
              aria-hidden="true"
              className="dark:text-gray-600 inline h-[480px] w-[480px] animate-spin fill-transparent text-white"
              viewBox="0 0 100 101"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50.5"
                r="45"
                className="text-gray-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="5" // Change this value to adjust the width of the ring
              />
              <circle
                cx="50"
                cy="50.5"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="5" // Change this value to adjust the width of the ring
                strokeDasharray="283"
                strokeDashoffset="75"
                className="animate-spin text-current"
              />
            </svg>
          </div> */}
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
        <div className="bg-bgColor29 flex w-[100%] items-center gap-4 overflow-auto rounded-lg p-3">
          {betData.map((data, key) => (
            <BetItem amount={data.amount} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSquare;
