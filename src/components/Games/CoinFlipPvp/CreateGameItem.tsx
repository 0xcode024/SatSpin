const CreateGameItem = () => {
  return (
    <div className="flex h-full w-full justify-evenly items-end bg-white bg-gradient-to-b from-bgColor29 to-bgColor32  py-10">
        <div>
          <div className="text-sm">SET AMOUNT</div>
          <div className="rounded-lg bg-bgColor29 py-4 pl-5 pr-10 text-lg">$ 200</div>
        </div>
        <div className="font-bold py-2 text-sm flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-bgColor16 to-bgColor17 px-7 text-center text-borderColor2 ">
          <div>CREATE</div>
          <div>GAME</div>
        </div>
      </div>
  );
};

export default CreateGameItem;
