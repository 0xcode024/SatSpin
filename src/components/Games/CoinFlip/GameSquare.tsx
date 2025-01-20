import square from "@/assets/images/square.png";
import sat_icon from "@/assets/images/game_icons/big_sat_icon.png";
import logo from "@/assets/images/logo.png";

const GameSquare = () => {
  return (
    <div
      className="relative flex w-full items-center justify-center gap-2 pb-8"
      style={{
        backgroundImage: `url(${square})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "blend", // or another blend mode
      }}
    >
      <div className="absolute top-14 flex w-full flex-col items-center justify-between gap-2 px-[20px] lg:flex-row">
        <div className="flex gap-2 text-sm opacity-[30%]">
          <div>Coin Flip Powered by</div>
          <img src={logo} width="70px" />
        </div>
        <div className="text-xl opacity-[30%]">50% CHANCE TO WIN</div>
      </div>

      <div>
        <img src={sat_icon} />
      </div>
    </div>
  );
};

export default GameSquare;
