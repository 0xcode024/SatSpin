import { rankData } from "@/static/leaderboard";
import LeaderBoardcard from "./CoinFlip/LeaderBoradCard";
import adm from "@/assets/images/profile/adm.png";
import vector_img from "@/assets/images/vector.png";

interface GameLeaderboardProps {
  title: string;
}
const GameLeaderboard = ({ title }: GameLeaderboardProps) => {
  return (
    <div className="hidden overflow-hidden rounded-lg font-space text-sm font-bold md:text-lg lg:text-xl xl:block">
      <div className="bg-bgColor21 py-8 text-center">
        {title} - LEADER BOARD
      </div>
      <div className="relative">
        <div className="absolute top-0 flex h-[60px] w-full cursor-pointer items-center justify-center bg-gradient-to-b from-darkGray to-transparent" />
        <div className="overflow-auto h-[600px]">
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
        <div className="absolute bottom-0 flex h-[120px] w-full cursor-pointer items-center justify-center bg-gradient-to-t from-bg-dark to-transparent" />
      </div>

    </div>
  );
};

export default GameLeaderboard;
