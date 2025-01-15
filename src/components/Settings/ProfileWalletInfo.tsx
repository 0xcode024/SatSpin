interface ProfilelWalletInfoProps {
  balance: number;
}
const ProfilelWalletInfo = ({ balance }: ProfilelWalletInfoProps) => {
  return (
    <div className="flex h-[47%] w-full justify-between overflow-hidden rounded-3xl bg-bgColor7">
      <div className="w-[45%] px-7 py-5">
        <div className="text-xl">Wallet Balance</div>
        <div className="py-16 text-[48px] font-bold">
          {balance.toLocaleString("en-US")}$
        </div>
      </div>
      <div className="bg-bgColor11 w-[53%] w-full rounded-3xl px-7 py-5">
        <div className="text-xl">Tokens</div>
        <div className="flex flex-col gap-4 py-9">
          <div className="bg-bgColor10 h-[50px] w-[90%] rounded-lg">
            <input className="bg-bgColor10 w-full rounded-md p-2.5"></input>
          </div>
          <div className="bg-bgColor10 h-[50px] w-[90%] rounded-lg">
            <input className="bg-bgColor10 w-full rounded-md p-2.5"></input>
          </div>{" "}
          <div className="bg-bgColor10 h-[50px] w-[90%] rounded-lg">
            <input className="bg-bgColor10 w-full rounded-md p-2.5"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilelWalletInfo;
