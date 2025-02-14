import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LEATHER, MAGIC_EDEN, OKX, OYL, UNISAT, WIZZ, XVERSE, PHANTOM, useLaserEyes, NetworkType } from '@omnisat/lasereyes';
import PageLoading from "@/components/Loading/PageLoading";
import Header from "@/components/Layout/Header";
import SideBar from "@/components/Layout/SideBar";
import FundsDialog from "@/components/Dialog/FundsDialog";
import ConnectWalletDialog from "@/components/Dialog/ConnectWallet";

export default function Layout() {
  const { connect, connected, paymentAddress, paymentPublicKey, address, publicKey, hasUnisat, disconnect, provider, network, getNetwork, switchNetwork, getBalance } = useLaserEyes();
  const [show, setShow] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  useEffect(() => {
    // console.log("PUBLIC_NETWORK", process.env.PUBLIC_NETWORK);
    // try {
    //   switchNetwork(process.env.PUBLIC_NETWORK as NetworkType);
    // } catch (error) {
    //   console.log("Switch Error", error);
    // }
    const switchToNetwork = async () => {
      try {
        await switchNetwork(process.env.PUBLIC_NETWORK as NetworkType);
        await getBalance();
      } catch (error) {
        console.error("Switch Error:", error); // Improved error logging
        alert(`Failed to switch network: ${error || JSON.stringify(error)}`); // Optional user feedback
      }
    };
    if(connected) {
      switchToNetwork().catch((err) => console.error("Async Error:", err));
    }
    getBalance();
  }, [connected, network]);
  return (
    <div className="text-white">
          <Suspense fallback={<PageLoading />}>
            <Header
              onDeposit={() => setShow(true)}
              onConnect={(option: boolean) => setConnectWallet(option)}
            />
            <SideBar />
            <Outlet />
            {show && <FundsDialog open={show} onClose={() => setShow(false)} />}
            {connectWallet && (
              <ConnectWalletDialog
                open={connectWallet}
                onClose={() => setConnectWallet(false)}
              />
            )}
          </Suspense>
    </div>
  );
}
