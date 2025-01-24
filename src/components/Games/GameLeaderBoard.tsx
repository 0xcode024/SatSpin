import { rankData } from "@/static/leaderboard";
import LeaderBoardcard from "./CoinFlip/LeaderBoradCard";
import adm from "@/assets/images/profile/adm.png";
interface GameLeaderboardProps {
  title: string;
}
const GameLeaderboard = ({ title }: GameLeaderboardProps) => {
  return (
    <div className="hidden overflow-hidden rounded-lg font-space text-sm font-bold md:text-lg lg:text-xl xl:block">
      <div className="bg-bgColor21 py-8 text-center">
        {title} - LEADER BOARD
      </div>
      <div className="h-[600px] overflow-auto">
        {rankData.map((data, key) => (
          <div className="">
            <LeaderBoardcard
              image={data.image}
              ranking={data.ranking}
              name={data.name}
              amount={data.amount}
              streak={data.streak}
              status={data.status}
              color={data.color}
              key={key}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLeaderboard;
