interface FundDialogItemProps {
  name: string;
  symbol: string;
  image: any;
}

const FundDialogItem = ({ name, symbol, image }: FundDialogItemProps) => {
  return (
    <div className="bg-bgColor10 flex w-[400px] cursor-pointer items-center justify-between rounded-lg p-5 text-center font-space text-xl">
      <div className="flex items-center gap-5">
        <div>
          <img src={image}></img>
        </div>
        <div>{name}</div>
      </div>
      <div className="text-tColor6">{symbol}</div>
    </div>
  );
};

export default FundDialogItem;
