interface GameCardProps {
  title: string;
  image: any;
  index: boolean;
  onClick: () => void;
}
import pvp from "@/assets/images/game_icons/PVP.png";
const GameCard = ({ title, image, index, onClick }: GameCardProps) => {
  return (
    <div
      className="group relative hidden h-auto w-[250px] cursor-pointer overflow-hidden rounded-lg sm:w-[320px] lg:block"
      onClick={onClick}
    >
      <div className="h-full w-full opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-30 group-hover:blur-sm group-hover:brightness-100 group-hover:grayscale">
        <div className="absolute left-2 right-0 top-4 z-10 font-impact text-8xl">
          <div>{title}</div>
          {index && <img src={pvp} />}
        </div>
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div className="px-8 py-4 font-space text-3xl font-bold text-white">
          PLAY
        </div>
      </div>
    </div>
  );
};

export default GameCard;
