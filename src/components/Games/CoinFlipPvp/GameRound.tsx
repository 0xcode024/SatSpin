import PlayerItem from "./PlayerItem";
import adm from "@/assets/images/profile/adm.png";

const GameRound = () => {
  return (
    <div className="relative flex w-full justify-between gap-2 overflow-hidden rounded-lg border-[3px] border-bgColor39 bg-darkGray">
      <div className="flex w-[42%] justify-end bg-bgColor10 py-4">
        <PlayerItem
          image={adm}
          balance={0.01}
          option={true}
          name="PLAYER NAME"
        />
      </div>
      <div className="flex w-[42%] justify-start bg-bgColor10 py-4">
        <PlayerItem
          image={adm}
          balance={0.01}
          option={false}
          name="PLAYER NAME"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 sm:h-24 sm:w-24 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-bgColor41 bg-bg-dark text-4xl sm:text-5xl font-bold">
        <div>2</div>
      </div>

    </div>
  );
};

export default GameRound;
