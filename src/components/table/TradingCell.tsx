import { FC } from "react";

interface Props {
  tradingName: string;
  totalValue: string;
}

export const TrandingCell: FC<Props> = ({ tradingName, totalValue }) => {
  return (
    <div>
      <div>
        <span className="text-[15px]">{tradingName}</span>{" "}
        <span className="text-gray-500 text-[12px]">/ USDT</span>
      </div>
      <div className="text-gray-500 text-[12px]">{totalValue} USDT</div>
    </div>
  );
};
