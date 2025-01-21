import PlayerItem from "./PlayerItem";
import adm from "@/assets/images/profile/adm.png";

const GameRound = () => {
  return (
    <div className="border-bgColor39 relative flex w-full justify-between gap-2 overflow-hidden rounded-lg border-[3px] bg-darkGray">
      <div className="w-[42%] bg-bgColor10 py-4 pl-4">
        <PlayerItem
          image={adm}
          balance={0.01}
          option={true}
          name="PLAYER NAME"
        />
      </div>
      <div className="w-[42%] bg-bgColor10 py-4 pr-4">
        <PlayerItem
          image={adm}
          balance={0.01}
          option={false}
          name="PLAYER NAME"
        />
      </div>
      <div className="border-bgColor41 absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border bg-bg-dark text-5xl font-bold">
        <div>2</div>
      </div>
    </div>
  );
};

export default GameRound;
