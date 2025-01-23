import bitcoin from "@/assets/images/coins/bitcoin.png";
import cash_in from "@/assets/mobile/tx_icons/cash_in.png";
import cash_back from "@/assets/mobile/tx_icons/cash_back.png";
import cash_transfer from "@/assets/mobile/tx_icons/cash_transfer.png";
export const txHistoryData = [
  {
    icon: bitcoin,
    coinAmount: 0.1,
    date: "2023-09-12T15:30:00",
    type: 423,
    amount: 34295,
    txId: 564925374920,
    status: "confirmed",
    description: "From ABC Bank ATM",
    tx_type: 0,
  },
  {
    icon: bitcoin,
    coinAmount: 0.1,
    date: "2023-09-16T16:30:00",
    type: 423,
    amount: 9999,
    txId: 685725374920,
    status: "confirmed",
    description: "Purchase from Amazon.com",
    tx_type: 1,
  },
  {
    icon: bitcoin,
    coinAmount: 0.1,
    date: "2023-09-12T15:30:00",
    type: 423,
    amount: 500,
    txId: 564925374920,
    status: "confirmed",
    description: "",
    tx_type: 2,
  },
  {
    icon: bitcoin,
    coinAmount: 0.1,
    date: "2023-09-12T15:30:00",
    type: 423,
    amount: 10000,
    txId: 564925374920,
    status: "canceled",
    description: "Not enough funds",
    tx_type: 2,
  },
];

export const typeToTxInfo: { [key: number]: { icon: any; name: string } } = {
  0: {
    icon: cash_in,
    name: "Cash-in",
  },
  1: {
    icon: cash_back,
    name: "Cashback from purchase",
  },
  2: {
    icon: cash_transfer,
    name: "Transfer to card",
  },
};
