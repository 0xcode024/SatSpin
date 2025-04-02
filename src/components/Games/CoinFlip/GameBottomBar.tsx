import SlideBar from "./SlideBar";
import sat_coin from "@/assets/images/game_icons/sat_icon.png";
import usd_coin from "@/assets/images/game_icons/usd_icon.png";
import { useState } from "react";
interface GameBottomBarProps {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  selectedSide: string;
  setSelectedSide: (option: string) => void;
}
const GameBottomBar = ({
  betAmount,
  setBetAmount,
  selectedSide,
  setSelectedSide,
}: GameBottomBarProps) => {
  return (
    <div className=" align-center static bottom-0 mt-2 flex w-full flex-col justify-between bg-bgColor28 px-8 py-10 text-sm md:text-lg xl:absolute xl:m-0 xl:w-[calc(100%-260px)] xl:flex-row xl:bg-black xl:px-6 xl:py-4 xl:text-sm 2xl:text-lg">
      <div className="w-full xl:w-[160px] 2xl:w-[232px]">
        <div className="text-bgColor27 xl:text-white">AUTO BET AMOUNT</div>
        <div className="w-full flex-grow py-4">
          <SlideBar />
        </div>
      </div>
      <div className="flex-between block flex flex-col gap-6 xl:flex-row xl:gap-2 2xl:gap-6">
        <div className="flex justify-between">
          <div className="w-[70%] xl:w-full">
            <div className="text-bgColor27 xl:text-white">POTENTIAL WIN</div>
            <div className="flex w-20 w-[90%] items-center rounded-lg bg-bgColor2 py-2 pl-4 pr-20 text-lg md:w-full xl:text-sm 2xl:text-lg">
              <p>₿</p>
              <input
                type="text"
                value={(betAmount * 1.92).toFixed(5).replace(/\.?0+$/, "")}
                readOnly
                className="w-20 cursor-pointer bg-transparent px-1 py-1 text-lg outline-none xl:text-sm 2xl:text-lg"
              />
            </div>
          </div>
          <div className="block flex flex-col xl:hidden">
            <div className="text-bgColor27 xl:text-white">Pick Side</div>
            <div className="flex w-full flex-grow items-center justify-between gap-3">
              <div
                onClick={() => setSelectedSide("heads")}
                className={`w-[65px] cursor-pointer rounded-full border-8 p-0 shadow-lg transition-all duration-200 ${
                  selectedSide === "heads"
                    ? "border-bgColor47"
                    : "border-bgColor8"
                }`}
              >
                <img src={sat_coin} />
              </div>
              <div
                onClick={() => setSelectedSide("tails")}
                className={`w-[65px] cursor-pointer rounded-full border-8 p-0 shadow-lg transition-all duration-200 ${
                  selectedSide === "tails"
                    ? "border-bgColor47"
                    : "border-bgColor8"
                }`}
              >
                <img src={usd_coin} />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:order-0 order-1">
          <div className="invisible">Flip Coin</div>
          <div className="flex items-center justify-around gap-1 rounded-lg bg-bgColor2 bg-gradient-to-r from-bgColor16 to-bgColor17 px-1 py-3 font-bold text-black 2xl:gap-3">
            <div>Flip Coin</div>
            <div className="h-[30px] w-[2px] bg-bgColor18"></div>
            <div className="text-center">
              <input
                className="w-[80px] bg-transparent outline-none"
                value={Number(betAmount)
                  .toFixed(5)
                  .replace(/\.?0+$/, "")}
                readOnly
              />{" "}
              ₿
            </div>
          </div>
        </div>
        <div className="order-0 xl:order-1">
          <div className="text-bgColor27 xl:text-white">WAGER</div>
          <div className="3xl:gap-20 flex items-center justify-between gap-3 rounded-lg bg-bgColor2 px-6 py-2">
            {/* <div className="text-lg xl:text-sm 2xl:text-lg">$100</div> */}
            <div className="flex items-center">
              <p>₿</p>
              <input
                type="text"
                value={betAmount}
                onChange={(e: any) => {
                  console.log(e.target.value);
                  setBetAmount(e.target.value);
                }}
                className="w-20 bg-transparent px-1 py-1 text-lg outline-none xl:text-sm 2xl:text-lg"
              />
            </div>
            <div className="flex items-center gap-3 text-bg-dark">
              <div
                className="cursor-pointer rounded-lg border-[3px] border-bgColor20 bg-bgColor19 px-2 py-1 transition-all duration-200 
                        hover:scale-105 hover:border-bgColor19 hover:bg-bgColor20 active:scale-95 active:bg-bgColor18"
                onClick={() => setBetAmount(betAmount / 2)}
              >
                1/2
              </div>
              <div
                className="cursor-pointer rounded-lg border-[3px] border-bgColor20 bg-bgColor19 px-2 py-1 transition-all duration-200 
                        hover:scale-105 hover:border-bgColor19 hover:bg-bgColor20 active:scale-95 active:bg-bgColor18"
                onClick={() => setBetAmount(betAmount * 2)}
              >
                X 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBottomBar;
