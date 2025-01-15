import bitcoin from "@/assets/images/coins/bitcoin.png";
import { txHistoryData } from "@/static/txHistory";
import TxItem from "./TxItem";
const TxHistory = () => {
  return (
    <div className="rounded-xl bg-borderColor2 px-10 pb-12">
      <div className="py-7 text-xl font-bold">Transaction History</div>
      <div>
        <table className="border-gray-300 w-full border-collapse font-space">
          <thead className="bg-tColor5">
            <tr className="border text-bgColor8">
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
            {/* <tr className="hover:bg-teal-100">
            <td className="border-borderColor3 border-b p-3">
              <img src={bitcoin}></img>
            </td>
            <td className="border-borderColor3 border-b p-8">Griffin</td>
            <td className="border-borderColor3 border-b p-8">$100</td>
            <td className="border-borderColor3 border-b p-8">Peter</td>
            <td className="border-borderColor3 border-b p-8">Peter</td>
          </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TxHistory;
