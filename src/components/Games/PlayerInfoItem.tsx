import bitcoin from "@/assets/images/coins/bitcoin.png";
interface PlayerInfoItemProps {
  id: string;
  percent: number;
  point: number;
  balance: number;
  color: string;
  image: any;
}
const PlayerInfoItem = ({
  id,
  percent,
  point,
  balance,
  color,
  image,
}: PlayerInfoItemProps) => {
  return (
    <div
      className={`flex items-center gap-2 border-r-[4px] border-solid bg-bg-dark py-4 pl-4 pr-5 text-sm`}
      style={{ borderColor: color }}
    >
      <div>
        <img src={image} width="50px"></img>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="text-tColor1">{id}</div>
          <div className="text-tColor2">{percent}%</div>
        </div>
        <div className="flex justify-between">
          <div className="text-bgColor6">{point} pts</div>
          <div className="flex items-center gap-2 text-tColor2">
            <div>{balance}</div>
            <img src={bitcoin} width="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoItem;
