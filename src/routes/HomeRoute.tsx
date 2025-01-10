import path from "@/constants/path";
import Home from "@/pages/Home";
import LeaderBoard from "@/pages/LeaderBoard";
import Profile from "@/pages/Profile";
const HomeRoutes = [
  {
    path: path.HOME,
    element: <Home />,
  },
  {
    path: path.PROFILE,
    element: <Profile />,
  },
  {
    path: path.LEADERBOARD,
    element: <LeaderBoard />,
  },
];

export default HomeRoutes;
