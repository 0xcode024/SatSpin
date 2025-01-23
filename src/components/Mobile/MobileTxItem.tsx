import cash_in from "@/assets/mobile/tx_icons/cash_in.png";
import cash_back from "@/assets/mobile/tx_icons/cash_back.png";
import cash_transfer from "@/assets/mobile/tx_icons/cash_in.png";
import { typeToTxInfo } from "@/static/txHistory";
import { getFormattedDate, getFormattedTime } from "@/utils/utils";

interface MobileTxItemProps {
  tx_type: number;
  txId: number;
  amount: number;
  description: string;
  date: string;
  status: string;
}
const MobileTxItem = ({
  tx_type,
  txId,
  amount,
  description,
  date,
  status,
}: MobileTxItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-bgColor10 p-4 md:hidden">
      <div>
        <img
          src={typeToTxInfo[tx_type].icon}
          className="w-[50px] sm:w-[85px]"
        />
      </div>
      <div className="flex-grow px-2 text-xs sm:text-lg">
        <div className="flex justify-between font-bold">
          <div>{typeToTxInfo[tx_type].name}</div>
          <div>
            {"$ "}
            {amount}
          </div>
        </div>
        <div className="flex justify-between font-bold"></div>
        <div className="flex justify-between text-xs sm:text-lg">
          <div>
            <div>{description}</div>
            <div className="text-bgColor42">Transaction ID</div>
            <div>{txId}</div>
          </div>
          <div className="flex flex-col items-end text-right">
            {status == "confirmed" ? (
              <div className="bg-bgColor43 text-bgColor45 w-fit rounded-md">
                {status}
              </div>
            ) : (
              <div className="bg-bgColor44 text-bgColor46 w-fit rounded-md">
                {status}
              </div>
            )}
            {tx_type == 2 && description == "" ? (
              <div className="text-bgColor42">
                {getFormattedDate(date) + " " + getFormattedTime(date)}
              </div>
            ) : (
              <div>
                <div className="text-bgColor42">{getFormattedDate(date)}</div>
                <div className="text-bgColor42">{getFormattedTime(date)}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileTxItem;
