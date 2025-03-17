import { ONE_BITCOIN } from "@/constants/auth.constants";

export const shortenString = (
  str: string,
  firstAmount: number,
  lastAmount: number
) => {
  if (!str) return "";

  const start = str.substring(0, firstAmount);
  const end = str.slice(lastAmount * -1);

  return `${start}...${end}`;
};

export const shortenAddress = (address: string) => {
  return shortenString(address, 4, 4);
};

export const satsToBitcoin = (sats: number) => {
  return sats / ONE_BITCOIN;
};

const satoshisToBTC = (satoshis: number | undefined): string => {
  if (Number.isNaN(satoshis) || satoshis === undefined) return "--";
  const btcValue = satoshis / 100000000;
  if (Number.isNaN(btcValue)) return "--";
  return btcValue.toFixed(8);
};
