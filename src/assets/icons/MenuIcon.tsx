"use client";

export const MenuIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      aria-hidden="true"
      width={25}
      height={24}
      viewBox="0 0 24 24"
      data-testid="MenuIcon"
    >
      <path fill="#fff" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
    </svg>
  );
};
