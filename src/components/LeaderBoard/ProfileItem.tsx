import polygon_up from "@/assets/images/polygon_up.png";
import polygon_down from "@/assets/images/polygon_down.png";

interface ProfileItemProps {
  ranking: number;
  avatar: any;
  name: string;
  point: number;
  arrow: boolean;
  customClasses: string;
}
const ProfileItem = ({
  ranking,
  avatar,
  name,
  point,
  arrow,
  customClasses,
}: ProfileItemProps) => {
  return (
    <div className="sm:text-md flex w-full items-center justify-between rounded-lg bg-bgColor7 px-4 py-4 font-space text-sm sm:text-lg">
      <div className="md: flex items-center justify-center sm:gap-2 md:gap-10 lg:gap-20">
        <div className="px-2 sm:px-4">{ranking}</div>
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={avatar}
            alt="avatar"
            className="h-auto w-[40px] md:w-[45px] lg:w-[60px]"
          />
          <div className="">{name}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>{point}</div>
        <img src={arrow ? polygon_up : polygon_down}></img>
      </div>
    </div>
  );
};

export default ProfileItem;
