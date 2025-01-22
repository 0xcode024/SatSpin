import logo from "@/assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import BalanceBox from "../Boxs/BalanceBox";
import ButtonDefault from "../Buttons/ButtonDefault";
import CustomIconButton from "../Buttons/IconButton";
import sound from "@/assets/icons/sound.png";
import go from "@/assets/icons/go.png";
import menu_icon from "@/assets/mobile/menu.png";

interface HeaderProps {
  onDeposit: () => void;
  onConnect: () => void;
}

const Header = ({ onDeposit, onConnect }: HeaderProps) => {
  const navigate = useNavigate();

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
          <div className="block lg:hidden">
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
            onClick={() => {}}
          ></CustomIconButton>
          <CustomIconButton
            icon={sound}
            size={20}
            customClasses="hidden lg:block"
            onClick={() => {}}
          ></CustomIconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
