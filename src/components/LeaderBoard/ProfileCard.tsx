import polygon_up from "@/assets/images/polygon_up.png";
import polygon_down from "@/assets/images/polygon_down.png";

interface ButtonProps {
  name: string;
  point: number;
  ranking: number;
  avatar: any;
  arrow: boolean;
  customClasses: string;
}
const ProfileCard = ({
  name,
  point,
  ranking,
  avatar,
  arrow,
  customClasses,
}: ButtonProps) => {
  let rankData: { [key: number]: string } = {
    1: "1st",
    2: "2nd",
    3: "3rd",
  };
  let gradientData: { [key: number]: string[] } = {
    1: ["#A88E5A", "#F7761A"],
    2: ["#A88E5A", "#F7761A"],
    3: ["#A88E5A", "#F7761A"],
  };
  let bannerData: { [key: number]: string } = {
    1: "#F7931A",
    2: "#CE6A14",
    3: "#8C4100",
  };
  return (
    <div className="w-[32%] lg:w-[200px]">
      <div className="relative flex items-center justify-center rounded-t-lg bg-bgColor6 bg-opacity-70 p-[20%] pb-[4%]">
        <div
          className="absolute top-[15%] aspect-[2/1] w-[70%] rounded-t-full"
          style={{ backgroundColor: bannerData[1] }}
        />
        <div className="z-10 flex w-full items-center justify-center">
          <img
            src={avatar}
            alt="Circle Image"
            className="h-[100%] w-[100%] rounded-full object-cover"
          />
        </div>
        <div
          className={`absolute z-10 flex aspect-[1/1] items-center justify-center rounded-full font-bold text-bg-dark ${
            ranking == 1
              ? "-top-[10%] w-[40%] text-lg md:text-xl lg:text-2xl xl:text-4xl"
              : "md:text-md top-0 h-auto w-[30%] text-sm"
          } ${customClasses}`}
          style={{
            background: `linear-gradient(to right, ${gradientData[ranking][0]}, ${gradientData[ranking][1]})`,
          }}
        >
          {rankData[ranking]}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-b-lg bg-bg-dark p-3 text-lg">
        <div className="text-bgColor5">{name}</div>
        <div className="h-[2px] w-[80%] bg-bgColor5"></div>
        <div className="= flex items-center gap-4">
          <span className="text-tColor2">{point}</span>
          <img src={arrow ? polygon_up : polygon_down}></img>
        </div>
      </div>
    </div>
  );
  // <div className="transparent relative mt-[100px] aspect-[103/140] h-[360px] w-[30%] rounded-lg font-space">
  //   <div className="flex h-[57%] justify-center rounded-t-lg bg-bgColor6 bg-opacity-60">
  // <div
  //   className="absolute top-[10%] h-[80px] w-[160px] rounded-t-full"
  //   style={{ backgroundColor: bannerData[1] }}
  // />

  // <div className="z-10 flex  items-center">
  //   <img
  //     src={avatar}
  //     alt="Circle Image"
  //     className="h-[32] w-[32] rounded-full object-cover"
  //   />
  // </div>
  //   <div
  //     className={`absolute flex items-center justify-center rounded-full font-bold text-bg-dark ${
  //       ranking == 1 ? "-top-4 h-24 w-24 text-4xl" : "h-16 w-16"
  //     } ${customClasses}`}
  //     style={{
  //       background: `linear-gradient(to right, ${gradientData[ranking][0]}, ${gradientData[ranking][1]})`,
  //     }}
  //   >
  //     {rankData[ranking]}
  //   </div>
  // </div>
  //   <div className="flex h-[43%] flex-col items-center justify-around rounded-b-lg bg-dark text-bgColor5">
  //     <div className="text-[24px] font-bold">{name}</div>
  //     <div className="h-[2px] w-[60%] bg-bgColor5"></div>
  //     <div className="flex items-center gap-4">
  //       <span className="text-tColor2">{point}</span>
  //       <img src={arrow ? polygon_up : polygon_down}></img>
  //     </div>
  //   </div>
  // </div>
};

export default ProfileCard;
