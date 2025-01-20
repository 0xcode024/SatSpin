import coinflip_banner from "@/assets/images/game_banners/coinflip_banner.png";
import CoinflipLeaderboard from "@/components/Games/CoinFlip/CoinFlipLeaderBoard";
import GameBoard from "@/components/Games/CoinFlip/GameBoard";
import GameInfoCard from "@/components/Games/GameInfoCard";

import lukcywhell from "@/assets/images/games/lucky_wheel.png";
import gameInfoData from "@/static/gameInfos";
import Games from "@/components/Layout/Games";
import BaseFooter from "@/components/Layout/BaseFooter";
import LogoFooter from "@/components/Layout/LogoFooter";
import About from "@/components/Layout/About";

const CoinFlip = () => {
  return (
    <div className="rounded-lg bg-gradient-to-b from-darkGray to-bg-dark pl-[50px] pt-[118px]">
      <img src={coinflip_banner}></img>
      <div className="w-[100%] rounded-lg pl-[5%] pr-[7%]">
        <GameBoard />
        <CoinflipLeaderboard />
        <div className="py-16">
          <div className="py-5 text-center text-3xl font-bold text-bgColor6">
            OTHER GAMES
          </div>
          <div className="h-[2px] w-full bg-bgColor6"></div>
          <div className="flex flex-col items-center justify-center gap-12 pb-52 pt-32 ">
            {gameInfoData.map((data, key) => (
              <GameInfoCard
                image={data.image}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
      <LogoFooter customClasses="bg-bg-dark" />
      <About customClasses="bg-bg-dark text-white" />
    </div>
  );
};

export default CoinFlip;
