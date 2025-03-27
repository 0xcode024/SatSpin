interface DepositStatusDialogProps {
  amount: string;
  from: string;
  progress: number;
  status: string;
}

const DepositStatusDialog = ({
  amount,
  from,
  progress,
  status,
}: DepositStatusDialogProps) => {
  const isCompleted = progress === 100; // Check if progress is 100%

  return (
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-60 shadow-lg backdrop-blur-xl">
      <div className="opactiy-100 relative flex w-[500px] flex-col items-center justify-center gap-10 rounded-lg bg-bgColor9 px-[5%] pb-[70px] pt-[50px] text-center text-white lg:items-stretch lg:justify-center">
        <div className="text-bold text-2xl">Deposit</div>
        <div className="text-bold text-md">
          <span className="italic">Depositing</span>
          <span> {amount} BTC </span>
          <span className="italic">from {from}</span>
        </div>
        <div className="relative">
          <div className="pb-4">{status}</div>
          <div className="bg-gray-300 relative h-2 w-full rounded-full border border-borderColor1">
            <div
              className="h-full rounded-full bg-[#145A3E] transition-all duration-300"
              style={{
                width: `${progress}%`, // Control the width based on progress
                backgroundImage:
                  progress > 0
                    ? "linear-gradient(45deg, #029055 60%, transparent 25%)"
                    : "none", // Line pattern only when there is progress
                backgroundSize: "20px 10%", // Make the lines fill the height of the bar
                backgroundRepeat: "repeat",
                animation:
                  progress > 0
                    ? "flow 0.5s linear infinite" // Apply animation only when there's progress
                    : "none",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositStatusDialog;
