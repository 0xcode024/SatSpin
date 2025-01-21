import React from "react";
import games from "@/assets/icons/SideBar/games.png";
import coin_flip from "@/assets/images/coin_flip.png";
import lucky_wheel from "@/assets/images/lucky_wheel.png";
import coin_flip_pvp from "@/assets/images/coin_flip_pvp.png";
import { useNavigate } from "react-router-dom";
import GameCard from "../Card/GameCard";
const Games = () => {
  const navigate = useNavigate();

  return (
    <div className="justify-center bg-bgColor2 px-[30px] pb-[30px] pt-[105px] font-space md:pb-[65px] md:pt-[195px] xl:flex">
      <div className="w-full xl:w-[34%]">
        <div className="flex items-center justify-center gap-4">
          <div>
            <img src={games} alt="Games" width="30px"></img>
          </div>
          <div className="h-[60px] w-[2px] bg-white"></div>
          <div className="flex gap-2 text-2xl xs:text-3xl">
            <span className="font-bold">POPULAR</span>
            <span>GAMES</span>
          </div>
        </div>
        <div className="text-md w-full px-[8%] text-tColor4 sm:text-lg">
          <div className="pb-[30px] pt-[60px] text-justify">
            With the perfect blend of adrenaline-pumping excitement,
            decentralized technology, and provably fair mechanics, our platform
            delivers an unrivaled gaming experience.
          </div>
          <div className="py-[30px] text-justify">
            Players love the transparency and trust that blockchain brings,
            knowing that every roll, spin, or bet is verifiable on-chain. Plus,
            the seamless integration with crypto wallets ensures that payouts
            are fast and secure.
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between xl:w-[60%]">
        <GameCard
          title="COIN FLIP"
          image={coin_flip}
          index={false}
          onClick={() => {
            navigate("/coinflip");
            window.scrollTo(0, 0);
          }}
        />
        <GameCard
          title="LUCKY WHEEL"
          image={lucky_wheel}
          index={false}
          onClick={() => {
            navigate("/luckywheel");
            window.scrollTo(0, 0);
          }}
        />
        <GameCard
          title="COIN FLIP"
          image={coin_flip_pvp}
          index={true}
          onClick={() => {
            navigate("/coinflip-pvp");
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </div>
  );
};

export default Games;
