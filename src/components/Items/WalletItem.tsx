interface ItemProps {
  name: string;
  image: any;
  isSeleted: boolean;
  onClick: () => void;
}

const WalletItem = ({ name, image, isSeleted, onClick }: ItemProps) => {
  return (
    <div
      className={`flex w-[100%] cursor-pointer items-center justify-start gap-5 rounded-lg border  bg-bgColor11 p-3 py-5 font-space text-sm hover:border-tColor5 lg:text-lg ${isSeleted ? "border-2 border-tColor5" : "border-bgColor11"}`}
      onClick={() => onClick()}
    >
      <div>
        <img width="40px" src={image} />
      </div>
      <div className="">{name}</div>
    </div>
  );
};

export default WalletItem;
