import React from "react";
import bitcoin from "@/assets/icons/bitcoin.png";

// Define the types for the component's props
interface BalanceBoxProps {
  balance: string; // balance is of type number
}

const BalanceBox: React.FC<BalanceBoxProps> = ({ balance }) => {
  return (
    <div className="flex items-center justify-center gap-4 rounded-lg border px-3 font-space text-xs sm:gap-8 sm:text-sm md:gap-16">
      <div className="text-grayFont">BALANCE</div>
      <div className="flex items-center gap-2 py-2">
        <p>{balance}</p>
        <img src={bitcoin} width={18} alt="Bitcoin Icon" />
      </div>
    </div>
  );
};

export default BalanceBox;
