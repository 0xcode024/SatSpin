import { useNavigate } from "react-router-dom";

interface MobileGameCardProps {
  image: any;
  title: string;
  url: string;
}
const MobileGameCard = ({ image, title, url }: MobileGameCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex aspect-[340/159] w-full flex-col items-end justify-end overflow-hidden rounded-xl bg-contain bg-cover bg-center bg-no-repeat font-space transition-all duration-1000 ease-in-out hover:brightness-150 "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className="flex h-1/2 w-full items-center justify-between px-6"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      >
        <div className="flex flex-col gap-1 sm:text-2xl md:gap-5 lg:px-[60px] lg:text-3xl">
          {title}
        </div>
        <div>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-bitcoin-orange shadow-lg sm:h-12 sm:w-12 md:h-16 md:w-16"
            onClick={() => {
              navigate(url);
              window.scrollTo(0, 0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileGameCard;
