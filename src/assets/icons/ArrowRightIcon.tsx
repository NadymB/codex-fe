import React from "react";

export const ArrowRightIcon = ({ color }: { color?: string }) => (
  <svg 
    focusable="false" 
    aria-hidden="true" 
    viewBox="0 0 24 24" 
    width={24}
    height={24}
    data-testid="ArrowBackIcon"
  >
    <path 
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
      fill={color}
    ></path>
  </svg>
);
