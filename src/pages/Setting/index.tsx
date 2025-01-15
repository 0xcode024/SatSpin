import BaseFooter from "@/components/Layout/BaseFooter";
import BalanceChart from "@/components/Settings/BalanceChart";
import ProfileInfo from "@/components/Settings/ProfileInfo";
import ProfilelWalletInfo from "@/components/Settings/ProfileWalletInfo";
import TxHistory from "@/components/Settings/TxHistory";

const Setting = () => {
  return (
    <div className="bg-bg-dark pl-[50px] pt-[118px] font-space">
      <div className="pb-[400px] pl-[100px] pr-[150px] pt-36">
        <div className="py-4 text-3xl font-bold text-bgColor6">
          PROFILE SETTINGS
        </div>
        <div className="h-0.5 w-full bg-bgColor6"></div>
        <div className="flex justify-between py-12">
          <ProfileInfo />
          <div className="flex w-[42%] flex-col justify-between">
            <ProfilelWalletInfo balance={5340} />
            {/* <ProfilelWalletInfo balance={5340} /> */}
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
