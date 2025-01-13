import x from "@/assets/icons/Contact/x.png";
import telegram from "@/assets/icons/Contact/telegram.png";
import discord from "@/assets/icons/Contact/discord.png";

const Follow = () => {
  return (
    <div className="flex items-center justify-evenly border-b border-borderColor2 bg-bgColor3 py-8">
      <div className="xs:text-5xl flex-1 font-space text-4xl font-bold text-tColor4 sm:text-6xl">
        <div className="px-10 sm:px-16">
          <div>Follow</div>
          <div>Us!</div>
        </div>
      </div>
      <div className="h-[130px] w-[1px] bg-borderColor2"></div>
      <div className="hidden flex-1 text-left text-center text-tColor4 lg:block">
        Stay Updated! Follow Us and Never Miss the <br /> Latest News &
        Opportunities!
      </div>
      <div className="h-[130px] w-[1px] bg-borderColor2"></div>
      <div className="hidden flex-1 justify-evenly md:flex">
        <div>
          <img src={x} alt="x"></img>
        </div>
        <div>
          <img src={telegram} alt="telegram"></img>
        </div>
        <div>
          <img src={discord} alt="discord"></img>
        </div>
      </div>
    </div>
  );
};

export default Follow;
