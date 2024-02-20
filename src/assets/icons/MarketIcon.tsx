import React from "react";

export const MarketIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      aria-hidden="true"
      width={25}
      height={24}
      viewBox="0 0 24 24"
      data-testid="CandlestickChartIcon"
    >
      <path
        fill={color || "#888888"}
        d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z"
      />
    </svg>
  );
};
