import React from "react";

export const WalletIcon = ({color}:{color?:string}) => {
  return (
    <svg
      aria-hidden="true"
      width={25} height={24}
      viewBox="0 0 24 24"
      data-testid="AccountBalanceWalletIcon"
    >
      <path fill={color||"#888888"} d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2zm-9-2h10V8H12zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5" />
    </svg>
  );
};
