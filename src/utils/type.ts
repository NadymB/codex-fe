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

export type OptionsLanguageType =  {
  label: string,
  International: string,
  value: string,
  flag: string,
}