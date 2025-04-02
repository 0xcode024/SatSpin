export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFormattedDate(input: string) {
  const date = new Date(input);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function getFormattedTime(input: string) {
  const date = new Date(input);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
}

export const addressShortening = (address: string): string => {
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const formatNumber = (num: any) => {
  // Limit to 3 decimal places
  let formatted = num.toFixed(3);

  // Remove trailing zeros
  formatted = formatted.replace(/(\.\d*?)0+$/, "$1");

  // If the decimal point is left with no digits, remove it
  if (formatted.endsWith(".")) {
    formatted = formatted.slice(0, -1);
  }

  return formatted;
};

export const shortenNumber = (num: number) => {
  return Number(num)
    .toFixed(8)
    .replace(/\.?0+$/, "");
};
