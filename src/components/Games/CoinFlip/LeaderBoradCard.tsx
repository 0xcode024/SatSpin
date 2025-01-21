import adm from "@/assets/images/profile/adm.png";

interface LeaderBoardcardProps {
  image: any;
  ranking: number;
  name: string;
  amount: number;
  streak: number;
  status: boolean;
  color: string;
}
const LeaderBoardcard = ({
  image,
  ranking,
  name,
  amount,
  streak,
  status,
  color,
}: LeaderBoardcardProps) => {
  return (
    <div className="bg-borderColor2 px-8 py-2">
      <div className="flex items-center justify-between border-b-[2px] border-solid border-bgColor6 py-4">
        <div className="text-bgColor22">RANK</div>
        <div>
          <img src={image} width="40px" />
        </div>
        <div
          className={`cursor-pointer transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]`}
          style={{ color: color }}
        >
          {ranking}
        </div>
        <div style={{ color: color }} className="hidden sm:block">
          {name}
        </div>
        <div className="text-bgColor22">º</div>
        <div className="text-bgColor22">{streak}x STREAK</div>
        <div className="text-bgColor23">${amount}</div>
        <div>{status ? "WIN" : "LOSE"}</div>
      </div>
    </div>
  );
};
export default LeaderBoardcard;
