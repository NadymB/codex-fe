import { FC } from "react";

interface Props {
  token: string;
  totalValue: string;
}

export const TrandingCell: FC<Props> = ({ token, totalValue }) => {
  return (
    <div>
      <div>
        <span className="text-[15px] text-white">{token}</span>{" "}
        <span className="text-gray-500 text-[12px]">/ USDT</span>
      </div>
      <div className="text-gray-500 text-[12px]">{totalValue} USDT</div>
    </div>
  );
};
