import SlideBar from "./SlideBar";

const GameBottomBar = () => {
  return (
    <div className="align-center absolute bottom-0 hidden w-[84%] justify-between bg-black px-6 py-4  text-sm xl:flex 2xl:text-lg ">
      <div className="w-[160px] 2xl:w-[230px]">
        <div className="">AUTO BET AMOUNT</div>
        <div className="w-full py-4">
          <SlideBar />
        </div>
      </div>
      <div className="flex-between flex gap-2 2xl:gap-3">
        <div className="">
          <div className="">POTENTIAL WIN</div>
          <div className="rounded-lg bg-bgColor2 py-4 pl-6 pr-28">$200</div>
        </div>
        <div>
          <div className="invisible">Flip Coin</div>

          <div className="flex items-center justify-around gap-5 rounded-lg bg-bgColor2 bg-gradient-to-r from-bgColor16 to-bgColor17 px-5 py-3 font-bold text-black">
            <div>Flip Coin</div>
            <div className="h-[30px] w-[2px] bg-bgColor18"></div>
            <div>100 USD</div>
          </div>
        </div>
        <div className="">
          <div className="">WAGER</div>
          <div className="3xl:gap-20 flex items-center justify-between gap-10 rounded-lg bg-bgColor2 px-6 py-2">
            <div>$100</div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg border-[3px] border-bgColor20 bg-bgColor19 px-2 py-1">
                1/2
              </div>
              <div className="rounded-lg border-[3px] border-bgColor20 bg-bgColor19 px-2 py-1">
                1/2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBottomBar;
