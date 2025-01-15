import path from "@/constants/path";
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
];

export default HomeRoutes;
