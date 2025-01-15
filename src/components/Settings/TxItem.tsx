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
      <td className="border-borderColor3 border-b p-3">
        <img src={icon}></img>
      </td>
      <td className="border-borderColor3 border-b p-8">{coinAmount}</td>
      <td className="border-borderColor3 border-b p-8">{date}</td>
      <td className="border-borderColor3 border-b p-8">{type}</td>
      <td className="border-borderColor3 border-b p-8">
        ${amount.toLocaleString("en-US")}
      </td>
    </tr>
  );
};
export default TxItem;
