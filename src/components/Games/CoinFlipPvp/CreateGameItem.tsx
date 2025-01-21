const CreateGameItem = () => {
  return (
    <div className="to-bgColor32 flex w-full flex-col justify-center rounded-lg bg-white bg-gradient-to-b from-bgColor29 px-20 py-10">
      <div className="text-sm">SET AMOUNT</div>
      <div className="flex justify-between gap-4">
        <div className="rounded-lg bg-bgColor29 py-4 pl-5 pr-10">$ 200</div>
        <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-bgColor16 to-bgColor17 px-7 text-center text-sm font-bold text-borderColor2">
          <div>CREATE</div>
          <div>GAME</div>
        </div>
      </div>
    </div>
  );
};

export default CreateGameItem;
