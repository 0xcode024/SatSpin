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

const Header = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const { connectWallet, walletType, paymentAddress, signOut } = useAuth();
  const handleOpenWalletModal = () => {
    setModalOpen(!modalOpen);
  };
  const moveProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="bg-darkGray border-b-borderColor1 fixed left-0 right-0 top-0 z-50  border-b">
      <div className="flex h-[118px] items-center justify-between px-12 py-7">
        <div className="flex flex-row gap-4">
          <Link to="/">
            <div className="flex cursor-pointer items-center justify-start gap-2">
              <img src={logo} width={175} />
            </div>
          </Link>
        </div>
        <div className="flex gap-5">
          <BalanceBox balance={0.0002} />
          <ButtonDefault
            label="Deposit"
            customClasses="bg-darkButton px-[60px] border-0 font-space text-sm"
            onClick={() => {}}
          />
        </div>
        <div className="flex gap-4">
          <ButtonDefault
            label="Connect"
            customClasses="bg-bitcoin-orange px-[60px] border-0 font-space text-sm text-black"
            onClick={() => {}}
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
        {/* {walletType ? (
          <Menu>
            <MenuHandler>
              <Button
                placeholder={undefined}
                className="bg-[#ff00ff]"
                onClick={handleOpenWalletModal}
              >
                {addressShortening(paymentAddress)}
              </Button>
            </MenuHandler>
            <MenuList placeholder={undefined} className="bg-dark">
              <MenuItem placeholder={undefined}>
                <div
                  className="flex items-center justify-start gap-2 text-white"
                  onClick={moveProfile}
                >
                  <div>Profile</div>
                </div>
              </MenuItem>
              <MenuItem placeholder={undefined}>
                <div
                  className="flex items-center justify-start gap-2 text-white"
                  onClick={signOut}
                >
                  <div>Logout</div>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuHandler>
              <Button
                placeholder={undefined}
                className="bg-[#ff00ff]"
                onClick={handleOpenWalletModal}
              >
                Connect Wallet
              </Button>
            </MenuHandler>
            <MenuList placeholder={undefined} className="bg-dark">
              <MenuItem placeholder={undefined}>
                <div
                  className="flex items-center justify-start gap-2 text-white"
                  onClick={() => connectWallet("Unisat")}
                >
                  <Unisat />
                  <div>Unisat</div>
                </div>
              </MenuItem>
              <MenuItem placeholder={undefined}>
                <div
                  className="flex items-center justify-start gap-2 text-white"
                  onClick={() => connectWallet("Xverse")}
                >
                  <img src={xverse} />
                  <div>Xverse</div>
                </div>
              </MenuItem>
              <MenuItem placeholder={undefined}>
                <div
                  className="flex items-center justify-start gap-2 text-white"
                  onClick={() => connectWallet("MagicEden")}
                >
                  <img src={magiceden} width={30} />
                  <div>Magic Eden</div>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        )} */}
      </div>
    </div>
  );
};

export default Header;
