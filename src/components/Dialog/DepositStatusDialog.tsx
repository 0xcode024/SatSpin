import { HiCheckCircle } from "react-icons/hi";

interface DepositStatusDialogProps {
  option: boolean;
  amount: string;
  from: string;
  progress: number;
  status: string;
}

const DepositStatusDialog = ({
  option,
  amount,
  from,
  progress,
  status,
}: DepositStatusDialogProps) => {
  return (
    <div className="z-60 fixed inset-0 flex w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-60 shadow-lg backdrop-blur-xl">
      <div className="opactiy-100 relative flex w-[500px] flex-col items-center justify-center gap-10 rounded-lg bg-bgColor9 px-[5%] pb-[70px] pt-[50px] text-center text-white lg:items-stretch lg:justify-center">
        <div className="text-bold text-2xl">
          {" "}
          {option ? "Withdraw" : "Deposit"}
        </div>
        <div className="text-bold text-md">
          <span className="italic">
            {option ? "Withdrawing" : "Depositing"}
          </span>
          <span> {amount} BTC </span>
          <span className="italic">from {from}</span>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          {progress == 100 && (
            <HiCheckCircle style={{ fontSize: "50px", color: "#06894A" }} />
          )}
          <div className="pb-4">{status}</div>
          <div className="bg-gray-300 relative h-2 w-full rounded-full border border-borderColor1">
            <div
              className="h-full rounded-full bg-[#145A3E] transition-all duration-300"
              style={{
                width: `${progress}%`, // Control the width based on progress
                backgroundImage:
                  progress < 100
                    ? "linear-gradient(45deg, #029055 60%, transparent 25%)"
                    : "none", // Line pattern only when there is progress
                backgroundSize: "20px 10%", // Make the lines fill the height of the bar
                backgroundRepeat: "repeat",
                animation:
                  progress < 100
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
