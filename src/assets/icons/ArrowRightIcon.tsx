import React from "react";

export const ArrowRightIcon = ({ color }: { color?: string }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_7_269"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="25"
      height="24"
    >
      <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_7_269)">
      <path
        d="M14.5 17.6538L8.84618 12L14.5 6.34619L15.5538 7.40002L10.9538 12L15.5538 16.6L14.5 17.6538Z"
        fill={color}
      />
    </g>
  </svg>
);
