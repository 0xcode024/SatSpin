import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "@/components/Loading/PageLoading";
import Header from "@/components/Layout/Header";
import { InscriptionsProvider } from "@/context/InscriptionsContext";
import { SatAddressProvider } from "@/context/SatAddressContext";
import SideBar from "@/components/Layout/SideBar";

export default function Layout() {
  return (
    <div className="text-white">
      <InscriptionsProvider>
        <SatAddressProvider>
          <Suspense fallback={<PageLoading />}>
            <Header />
            <SideBar />
            <Outlet />
          </Suspense>
        </SatAddressProvider>
      </InscriptionsProvider>
    </div>
  );
}
