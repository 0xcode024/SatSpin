import { rankData } from "@/static/leaderboard";
import LeaderBoardcard from "./LeaderBoradCard";
import adm from "@/assets/images/profile/adm.png";
const CoinflipLeaderboard = () => {
  return (
    <div className="overflow-hidden rounded-lg font-space text-xl font-bold">
      <div className="bg-bgColor21 py-8 text-center">
        COIN FLIP - LEADER BOARD
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

export default CoinflipLeaderboard;
