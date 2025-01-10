import React from "react";
import CoinItem from "../Items/CoinItem";
import Marquee from "react-fast-marquee";
import vec from "@/assets/images/logo1.png";
const FlowBox = () => {
  // const data = [
  //   "Lucrosus",
  //   "Rizzo",
  //   "Bittensor Guru Podcast",
  //   "Taostats",
  //   // "Giga Corporation",
  //   // "Round Table21",
  //   // "Tensorplex",
  //   // "Lucrosus",
  //   // "Rizzo",
  //   // "Bittensor Guru Podcast",
  //   // "Taostats",
  //   // "Giga Corporation",
  //   // "Round Table21",
  //   // "Tensorplex",
  // ];
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
    <div className="bg-bgColor1 flex items-center gap-10 px-5 py-6">
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
    // <div className="mt-8">
    //   <div className="bg-[#7A94F1]">
    //     {/* <div className="absolute inset-0 grid grid-cols-6 opacity-70">
    //       <div className="col-span-1">
    //         <img src={vec} className="h-[100%]" />
    //       </div>
    //       <div className="col-span-1">
    //         <img src={vec} className="h-[100%]" />
    //       </div>
    //       <div className="col-span-1">
    //         <img src={vec} className="h-[100%]" />
    //       </div>
    //       <div className="col-span-1">
    //         <img src={vec} className="h-[100%]" />
    //       </div>
    //       <div className="col-span-2">
    //         <img src={vec} className="h-[100%] pl-20" />
    //       </div>
    //     </div> */}
    //     <Marquee>
    //       {data.map((item, index) => (
    //         <div
    //           className="flex items-center justify-start gap-10 text-[24px]"
    //           key={index}
    //         >
    //           <CoinItem
    //             color="red"
    //             name="LUCKY WHELL"
    //             symbol="CASINOKING"
    //             percent={11.03}
    //             price={0.3123}
    //           ></CoinItem>
    //         </div>
    //       ))}
    //     </Marquee>
    //   </div>
    // </div>
  );
};

export default FlowBox;
