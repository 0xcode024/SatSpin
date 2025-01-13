import React from "react";
import CoinItem from "../Items/CoinItem";
import Marquee from "react-fast-marquee";
import vec from "@/assets/images/logo1.png";
const FlowBox = () => {
  const items = [
    {
      color: "red",
      name: "LUCKY WHELL",
      symbol: "CASINOKING",
      percent: 11.03,
      price: 0.3123,
    },
    {
      color: "red",
      name: "COIN FLIP",
      symbol: "CRYPTO12",
      percent: 68,
      price: 0.214,
    },
    {
      color: "red",
      name: "COIN FLIP",
      symbol: "ORDINALBOSS",
      percent: 73.68,
      price: 1.14,
    },
  ];
  const repeatedItems = Array(3).fill(items).flat();
  return (
    <div className="flex items-center gap-10 bg-bgColor1 px-5 py-6">
      <Marquee speed={180}>
        <div className="flex">
          {repeatedItems.map((item, index) => (
            <div key={index}>
              <CoinItem
                color={item.color}
                name={item.name}
                symbol={item.symbol}
                percent={item.percent}
                price={item.price}
              ></CoinItem>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FlowBox;
