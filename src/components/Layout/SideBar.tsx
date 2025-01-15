import React from "react";
import { useNavigate } from "react-router-dom";
import CustomIconButton from "../Buttons/IconButton";
import home from "@/assets/icons/SideBar/home.png";
import games from "@/assets/icons/SideBar/games.png";
import history from "@/assets/icons/SideBar/history.png";
import settings from "@/assets/icons/SideBar/settings.png";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="group fixed bottom-0 left-0 top-[118px]  z-20 flex w-[50px] flex-col border-r border-r-borderColor1 bg-bg-dark transition-all duration-500 ease-in-out hover:w-[84px]">
      <CustomIconButton
        icon={home}
        size={25}
        customClasses="border-r-0 border-l-0 border-t-1 border-b-1 border-t-borderColor1 border-b-borderColor1 h-[142px] rounded-none"
        onClick={() => {
          navigate("/");
        }}
      ></CustomIconButton>
      <CustomIconButton
        icon={games}
        size={25}
        customClasses="border-r-0 border-l-0 border-t-0 border-b-1 border-b-borderColor1 h-[142px] rounded-none"
        onClick={() => {
          navigate("/");
        }}
      ></CustomIconButton>
      <CustomIconButton
        icon={history}
        size={25}
        customClasses="border-r-0 border-l-0 border-t-0 border-b-1 border-b-borderColor1 h-[142px] rounded-none"
        onClick={() => {
          navigate("/leaderboard");
        }}
      ></CustomIconButton>
      <CustomIconButton
        icon={settings}
        size={25}
        customClasses="border-r-0 border-l-0 border-t-0 border-b-1 border-b-borderColor1 h-[142px] rounded-none"
        onClick={() => {}}
      ></CustomIconButton>
    </div>
  );
};

export default SideBar;
