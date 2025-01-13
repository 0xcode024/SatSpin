interface ButtonProps {
  color: any;
  name: string;
  symbol: string;
  percent: number;
  price: number;
  //   customClasses: string;
}

const CoinItem = ({
  color,
  name,
  symbol,
  percent,
  price,
  //   customClasses,
}: ButtonProps) => {
  return (
    <div className="border-gray-500 mr-[20px] flex h-[68px] w-[305px] items-center justify-around rounded-lg border-r-[12px] border-r-[#F9FF7D] bg-bg-dark text-sm">
      <div className="flex items-center gap-2">
        <div className="from-blue-500 to-blue-500 h-[35px] w-[35px] rounded-full bg-gradient-to-br from-purple-500"></div>
        <div>
          <div className="text-tColor1">{name}</div>
          <div className="text-tColor2">{symbol}</div>
        </div>
      </div>
      <div>
        <div className="text-right text-tColor3">{percent}%</div>
        <div className="flex items-center gap-2">
          <div className="text-tColor2">{price}</div>
          <div className="from-blue-500 to-blue-500 h-[18px] w-[18px] rounded-full bg-bitcoin-orange"></div>
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
