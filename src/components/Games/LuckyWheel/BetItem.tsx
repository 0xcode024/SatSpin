import bitcoin from "@/assets/images/coins/bitcoin.png";
interface BetItemProps {
  amount: number;
}
const BetItem = ({ amount }: BetItemProps) => {
  return (
    <div className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-lg bg-borderColor2 px-3">
      <div className="py-2">
        <img src={bitcoin} />
      </div>
      <div className="bg- h-[1px] w-full bg-tColor4"></div>
      <div className="text-sm text-tColor1">{amount}</div>
    </div>
  );
};

export default BetItem;
