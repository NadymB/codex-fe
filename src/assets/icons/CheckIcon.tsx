import React from "react";

export const CheckIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      width={25}
      height={24}
      viewBox="0 0 24 24"
      data-testid="CheckIcon"
    >
      <path
        fill={props.color || "#3D5AFE"}
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      />
    </svg>
  );
};
