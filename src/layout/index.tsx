import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LEATHER, MAGIC_EDEN, OKX, OYL, UNISAT, WIZZ, XVERSE, PHANTOM, useLaserEyes } from '@omnisat/lasereyes';
import PageLoading from "@/components/Loading/PageLoading";
import Header from "@/components/Layout/Header";
import SideBar from "@/components/Layout/SideBar";
import FundsDialog from "@/components/Dialog/FundsDialog";
import ConnectWalletDialog from "@/components/Dialog/ConnectWallet";

export default function Layout() {
  const { connect, connected, paymentAddress, paymentPublicKey, address, publicKey, hasUnisat, disconnect, provider, network, getNetwork, switchNetwork, getBalance } = useLaserEyes();
  const [show, setShow] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
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
