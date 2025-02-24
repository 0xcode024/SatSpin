import square from "@/assets/images/square.png";
import sat_icon from "@/assets/images/game_icons/sat_icon.png";
import logo from "@/assets/images/logo.png";
import { useRef, useState } from "react";

const GameSquare = () => {
  const coinRef = useRef<any>(null);
  const [rotation, setRotation] = useState(0);
  const [flipDuration, setFlipDuration] = useState(500);
  const [coinStatus, setCoinStatus] = useState(false);

  const rotateCoin = async () => {
    console.log("1");
    const coin = coinRef.current;
    if (coin) {
      const num = Math.floor(Math.random() * 7) + 1;
      setCoinStatus(true);
      coin.style.transition = `transform ${500 * num}ms ease`;
      coin.style.transform = `rotateY(${rotation + 180 * num}deg)`;

      setRotation(rotation + 180 * num);
      setTimeout(() => {
        console.log("FFFF");
        setCoinStatus(false)
      }, 500 * num);
    }
  };
  return (
    <div
      className="relative flex flex-shrink flex-grow items-center justify-center gap-2 overflow-hidden rounded-lg border border-borderColor1 pb-8 xl:border-0"
      style={{
        backgroundImage: `url(${square})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "blend", // or another blend mode
        backgroundColor: "rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="absolute top-14 flex w-full flex-col items-center justify-center gap-2 px-[20px] lg:flex-row 2xl:justify-between">
        <div className="flex gap-2 text-sm opacity-[30%]">
          <div>Coin Flip Powered by</div>
          <img src={logo} width="70px" />
        </div>
        <div className="hidden text-xl opacity-[30%] 2xl:block">
          50% CHANCE TO WIN
        </div>
      </div>

      <div className="px-12 pb-12 pt-28 xl:pt-0">
        <div>
          <style>{`
            .purse {
              height: 160px;
              width: 160px;
              perspective: 1000;
              cursor: pointer;
              -webkit-perspective: 1000;
              -webkit-box-reflect: below 0 linear-gradient(
                hsla(0, 0%, 100%, 0),
                hsla(0, 0%, 100%, 0) 45%,
                hsla(0, 0%, 100%, 0.2)
              );
              -webkit-filter: saturate(1.45) hue-rotate(2deg);
            }
            .coin {
              height: 160px;
              width: 160px;
              position: absolute;
              transform-style: preserve-3d;
              -webkit-transform-style: preserve-3d;
              transform-origin: 50%;
              -webkit-transform-origin: 50%;
            }
            .coin .front,
            .coin .back {
              position: absolute;
              height: 160px;
              width: 160px;
              border-radius: 50%;
              background-size: cover;
            }
            .coin .front {
              transform: translateZ(8px);
              -webkit-transform: translateZ(8px);
            }
            .coin .back {
              transform: translateZ(-8px) rotateY(180deg);
              -webkit-transform: translateZ(-8px) rotateY(180deg);
            }
            .coin .side {
              transform: translateX(72px);
              -webkit-transform: translateX(72px);
              transform-style: preserve-3d;
              -webkit-transform-style: preserve-3d;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
            }
            .coin .side .spoke {
              height: 160px;
              width: 16px;
              position: absolute;
              transform-style: preserve-3d;
              -webkit-transform-style: preserve-3d;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              background: rgb(255, 255, 255);
            }
            .coin .side .spoke:before,
            .coin .side .spoke:after {
              content: '';
              display: block;
              height: 15.68274245px;
              width: 16px;
              position: absolute;
              transform: rotateX(84.375deg);
              -webkit-transform: rotateX(84.375deg);
              background: linear-gradient(
                to bottom,
                rgb(249, 185, 0) 0%,
                rgb(249, 185, 0) 74%,
                rgb(249, 185, 0) 75%,
                rgb(249, 185, 0) 100%
              );
              background-size: 100% 3.48505388px;
            }
            .coin .side .spoke:before {
              transform-origin: top center;
              -webkit-transform-origin: top center;
            }
            .coin .side .spoke:after {
              bottom: 0;
              transform-origin: center bottom;
              -webkit-transform-origin: center bottom;
            }
            .coin .side .spoke:nth-child(16) {
              transform: rotateY(90deg) rotateX(180deg);
              -webkit-transform: rotateY(90deg) rotateX(180deg);
            }
            .coin .side .spoke:nth-child(15) {
              transform: rotateY(90deg) rotateX(168.75deg);
              -webkit-transform: rotateY(90deg) rotateX(168.75deg);
            }
            .coin .side .spoke:nth-child(14) {
              transform: rotateY(90deg) rotateX(157.5deg);
              -webkit-transform: rotateY(90deg) rotateX(157.5deg);
            }
            .coin .side .spoke:nth-child(13) {
              transform: rotateY(90deg) rotateX(146.25deg);
              -webkit-transform: rotateY(90deg) rotateX(146.25deg);
            }
            .coin .side .spoke:nth-child(12) {
              transform: rotateY(90deg) rotateX(135deg);
              -webkit-transform: rotateY(90deg) rotateX(135deg);
            }
            .coin .side .spoke:nth-child(11) {
              transform: rotateY(90deg) rotateX(123.75deg);
              -webkit-transform: rotateY(90deg) rotateX(123.75deg);
            }
            .coin .side .spoke:nth-child(10) {
              transform: rotateY(90deg) rotateX(112.5deg);
              -webkit-transform: rotateY(90deg) rotateX(112.5deg);
            }
            .coin .side .spoke:nth-child(9) {
              transform: rotateY(90deg) rotateX(101.25deg);
              -webkit-transform: rotateY(90deg) rotateX(101.25deg);
            }
            .coin .side .spoke:nth-child(8) {
              transform: rotateY(90deg) rotateX(90deg);
              -webkit-transform: rotateY(90deg) rotateX(90deg);
            }
            .coin .side .spoke:nth-child(7) {
              transform: rotateY(90deg) rotateX(78.75deg);
              -webkit-transform: rotateY(90deg) rotateX(78.75deg);
            }
            .coin .side .spoke:nth-child(6) {
              transform: rotateY(90deg) rotateX(67.5deg);
              -webkit-transform: rotateY(90deg) rotateX(67.5deg);
            }
            .coin .side .spoke:nth-child(5) {
              transform: rotateY(90deg) rotateX(56.25deg);
              -webkit-transform: rotateY(90deg) rotateX(56.25deg);
            }
            .coin .side .spoke:nth-child(4) {
              transform: rotateY(90deg) rotateX(45deg);
              -webkit-transform: rotateY(90deg) rotateX(45deg);
            }
            .coin .side .spoke:nth-child(3) {
              transform: rotateY(90deg) rotateX(33.75deg);
              -webkit-transform: rotateY(90deg) rotateX(33.75deg);
            }
            .coin .side .spoke:nth-child(2) {
              transform: rotateY(90deg) rotateX(22.5deg);
              -webkit-transform: rotateY(90deg) rotateX(22.5deg);
            }
            .coin .side .spoke:nth-child(1) {
              transform: rotateY(90deg) rotateX(11.25deg);
              -webkit-transform: rotateY(90deg) rotateX(11.25deg);
            }
            body {
              background-color: #000;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
            }
          `}</style>
          <div className="purse" onClick={() => {console.log("coinStatus", coinStatus); if(!coinStatus) {rotateCoin()}}}>
            <div className="coin" ref={coinRef}>
            {/* style={{ backgroundImage: `url(${sat_icon})` }} */}
              <div className="front" style={{ backgroundImage: `url(${sat_icon})` }}></div>
              <div className="back" style={{ backgroundImage: `url(${sat_icon})` }}></div>
              <div className="side">
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
                <div className="spoke"></div>
              </div>
            </div>
          </div>
    </div>
      </div>
    </div>
  );
};

export default GameSquare;
