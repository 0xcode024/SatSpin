interface ItemProps {
  name: string;
  image: any;
  onClick: () => void
}

const WalletItem = ({ name, image, onClick }: ItemProps) => {
  return (
    <div className="border-bgColor11 bg-bgColor11 flex w-[100%] cursor-pointer items-center justify-start gap-5 rounded-lg border p-3 py-5 font-space text-sm lg:text-lg hover:border-tColor5" onClick={() => onClick()}>
      <div>
        <img width="40px" src={image} />
      </div>
      <div className="">{name}</div>
    </div>
  );
};

export default WalletItem;
