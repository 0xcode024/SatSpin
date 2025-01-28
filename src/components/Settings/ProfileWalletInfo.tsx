interface ProfilelWalletInfoProps {
  balance: number;
}
const ProfilelWalletInfo = ({ balance }: ProfilelWalletInfoProps) => {
  return (
    <div className="flex w-full flex-col justify-between gap-4 overflow-hidden rounded-xl bg-bgColor3 md:bg-bgColor7 md:flex-row md:gap-0 lg:rounded-3xl ">
      <div className="w-full rounded-xl bg-bgColor7 md:w-[45%] md:rounded-none">
        <div className="px-7 pt-3 text-xl">Wallet Balance</div>
        <div className="py-5">
          <div className="bg-bgColor10 px-7 py-10 text-[48px] font-bold md:bg-transparent">
            {balance.toLocaleString("en-US")}$
          </div>
        </div>
      </div>
      <div className="py-5 md:w-[55%] w-full rounded-xl bg-bgColor7 md:bg-bgColor11 pl-4 overflow-hidden ">
        <div className="px-7 pt-3 text-xl">Tokens</div>
        <div className="flex flex-col gap-4 px-l py-9 pr-5">
          <div className="h-[50px] w-full rounded-md bg-bgColor10 lg:rounded-lg">
            <input className="w-full rounded-md bg-bgColor10 p-2.5"></input>
          </div>
          <div className="h-[50px] w-full rounded-md bg-bgColor10 lg:rounded-lg">
            <input className="w-full rounded-md bg-bgColor10 p-2.5"></input>
          </div>
          <div className="h-[50px] w-full rounded-md bg-bgColor10 lg:rounded-lg">
            <input className="w-full rounded-md bg-bgColor10 p-2.5"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilelWalletInfo;
