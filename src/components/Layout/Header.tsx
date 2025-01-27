import logo from "@/assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import BalanceBox from "../Boxs/BalanceBox";
import ButtonDefault from "../Buttons/ButtonDefault";
import CustomIconButton from "../Buttons/IconButton";
import sound from "@/assets/icons/sound.png";
import go from "@/assets/icons/go.png";
import menu_icon from "@/assets/mobile/menu.png";
import { useState } from "react";
import home from "@/assets/icons/SideBar/home.png";
import games from "@/assets/icons/SideBar/games.png";
import history from "@/assets/icons/SideBar/history.png";
import settings from "@/assets/icons/SideBar/settings.png";
import x from "@/assets/images/X.png";

interface HeaderProps {
  onDeposit: () => void;
  onConnect: () => void;
}

const Header = ({ onDeposit, onConnect }: HeaderProps) => {
  const navigate = useNavigate();
  const [toggleMenu, setToogleMenu] = useState(true);
  return (
    <div className="fixed left-0 right-0 top-0 z-20 border-b border-b-borderColor1  bg-darkGray">
      <div className="flex h-[118px] items-center justify-between px-2 pb-7 pt-14 sm:px-4 md:px-8 lg:px-12 lg:py-7">
        <div className="flex flex-row gap-4">
          <div
            className="hidden cursor-pointer items-center justify-start gap-2 lg:flex"
            onClick={() => navigate("/")}
          >
            <img src={logo} width={175} />
          </div>
          <div className="block lg:hidden  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]" onClick={() => { setToogleMenu(true) }}>
            <img src={menu_icon} />
          </div>
        </div>
        <div className="flex gap-5">
          <BalanceBox balance={0.0002} />
          <ButtonDefault
            label="Deposit"
            customClasses="bg-darkButton px-16 border-0 font-space text-sm hidden lg:block"
            onClick={() => onDeposit()}
          />
        </div>
        <div className="flex gap-4">
          <ButtonDefault
            label="Connect"
            customClasses="bg-bitcoin-orange px-8 sm:px-12 lg:px-16 border-0 font-space sm:text-sm text-xs text-black"
            onClick={() => onConnect()}
          />
          <CustomIconButton
            icon={go}
            size={20}
            customClasses="hidden lg:block"
            onClick={() => { }}
          ></CustomIconButton>
          <CustomIconButton
            icon={sound}
            size={20}
            customClasses="hidden lg:block"
            onClick={() => { }}
          ></CustomIconButton>
        </div>
      </div>
      {toggleMenu && (
        <div
          className="absolute top-0 lg:hidden flex flex-col shadow-md bg-black p-10 sm:p-16 gap-5 z-10 w-full h-[100vh] right-0 items-left text-xl"
        >
          <div className="flex gap-8 items-center py-1 sm:py-4 px-2 cursor-pointer" onClick={() => { setToogleMenu(false) }}>
            <img src={x} className="w-[25px]  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]" />
          </div>
          <div className="w-full h-[1px] bg-borderColor1" />
          <div onClick={() => { setToogleMenu(false); navigate("/") }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={home} className="w-[30px]" />
            </div>
            <div className="">Home</div>
          </div>
          <div className="w-full h-[1px] bg-borderColor1"></div>
          <div onClick={() => { setToogleMenu(false); navigate("/") }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={games} className="w-[30px]" />
            </div>
            <div className="">Games</div>
          </div>
          <div className="w-full h-[1px] bg-borderColor1"></div>
          <div onClick={() => { setToogleMenu(false); navigate("/leaderboard") }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={history} className="w-[30px]" />
            </div>
            <div className="">Leaderboard</div>
          </div>
          <div className="w-full h-[1px] bg-borderColor1"></div>
          <div onClick={() => { setToogleMenu(false); navigate("/setting") }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={settings} className="w-[30px]" />
            </div>
            <div className="">Settings</div>
          </div>
          {/* <div className="w-full h-[1px] bg-borderColor1"></div> */}
        </div>

      )}
    </div>
  );
};

export default Header;
