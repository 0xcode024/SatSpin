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
    <div className="flex w-[80%] items-center justify-between rounded-lg bg-bgColor7 px-4 py-4 font-space text-lg">
      <div className="md: flex items-center justify-center sm:gap-5 md:gap-10 lg:gap-20">
        <div className="px-4">{ranking}</div>
        <div className="flex items-center gap-4">
          <img src={avatar} alt="avatar" className="h-auto w-[60px]" />
          <div className="hidden sm:block">{name}</div>
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
