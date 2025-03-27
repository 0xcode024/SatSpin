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
import { BASE_URL, PUBLIC_NETWORK, socket } from "@/constants/config";
import { SUPPORTED_WALLETS } from "@/context/AuthContext/auth.types";
import axios from "axios";
import { JWT_COOKIE } from "@/constants/auth.constants";
import { toast } from "sonner";
import { isTokenExpired } from "@/utils/token";
import { useAccountContext } from "@/context/AccountContext";
import { formatNumber } from "@/utils/utils";
import ManageFundsDialog from "../Dialog/ManageFundsDialog";

interface HeaderProps {
  onDeposit: () => void;
  onConnect: (option: boolean) => void;
}

const Header = ({ onDeposit, onConnect }: HeaderProps) => {
  const navigate = useNavigate();
  const [toggleMenu, setToogleMenu] = useState(false);
  const [show, setShow] = useState(false);
  const {
    wallet: myWalletInfo,
    loginWithWallet,
    logout,
  } = useContext(AuthContext);

  const { point, setPoint } = useAccountContext();

  const {
    connect,
    connected,
    paymentAddress,
    paymentPublicKey,
    address,
    publicKey,
    hasUnisat,
    disconnect,
    provider,
    balance,
    getBalance,
    network,
    getNetwork,
    switchNetwork,
    signMessage,
    signPsbt,
  } = useLaserEyes();

  useEffect(() => {
    const getPoint = async () => {
      console.log("getPoint", paymentAddress);
      if (paymentAddress) {
        const response = await axios
          .get(`${BASE_URL}api/users/info/${paymentAddress}`)
          .then((res) => {
            return res.data;
          })
          .catch((err) => console.error("Error fetching points:", err));

        setPoint(formatNumber(response.balance.btc));
      }
    };
    // Fetch initial points from backend
    getPoint();
  }, [paymentAddress]);

  const signOut = async () => {
    disconnect();
    logout();
  };

  const sign = async (message: string) => {
    try {
      const result = sessionStorage.getItem(JWT_COOKIE);
      if (result != null) {
        if (!isTokenExpired(result)) {
          return;
        }
      }
      const signature = await signMessage(message, paymentAddress);
      console.log("signature", signature);
      const data = {
        paymentAddress: paymentAddress,
        paymentPubkey: paymentPublicKey,
        message: message,
        signature: signature,
        userInfo: {
          username: "",
          balance: {
            btc: 0,
            inscriptions: [],
            runes: [],
          },
          paymentAddress: paymentAddress,
          paymentPubkey: paymentPublicKey,
          ordinalAddress: address,
          ordinalPubkey: publicKey,
        },
      };
      const response = await axios
        .post(`${BASE_URL}api/auth/login`, { ...data })
        .then((res) => {
          return res.data;
        });
      console.log("jwt token: ", response.token);
      sessionStorage.setItem(JWT_COOKIE, response.token);
      const jwt = sessionStorage.getItem(JWT_COOKIE);
      console.log("jwt", jwt);
    } catch (error) {}
  };

  const getToken = async (): Promise<string | null> => {
    let token = sessionStorage.getItem(JWT_COOKIE);
    if (!token || isTokenExpired(token)) {
      await sign("Sat Spin: Test Message");
      token = sessionStorage.getItem(JWT_COOKIE);
    }
    return token;
  };

  const depositBTC = async (amount: string) => {
    try {
      const token = await getToken();
      if (!token) {
        console.error("Failed to retrieve valid token");
        return;
      }
      console.log("Token-------->", token);
      const response = await axios.post(
        `${BASE_URL}api/cash/btc/deposit`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response data of deposit", response.data);
      if (response.data?.psbt?.hex) {
        const { hex, base64 } = response.data.psbt;
        console.log("PSBT Hex:", hex);
        console.log("PSBT Base64:", base64);
        const signPsbtResponse = await signPsbt(hex, true, false);
        console.log("Signed PSBT Response:", signPsbtResponse);
        if (!signPsbtResponse?.signedPsbtHex) {
          console.error("Failed to sign PSBT");
          return;
        }
        const txResponse = await axios.post(
          `${BASE_URL}api/tx/push`,
          { txHex: signPsbtResponse.signedPsbtHex },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Transaction Push Response:", txResponse.data);
      }
    } catch (error: any) {
      console.error(
        "Deposit BTC Error:",
        error?.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    const signInFirebase = async () => {
      if (connected) {
        const myConnect = async (wallet: SUPPORTED_WALLETS) => {
          return loginWithWallet({
            ordinalsAddress: address,
            ordinalsPublicKey: publicKey,
            paymentAddress,
            paymentPublicKey,
            wallet,
          });
        };
        try {
          await myConnect(provider);
          await getNetwork();
        } catch (error: any) {
          console.log("Catch: ", error.message);
          disconnect();
        }
      }
    };
    signInFirebase();
  }, [
    connected,
    network,
    paymentAddress,
    provider,
    address,
    publicKey,
    paymentPublicKey,
  ]);

  useEffect(() => {
    getBalance();
  }, [network, connected]);

  useEffect(() => {
    socket.on("UpdateUser", (data: any) => {
      console.log("UpdateUser Event", data);
      if (data.user.paymentAddress == paymentAddress) {
        toast.info(`${data.message}`, {
          duration: 5000,
        });
        setPoint(formatNumber(data.user.balance.btc));
      }
    });
    return () => {
      socket.off("UpdateUser");
    };
  }, [paymentAddress]);

  return (
    <div className="fixed left-0 right-0 top-0 z-20 border-b border-b-borderColor1  bg-darkGray">
      <div className="flex h-[118px] items-center justify-between px-2 pb-7 pt-14 sm:px-4 md:px-8 lg:px-12 lg:py-7">
        <div className="flex flex-row gap-4">
          <div
            className="hidden cursor-pointer items-center justify-start gap-2 lg:flex"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} width={175} />
          </div>
          <div
            className="block transition-all  duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff] lg:hidden"
            onClick={() => {
              setToogleMenu(true);
            }}
          >
            <img src={menu_icon} />
          </div>
        </div>
        <div className="flex gap-5">
          <BalanceBox balance={paymentAddress ? String(point) : "--"} />
          <ButtonDefault
            label="Deposit"
            customClasses="bg-darkButton px-16 border-0 font-space text-sm hidden lg:block"
            onClick={() => {
              // depositBTC("1000");
              // onDeposit();
              setShow(true);
            }}
          />
        </div>
        <div className="flex gap-4">
          {!myWalletInfo ? (
            <ButtonDefault
              label="Connect"
              customClasses="bg-bitcoin-orange px-8 sm:px-12 lg:px-16 border-0 font-space sm:text-sm text-xs text-black"
              onClick={() => onConnect(true)}
            />
          ) : (
            <div
              className="inline-flex items-center justify-center gap-6 rounded-lg border border-0 bg-bitcoin-orange px-5 py-2 text-center font-space text-xs font-medium text-black transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:brightness-125 hover:drop-shadow-[0_0_3px_#fff] sm:px-12 sm:text-sm lg:px-8"
              onClick={() => {
                signOut();
              }}
            >
              <img
                src={WalletProviderConfig[myWalletInfo.wallet]?.logo}
                width="24px"
              ></img>
              <div>{shortenAddress(myWalletInfo.paymentAddress)}</div>
            </div>
          )}
          <CustomIconButton
            icon={go}
            size={20}
            customClasses="hidden lg:block"
            onClick={() => {
              console.log("paymentAddress", paymentAddress);
            }}
          />
          <CustomIconButton
            icon={sound}
            size={20}
            customClasses="hidden lg:block"
            onClick={() => {
              console.log("network --->", network);
              console.log("connected --->", connected);
              console.log("mywallet info", myWalletInfo);
              console.log("paymentAddress", paymentAddress);
            }}
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="items-left absolute right-0 top-0 z-10 flex h-[100vh] w-full flex-col gap-5 bg-black p-10 text-xl shadow-md sm:p-16 lg:hidden">
          <div
            className="flex cursor-pointer items-center gap-8 px-2 py-1 sm:py-4"
            onClick={() => {
              setToogleMenu(false);
            }}
          >
            <img
              src={x}
              className="w-[25px]  transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]"
            />
          </div>
          <div className="h-[1px] w-full bg-borderColor1" />
          <div
            onClick={() => {
              setToogleMenu(false);
              navigate("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex cursor-pointer items-center gap-8 px-2 py-1 transition-all  duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff] sm:py-4"
          >
            <div className="">
              <img src={home} className="w-[30px]" />
            </div>
            <div className="">Home</div>
          </div>
          <div className="h-[1px] w-full bg-borderColor1"></div>
          <div
            onClick={() => {
              setToogleMenu(false);
              navigate("/");
              window.scrollTo({
                top: 550,
                behavior: "smooth",
              });
            }}
            className="flex cursor-pointer items-center gap-8 px-2 py-1 transition-all  duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff] sm:py-4"
          >
            <div className="">
              <img src={games} className="w-[30px]" />
            </div>
            <div className="">Games</div>
          </div>
          <div className="h-[1px] w-full bg-borderColor1"></div>
          <div
            onClick={() => {
              setToogleMenu(false);
              navigate("/leaderboard");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex cursor-pointer items-center gap-8 px-2 py-1 transition-all  duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff] sm:py-4"
          >
            <div className="">
              <img src={history} className="w-[30px]" />
            </div>
            <div className="">Leaderboard</div>
          </div>
          <div className="h-[1px] w-full bg-borderColor1"></div>
          <div
            onClick={() => {
              setToogleMenu(false);
              navigate("/setting");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex cursor-pointer items-center gap-8 px-2 py-1 transition-all  duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff] sm:py-4"
          >
            <div className="">
              <img src={settings} className="w-[30px]" />
            </div>
            <div className="">Settings</div>
          </div>
        </div>
      )}
      {show && <ManageFundsDialog open={show} onClose={() => setShow(false)} />}
    </div>
  );
};

export default Header;
