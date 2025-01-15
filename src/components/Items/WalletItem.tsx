interface ItemProps {
  name: string;
  image: any;
}

const WalletItem = ({ name, image }: ItemProps) => {
  return (
    <div className="border-bgColor11 bg-bgColor11 flex w-[100%] cursor-pointer items-center justify-start gap-5 rounded-lg border p-3 py-5 font-space text-lg hover:border-tColor5">
      <div>
        <img src={image} />
      </div>
      <div className="text-xl">{name}</div>
    </div>
  );
};

export default WalletItem;
