import coinflip_pvp_banner from "@/assets/images/game_banners/coinflip_pvp_banner.png";
import CoinflipLeaderboard from "@/components/Games/GameLeaderBoard";
import GameBoard from "@/components/Games/CoinFlipPvp/GameBoard";
import gameInfoData from "@/static/gameInfos";
import LogoFooter from "@/components/Layout/LogoFooter";
import About from "@/components/Layout/About";
import GameInfoCard from "@/components/Games/GameInfoCard";
import { useEffect } from "react";

const CoinFlipPvp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="rounded-lg bg-gradient-to-b from-darkGray to-bg-dark pl-0 pt-[118px] lg:pl-[50px]">
      <img src={coinflip_pvp_banner}></img>
      <div className="w-[100%] rounded-lg pl-[5%] pr-[7%]">
        <GameBoard />
        <div className="py-16">
          <div className="py-5 text-center text-3xl font-bold text-bgColor6">
            OTHER GAMES
          </div>
          <div className="h-[2px] w-full bg-bgColor6"></div>
          <div className="flex flex-col items-center justify-center gap-12 pb-52 pt-32 ">
            {gameInfoData.map(
              (data, key) =>
                data.url != "/coinflip-pvp" && (
                  <GameInfoCard
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    url={data.url}
                    key={key}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <LogoFooter customClasses="bg-bg-dark" />
      <About customClasses="bg-bg-dark text-white" />
    </div>
  );
};

export default CoinFlipPvp;
