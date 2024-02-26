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
