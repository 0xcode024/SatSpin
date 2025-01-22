import banner from "@/assets/images/banner.png";
import mobile_banner from "@/assets/mobile/banner.png";

import FlowBox from "@/components/Boxs/FlowBox";
import BaseFooter from "@/components/Layout/BaseFooter";
import Games from "@/components/Layout/Games";

export default function Home() {
  return (
    <div className="pl-0 pt-[118px] font-space lg:pl-[50px]">
      <div className="w-[100%]">
        <img src={banner} className="hidden w-full lg:block"></img>
        <img src={mobile_banner} className="block w-full lg:hidden"></img>
        <FlowBox />
        <Games />
        <BaseFooter />
      </div>
    </div>
  );
}
