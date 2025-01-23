interface TxItemProps {
  icon: any;
  coinAmount: number;
  date: string;
  type: number;
  amount: number;
}
const TxItem = ({ icon, coinAmount, date, type, amount }: TxItemProps) => {
  return (
    <tr className="text-sm">
      <td className="border-b border-borderColor3 p-3">
        <img src={icon}></img>
      </td>
      <td className="border-b border-borderColor3 px-3 text-left">
        {coinAmount}
      </td>
      <td className="border-b border-borderColor3 px-3 py-8 text-left">
        {date}
      </td>
      <td className="border-b border-borderColor3 px-3 py-8 text-left">
        {type}
      </td>
      <td className="border-b border-borderColor3 px-3 py-8 text-left">
        ${amount.toLocaleString("en-US")}
      </td>
    </tr>
  );
};
export default TxItem;
