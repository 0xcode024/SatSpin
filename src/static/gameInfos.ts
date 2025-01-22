import lukcywhell from "@/assets/images/games/lucky_wheel.png";
import coinflip from "@/assets/images/games/coinflip.png";
import coinflip_pvp from "@/assets/images/games/coinflip_pvp.png";
import coin_flip_mobile from "@/assets/mobile/games/coin_flip.png";
import lucky_wheel_mobile from "@/assets/mobile/games/lucky_wheel.png";
import coin_flip_pvp_mobile from "@/assets/mobile/games/coin_flip_pvp.png";
const gameInfoData = [
  {
    image: lukcywhell,
    mobile: lucky_wheel_mobile,
    title: "Lucky Wheel",
    description:
      "Clorful whell divided into multiple sections, each representin different prizes or outcomes",
    url: "/luckywheel",
  },
  {
    image: coinflip_pvp,
    mobile: coin_flip_pvp_mobile,
    title: "Coin Flip PVP",
    description:
      "Players choose one side, and then the coin is flipped either physically or virtually.",
    url: "/coinflip-pvp",
  },

  {
    image: coinflip,
    mobile: coin_flip_mobile,
    title: "Coin Flip",
    description:
      "Players choose one side, and then the coin is flipped either physically or virtually.",
    url: "/coinflip",
  },
];
export default gameInfoData;
