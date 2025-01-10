import banner from "@/assets/images/banner.png";
import FlowBox from "@/components/Boxs/FlowBox";
import CoinItem from "@/components/Items/CoinItem";
import About from "@/components/Layout/About";
import BaseFooter from "@/components/Layout/BaseFooter";
import Follow from "@/components/Layout/Follow";
import Games from "@/components/Layout/Games";
import LogoFooter from "@/components/Layout/LogoFooter";

export default function Home() {
  return (
    <div className="pl-[50px] pt-[118px]">
      <div className="w-[100%]">
        <img src={banner}></img>
        <FlowBox />
        <Games />
        <BaseFooter />
      </div>
    </div>
  );
}
