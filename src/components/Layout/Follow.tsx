import x from "@/assets/icons/Contact/x.png";
import telegram from "@/assets/icons/Contact/telegram.png";
import discord from "@/assets/icons/Contact/discord.png";

const Follow = () => {
  return (
    <div className="hidden flex-col items-center justify-evenly border-b border-borderColor2 bg-bgColor3 py-0 md:flex-row md:py-8 lg:flex">
      <div className="w-full flex-1 border-b border-borderColor2 py-4 font-space text-4xl font-bold text-tColor4 sm:text-6xl md:border-0 md:py-0 xs:text-5xl">
        <div className="px-10 sm:px-16">
          <div>Follow</div>
          <div>Us!</div>
        </div>
      </div>
      <div className="hidden h-[130px] w-[1px] bg-borderColor2 md:block"></div>
      <div className="w-full flex-1 border-b border-borderColor2 py-10 text-left text-center text-tColor4 md:border-0">
        Stay Updated! Follow Us and Never Miss the <br /> Latest News &
        Opportunities!
      </div>
      <div className="hidden h-[130px] w-[1px] bg-borderColor2 md:block"></div>
      <div className="flex w-full flex-1 items-center justify-center gap-8 py-10">
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
