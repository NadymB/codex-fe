import React from "react";

export const SendIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      aria-hidden="true"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      data-testid="SendIcon"
      fill="#fff"
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
};
