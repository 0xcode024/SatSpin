import React from "react";
import games from "@/assets/icons/SideBar/games.png";
import coin_flip from "@/assets/images/coin_flip.png";
import lucky_wheel from "@/assets/images/lucky_wheel.png";
import coin_flip_pvp from "@/assets/images/coin_flip_pvp.png";

import GameCard from "../Card/GameCard";
const Games = () => {
  return (
    <div className="flex justify-around bg-bgColor2 px-[30px] pb-[65px] pt-[195px] font-space">
      <div className="w-[34%]">
        <div className="flex items-center gap-4">
          <div>
            <img src={games} alt="Games" width="30px"></img>
          </div>
          <div className="h-[60px] w-[2px] bg-white"></div>
          <div className="flex gap-2 text-3xl">
            <span className="font-bold">POPULAR</span>
            <span>GAMES</span>
          </div>
        </div>
        <div className="w-[90%] px-[8%] text-tColor4">
          <div className="pb-[30px] pt-[60px] text-justify text-lg">
            With the perfect blend of adrenaline-pumping excitement,
            decentralized technology, and provably fair mechanics, our platform
            delivers an unrivaled gaming experience.
          </div>
          <div className="py-[30px] text-justify text-lg">
            Players love the transparency and trust that blockchain brings,
            knowing that every roll, spin, or bet is verifiable on-chain. Plus,
            the seamless integration with crypto wallets ensures that payouts
            are fast and secure.
          </div>
        </div>
      </div>
      <div className="flex w-[60%] justify-center gap-10">
        <GameCard title="COIN FLIP" image={coin_flip}></GameCard>
        <GameCard title="LUCKY WHEEL" image={lucky_wheel}></GameCard>
        <GameCard title="COIN FLIP" image={coin_flip_pvp}></GameCard>
      </div>
    </div>
  );
};

export default Games;
