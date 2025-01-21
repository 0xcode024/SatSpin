import SlideBar from "./SlideBar";

const GameBottomBar = () => {
  return (
    <div className="align-center absolute bottom-0 flex w-[84%] justify-between bg-black px-6 py-4">
      <div className="w-[300px]">
        <div className="text-lg">AUTO BET AMOUNT</div>
        <div className="w-full py-4">
          <SlideBar />
        </div>
      </div>
      <div className="flex-between flex gap-16">
        <div className="">
          <div className="text-lg">POTENTIAL WIN</div>
          <div className="rounded-lg bg-bgColor2 py-4 pl-6 pr-28 text-xl">
            $200
          </div>
        </div>
        <div>
          <div className="invisible text-lg ">Flip Coin</div>

          <div className="flex justify-around gap-5 rounded-lg bg-bgColor2 bg-gradient-to-r from-bgColor16 to-bgColor17 px-5 py-3 text-xl font-bold text-black">
            <div>Flip Coin</div>
            <div className="h-[30px] w-[2px] bg-bgColor18"></div>
            <div>100 USD</div>
          </div>
        </div>
        <div className="">
          <div className="text-lg">WAGER</div>
          <div className="flex items-center justify-between gap-20 rounded-lg bg-bgColor2 px-6 py-2 text-xl">
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
