import bitcoin from "@/assets/images/coins/bitcoin.png";
import { txHistoryData } from "@/static/txHistory";
import TxItem from "./TxItem";
import MobileTxItem from "../Mobile/MobileTxItem";
const TxHistory = () => {
  return (
    <div className="rounded-xl bg-borderColor2 px-4 pb-12 md:px-10">
      <div className="py-7 text-xl font-bold">Transaction History</div>
      <div className="hidden md:block">
        <table className="border-gray-300 lg:text-md w-full border-collapse font-space text-sm">
          <thead className="bg-tColor5">
            <tr className="text-bgColor8">
              <th className="rounded-bl-lg rounded-tl-lg p-3 text-left">
                Transactions
              </th>
              <th className="p-3 text-left">Coin Amount</th>
              <th className="p-3 text-left">Date - Time</th>
              <th className="p-3 text-left">Type</th>
              <th className="rounded-br-lg rounded-tr-lg p-3 text-left">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {txHistoryData.map((tx, key) => (
              <TxItem
                icon={tx.icon}
                coinAmount={tx.coinAmount}
                date={tx.date}
                type={tx.type}
                amount={tx.amount}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 md:hidden">
        {txHistoryData.map((tx, key) => (
          <MobileTxItem
            tx_type={tx.tx_type}
            txId={tx.txId}
            amount={tx.amount}
            description={tx.description}
            date={tx.date}
            status={tx.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TxHistory;
