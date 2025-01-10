import React, { useState } from "react";
// import pic1 from "@/assets/images/1.png";
// import pic2 from "@/assets/images/2.png";
// import pic3 from "@/assets/images/3.png";
// import pic4 from "@/assets/images/4.png";
// import pic5 from "@/assets/images/5.png";
import Table from "./Table";
import sat1 from "@/assets/images/c9a456fa0dd818dc767b.png";
import sat2 from "@/assets/images/0dc694c7e21fe7dce1b8.png";
import sat3 from "@/assets/images/0eb2fe1ddd94f924326d.png";
import sat4 from "@/assets/images/8fc0c7c37c0c76eef653.png";
import { useInscriptions } from "../../context/InscriptionsContext";

// const pics = [pic1, pic2, pic3, pic4, pic5];
const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Inscriptions", "Rare Sats", "Other Sats"];
  const { inscriptions } = useInscriptions();
  // const handleNext = () => {
  //   if (activeTab < tabs.length - 1) {
  //     setActiveTab(activeTab + 1);
  //   }
  // };

  // const handleBack = () => {
  //   if (activeTab > 0) {
  //     setActiveTab(activeTab - 1);
  //   }
  // };
  console.log("gg", inscriptions);
  const sats = [
    {
      name: "Mythic",
      id: "#22323232",
      src: sat1,
    },
    {
      name: "Legendary",
      id: "#22323232",
      src: sat2,
    },
    {
      name: "Legacy Sats",
      id: "#22323232",
      src: sat3,
    },
    {
      name: "Black Legendary",
      id: "#22323232",
      src: sat4,
    },
  ];
  return (
    <div className="ml-24 flex h-screen items-start justify-start">
      <div className="text-center">
        <ul className="my-4 flex items-center justify-start">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`text-gray-500 cursor-pointer border-b-4 px-4 py-2 ${activeTab === index ? "border-pink-500 text-pink-500" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="mx-auto w-full">
          {activeTab === 0 && (
            <div className="flex flex-wrap">
              {inscriptions.map((item, key) => (
                <img
                  key={key}
                  src={`https://snapshots.magisat.io/${item}`}
                  alt=""
                  className="p-4 w-32 h-36"
                />
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className="bg-[#929c9c]">
              <Table />
            </div>
          )}
          {activeTab === 1 && (
            <div className="flex flex-row">
              {sats.map((item, key) => (
                <div key={key} className="flex flex-col p-2">
                  <div className="bg-[#1b1a1a] p-3">
                    <div className="bg-[#3d3c3c]">
                      <img src={item.src} />
                    </div>
                    <div className="flex flex-col justify-start text-start">
                      <div className="text-xs">{item.name}</div>
                      <div className="text-xs ">{item.id}</div>
                    </div>
                    <div className="flex flex-row justify-between gap-4 pt-2">
                      <button className="h-8 w-16 rounded-lg bg-pink-500 text-xs text-black">
                        adfafdas
                      </button>
                      <button className="h-8 w-16 rounded-lg bg-pink-500 text-xs text-black">
                        adfafdas
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
