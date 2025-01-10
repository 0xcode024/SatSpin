import x from "@/assets/icons/Contact/x.png";
import telegram from "@/assets/icons/Contact/telegram.png";
import discord from "@/assets/icons/Contact/discord.png";

const Follow = () => {
  return (
    <div className="flex items-center justify-evenly border-b border-borderColor2 bg-bgColor3 py-8">
      <div className="flex-1 font-space text-6xl font-bold text-tColor4">
        <div className="px-16">
          <div>Follow</div>
          <div>Us!</div>
        </div>
        {/* px-16 py-10 */}
      </div>
      <div className="h-[130px] w-[1px] bg-borderColor2"></div>
      <div className="flex-1 text-left text-center text-tColor4">
        Stay Updated! Follow Us and Never Miss the <br /> Latest News &
        Opportunities!
      </div>
      <div className="h-[130px] w-[1px] bg-borderColor2"></div>
      <div className=" flex flex-1 justify-evenly">
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
