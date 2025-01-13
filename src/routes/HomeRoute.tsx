import path from "@/constants/path";
import Home from "@/pages/Home";
import LeaderBoard from "@/pages/LeaderBoard";
const HomeRoutes = [
  {
    path: path.HOME,
    element: <Home />,
  },
  {
    path: path.LEADERBOARD,
    element: <LeaderBoard />,
  },
];

export default HomeRoutes;
