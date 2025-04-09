interface FundDialogItemProps {
  name: string;
  symbol: string;
  image: any;
  amount: string;
  setAmount: (amount: string) => void;
}

const FundDialogItem = ({
  name,
  symbol,
  image,
  amount,
  setAmount,
}: FundDialogItemProps) => {
  return (
    <div className="flex w-[300px] cursor-pointer items-center justify-between rounded-lg bg-bgColor10 p-5 text-center font-space text-lg lg:w-[400px] lg:text-xl">
      <div className="flex items-center gap-5">
        <div>
          <img src={image}></img>
        </div>
        <div>{name}</div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <input
          className="w-[120px] bg-transparent outline-none"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="text-tColor6">{symbol}</div>
      </div>
    </div>
  );
};

export default FundDialogItem;
