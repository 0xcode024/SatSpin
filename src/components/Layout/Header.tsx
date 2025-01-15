import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import logo from "@/assets/images/logo.png";
import Unisat from "@/assets/images/unisat.svg";
import xverse from "@/assets/images/xverse-logo.png";
import magiceden from "@/assets/images/magic-eden-logo.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { addressShortening } from "@/utils/address";
import { useNavigate } from "react-router-dom";
import SearchComponent from "./Search";
import BalanceBox from "../Boxs/BalanceBox";
import ButtonDefault from "../Buttons/ButtonDefault";
import CustomIconButton from "../Buttons/IconButton";
import sound from "@/assets/icons/sound.png";
import go from "@/assets/icons/go.png";
interface HeaderProps {
  onDeposit: () => void;
  onConnect: () => void;
}

const Header = ({ onDeposit, onConnect }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 right-0 top-0 z-20 border-b border-b-borderColor1  bg-darkGray">
      <div className="flex h-[118px] items-center justify-between px-12 py-7">
        <div className="flex flex-row gap-4">
          <div
            className="flex cursor-pointer items-center justify-start gap-2"
            onClick={() => navigate("/")}
          >
            <img src={logo} width={175} />
          </div>
        </div>
        <div className="hidden gap-5 lg:flex">
          <BalanceBox balance={0.0002} />
          <ButtonDefault
            label="Deposit"
            customClasses="bg-darkButton px-[60px] border-0 font-space text-sm"
            onClick={() => onDeposit()}
          />
        </div>
        <div className="hidden gap-4 md:flex">
          <ButtonDefault
            label="Connect"
            customClasses="bg-bitcoin-orange px-[60px] border-0 font-space text-sm text-black"
            onClick={() => onConnect()}
          />
          <CustomIconButton
            icon={go}
            size={20}
            customClasses=""
            onClick={() => {}}
          ></CustomIconButton>
          <CustomIconButton
            icon={sound}
            size={20}
            customClasses=""
            onClick={() => {}}
          ></CustomIconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
