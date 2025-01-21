import path from "@/constants/path";
import CoinFlip from "@/pages/Games/CoinFlip";
import CoinFlipPvp from "@/pages/Games/CoinFlipPvp";
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
  {
    path: path.COINFLIPPVP,
    element: <CoinFlipPvp />,
  },
];

export default HomeRoutes;
