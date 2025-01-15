import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "@/components/Loading/PageLoading";
import Header from "@/components/Layout/Header";
import { InscriptionsProvider } from "@/context/InscriptionsContext";
import { SatAddressProvider } from "@/context/SatAddressContext";
import SideBar from "@/components/Layout/SideBar";
import FundsDialog from "@/components/Dialog/FundsDialog";
import ConnectWalletDialog from "@/components/Dialog/ConnectWallet";

export default function Layout() {
  const [show, setShow] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);

  return (
    <div className="text-white">
      <InscriptionsProvider>
        <SatAddressProvider>
          <Suspense fallback={<PageLoading />}>
            <Header
              onDeposit={() => setShow(true)}
              onConnect={() => setConnectWallet(true)}
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
        </SatAddressProvider>
      </InscriptionsProvider>
    </div>
  );
}
