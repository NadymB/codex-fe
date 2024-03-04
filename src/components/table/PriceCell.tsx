import { FC } from "react";

interface Props {
  usdtPrice: string;
  usdPrice: string;
}

export const PriceCell: FC<Props> = ({ usdtPrice, usdPrice }) => {
  return (
    <div>
      <div className="text-[15px] text-white">{usdtPrice}</div>
      <div className="text-gray-500 text-[12px]">{usdPrice} USD</div>
    </div>
  );
};
