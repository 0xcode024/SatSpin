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
    <div className="bg-bgColor7 font-space flex w-[80%] items-center justify-between rounded-lg px-4 py-4 text-lg">
      <div className="flex items-center justify-center gap-24">
        <div>{ranking}</div>
        <div className="flex items-center gap-6">
          <img src={avatar} alt="avatar" className="h-auto w-[60px]" />
          <div>{name}</div>
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
