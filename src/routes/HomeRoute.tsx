import path from "@/constants/path";
import CoinFlip from "@/pages/Games/CoinFlip";
import LuckyWheel from "@/pages/Games/LuckyWheel";
import Home from "@/pages/Home";
import LeaderBoard from "@/pages/LeaderBoard";
import Setting from "@/pages/Setting";
const HomeRoutes = [
  {
    path: path.HOME,
    element: <Home />,
  },
  {
    path: path.LEADERBOARD,
    element: <LeaderBoard />,
  },
  {
    path: path.SETTING,
    element: <Setting />,
  },
  {
    path: path.COINFLIP,
    element: <CoinFlip />,
  },
  {
    path: path.LUCKEYWHEEL,
    element: <LuckyWheel />,
  },
];

export default HomeRoutes;
