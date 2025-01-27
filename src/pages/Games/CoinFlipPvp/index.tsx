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
    <div className="rounded-lg 2xl:bg-gradient-to-b from-darkGray to-bg-dark pl-0 pt-[118px] lg:pl-[50px]  bg-black">
      <img className="hidden xl:block" src={coinflip_pvp_banner}></img>
      <div className="w-[100%] rounded-lg 2xl:pl-[5%] 2xl:pr-[7%] px-0">
        <GameBoard />
        <div className="hidden py-16 2xl:block">
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
      <LogoFooter customClasses="bg-bg-dark hidden 2xl:flex" />
      <About customClasses="bg-bg-dark text-white hidden 2xl:flex" />
    </div>
  );
};

export default CoinFlipPvp;
