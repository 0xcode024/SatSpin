import React from "react";
import bitcoin from "@/assets/icons/bitcoin.png";

// Define the types for the component's props
interface BalanceBoxProps {
  balance: number; // balance is of type number
}

const BalanceBox: React.FC<BalanceBoxProps> = ({ balance }) => {
  return (
    <div className="flex items-center justify-center gap-16 rounded-lg border px-3">
      <div className="text-grayFont font-space text-sm">BALANCE</div>
      <div className="flex items-center gap-2 py-2">
        <p className="font-space text-sm">{balance}</p>
        <img src={bitcoin} width={18} alt="Bitcoin Icon" />
      </div>
    </div>
  );
};

export default BalanceBox;
