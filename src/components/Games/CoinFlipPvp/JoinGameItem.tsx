import bitcoin from "@/assets/images/coins/bitcoin.png";

const JoinGameItem = () => {
  return (
    <div className="border-bgColor39 flex w-full justify-between gap-2 overflow-hidden rounded-lg border-[3px] bg-darkGray">
      <div className="w-[42%] bg-bgColor10 py-4 pl-4">
        <div className="border-bgColor38 from-bgColor34 to-bgColor35 flex h-full items-center justify-center  rounded-lg border bg-gradient-to-b px-5 py-10 ">
          <div className="rounded-lg bg-gradient-to-r from-bgColor16 to-bgColor17 px-2 py-3 text-sm">
            JOIN GAME
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div>
          <img src={bitcoin} />
        </div>
        <div>0.01</div>
      </div>
      <div className="w-[42%] bg-bgColor10 py-4 pr-4">
        <div className="bg-bgColor37 border-bg-bgColor33 flex h-full items-center justify-center rounded-lg border py-10">
          <div className="bg-bgColor33 rounded-lg px-2 py-3 text-sm">
            JOIN GAME
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGameItem;
