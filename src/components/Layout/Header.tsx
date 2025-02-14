import logo from "@/assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import BalanceBox from "../Boxs/BalanceBox";
import ButtonDefault from "../Buttons/ButtonDefault";
import CustomIconButton from "../Buttons/IconButton";
import sound from "@/assets/icons/sound.png";
import go from "@/assets/icons/go.png";
import menu_icon from "@/assets/mobile/menu.png";
import { useContext, useEffect, useState } from "react";
import home from "@/assets/icons/SideBar/home.png";
import games from "@/assets/icons/SideBar/games.png";
import history from "@/assets/icons/SideBar/history.png";
import settings from "@/assets/icons/SideBar/settings.png";
import x from "@/assets/images/X.png";
import { AuthContext } from "@/context/AuthContext";
import { shortenAddress } from "@/utils/bitcoin.utils";
import { WalletProviderConfig } from "../Dialog/ConnectWallet";
import { useLaserEyes } from "@omnisat/lasereyes";

interface HeaderProps {
  onDeposit: () => void;
  onConnect: (option: boolean) => void;
}

const Header = ({ onDeposit, onConnect }: HeaderProps) => {
  const navigate = useNavigate();
  const [toggleMenu, setToogleMenu] = useState(false);
  const { wallet: myWalletInfo, loginWithWallet, logout } = useContext(AuthContext);
  const { connect, connected, paymentAddress, paymentPublicKey, address, publicKey, hasUnisat, disconnect, provider, balance, getBalance, network, getNetwork } =
    useLaserEyes();
  const signOut = async () => {
    disconnect();
    logout();
  };

  const satoshisToBTC = (satoshis: number | undefined): string => {
    if (Number.isNaN(satoshis) || satoshis === undefined) return '--'
    const btcValue = satoshis / 100000000
    if (Number.isNaN(btcValue)) return '--'
    return btcValue.toFixed(8)
  }
  // useEffect(() => {
  //   getBalance();
  // }, [connected, network])

  return (
    <div className="fixed left-0 right-0 top-0 z-20 border-b border-b-borderColor1  bg-darkGray">
      <div className="flex h-[118px] items-center justify-between px-2 pb-7 pt-14 sm:px-4 md:px-8 lg:px-12 lg:py-7">
        <div className="flex flex-row gap-4">
          <div
            className="hidden cursor-pointer items-center justify-start gap-2 lg:flex"
            onClick={() => { navigate("/"); window.scrollTo(0, 0) }}
          >
            <img src={logo} width={175} />
          </div>
          <div className="block lg:hidden  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]" onClick={() => { setToogleMenu(true) }}>
            <img src={menu_icon} />
          </div>
        </div>
        <div className="flex gap-5">
          <BalanceBox balance={satoshisToBTC(balance)} />
          <ButtonDefault
            label="Deposit"
            customClasses="bg-darkButton px-16 border-0 font-space text-sm hidden lg:block"
            onClick={() => onDeposit()}
          />
        </div>
        <div className="flex gap-4">
          { !myWalletInfo ? <ButtonDefault
            label="Connect"
            customClasses="bg-bitcoin-orange px-8 sm:px-12 lg:px-16 border-0 font-space sm:text-sm text-xs text-black"
            onClick={() => onConnect(true)}
          /> : <div className="inline-flex px-5 py-2 items-center justify-center gap-6 rounded-lg border text-center font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out hover:brightness-125 hover:drop-shadow-[0_0_3px_#fff] bg-bitcoin-orange sm:px-12 lg:px-8 border-0 font-space sm:text-sm text-xs text-black"
            onClick={() => {
              signOut();
            }}
          >
            <img src={WalletProviderConfig[myWalletInfo.wallet]?.logo} width="24px"></img>
            <div>{shortenAddress(myWalletInfo.paymentAddress)}</div>
          </div>}
          <CustomIconButton
            icon={go}
            size={20}
            customClasses="hidden lg:block"
            onClick={() => { }}
          />
          <CustomIconButton
            icon={sound}
            size={20}
            customClasses="hidden lg:block"
            onClick={() => { }}
          />
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
          <div onClick={() => {
            setToogleMenu(false); navigate("/"); window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={home} className="w-[30px]" />
            </div>
            <div className="">Home</div>
          </div>
          <div className="w-full h-[1px] bg-borderColor1"></div>
          <div onClick={() => {
            setToogleMenu(false); navigate("/"); window.scrollTo({
              top: 550,
              behavior: "smooth",
            });
          }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={games} className="w-[30px]" />
            </div>
            <div className="">Games</div>
          </div>
          <div className="w-full h-[1px] bg-borderColor1"></div>
          <div onClick={() => {
            setToogleMenu(false); navigate("/leaderboard"); window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={history} className="w-[30px]" />
            </div>
            <div className="">Leaderboard</div>
          </div>
          <div className="w-full h-[1px] bg-borderColor1"></div>
          <div onClick={() => {
            setToogleMenu(false); navigate("/setting"); window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }} className="cursor-pointer flex gap-8 items-center py-1 sm:py-4 px-2  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]">
            <div className="">
              <img src={settings} className="w-[30px]" />
            </div>
            <div className="">Settings</div>
          </div>
        </div>

      )}
    </div>
  );
};

export default Header;
