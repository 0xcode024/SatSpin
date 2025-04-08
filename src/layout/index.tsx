import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "@/components/Loading/PageLoading";
import Header from "@/components/Layout/Header";
import SideBar from "@/components/Layout/SideBar";
import ConnectWalletDialog from "@/components/Dialog/ConnectWallet";

export default function Layout() {
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
