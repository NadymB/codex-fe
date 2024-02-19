import React from "react";

export const HomeIcon = ({color}:{color?:string}) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
    >
      <path fill={color||"#888888"} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};
