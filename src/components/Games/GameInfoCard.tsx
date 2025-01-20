import lukcywhell from "@/assets/images/games/lucky_wheel.png";
import ButtonDefault from "../Buttons/ButtonDefault";
interface GameInfoCardProps {
  image: any;
  title: string;
  description: string;
}
const GameInfoCard = ({ image, title, description }: GameInfoCardProps) => {
  return (
    <div
      className="flex h-[400px] w-full flex-col items-end justify-end rounded-xl bg-cover bg-center font-space transition-all duration-1000 ease-in-out hover:brightness-125"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="flex h-[50%] w-full justify-between"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      >
        <div className="flex flex-col gap-5 px-[60px] py-[40px]">
          <div className="text-3xl">{title}</div>
          <div className="w-[45%]">{description}</div>
        </div>
        <div className="py-10">
          <ButtonDefault
            label="Play Now"
            customClasses="bg-bgColor5 text-black border-0 text-xl font-bold py-[20px] pl-8 pr-20 rounded-r-none"
            onClick={() => {}}
          ></ButtonDefault>
        </div>
      </div>
    </div>
  );
};

export default GameInfoCard;
