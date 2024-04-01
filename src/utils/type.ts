import { CRYPTOCURRENCY_CODE, PRICE_TYPE } from "./constants";

export type ChangeEventHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export interface TokenCardProp {
  progressPercent: string;
  amount: string;
}

export type DataSectionProps = {
  label: string;
  value?: string;
  isCopyable?: boolean;
  short?: boolean;
  keyIcon?: JSX.Element;
};

export type ChartData = {
  totalValue: any;
  intervalStart: string | number | Date;
  openingValue: any;
  highestValue: any;
  lowestValue: any;
  closingValue: any;
};

export type BetType = {
  amount: number;
  pairType: string;
  pairName: string;
  betPercentage: number;
  timeoutInMinutes: number;
  position: "long" | "short";
};

function hideEmail(email:string) {
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  const username = email.substring(0, atIndex);
  const domain = email.substring(atIndex, dotIndex);
  const maskedUsername = username.substring(0, 5) + '*'.repeat(username.length - 5);
  const maskedDomain = domain.substring(0, 3) + '*'.repeat(domain.length - 3);
  return `${maskedUsername}${maskedDomain}`;
}

// Che dấu số điện thoại
function hidePhoneNumber(phoneNumber:string) {
  return phoneNumber.substring(0, 3) + '*'.repeat(phoneNumber.length - 7) + phoneNumber.substring(phoneNumber.length - 1);
}