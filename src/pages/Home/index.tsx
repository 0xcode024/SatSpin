import banner from "@/assets/images/banner.png";
import FlowBox from "@/components/Boxs/FlowBox";
import BaseFooter from "@/components/Layout/BaseFooter";
import Games from "@/components/Layout/Games";

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
