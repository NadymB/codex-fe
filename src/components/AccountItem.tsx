import React from "react";

interface AccountItemProps {
  label: string;
  amount: string | number;
}

export const AccountItem = ({ label, amount }: AccountItemProps) => {
  return (
    <div className="bg-[#1c1c1e] m-2 p-4 rounded">
      <span className="text-xs text-[#888]">{label}</span>
      <div>{amount}&nbsp; USDT</div>
    </div>
  );
};
