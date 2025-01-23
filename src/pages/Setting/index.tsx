import BaseFooter from "@/components/Layout/BaseFooter";
import BalanceChart from "@/components/Settings/BalanceChart";
import ProfileInfo from "@/components/Settings/ProfileInfo";
import ProfilelWalletInfo from "@/components/Settings/ProfileWalletInfo";
import TxHistory from "@/components/Settings/TxHistory";

const Setting = () => {
  return (
    <div className="bg-bg-dark pl-0 pt-[118px] font-space lg:pl-[50px]">
      <div className="px-6 pb-[50px] pt-36 sm:px-12 md:pb-[400px] lg:px-24 2xl:pr-[150px]">
        <div className="py-4 text-center text-3xl font-bold text-bgColor6 md:text-left">
          <span className="hidden md:block">PROFILE SETTINGS</span>
          <span className="block text-4xl text-bgColor16 md:hidden">
            Profile Settings
          </span>
        </div>
        <div className="hidden h-0.5 w-full bg-bgColor6 md:block"></div>

        <div className="flex flex-col justify-between gap-4 py-12 2xl:flex-row">
          <ProfileInfo />
          <div className="flex w-full flex-col justify-between gap-4 2xl:w-[42%]">
            <ProfilelWalletInfo balance={5340} />
            <BalanceChart />
          </div>
        </div>
        <TxHistory />
      </div>
      <BaseFooter />
    </div>
  );
};

export default Setting;
