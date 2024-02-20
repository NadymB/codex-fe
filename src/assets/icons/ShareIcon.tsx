import React from "react";

export const ShareIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g className="stroke-current">
        <path
          stroke="#fff"
          d="M14.811 16.405L9.3 13.223m5.511-5.632L9.3 10.773"
        />
        <circle
          stroke="#3D5AFE"
          cx={6.15}
          cy={11.994}
          r={2.4}
          className="stroke-primary-main"
        />
        <circle
          stroke="#fff"
          r={2.4}
          transform="matrix(1 0 0 -1 17.85 17.995)"
        />
        <circle stroke="#fff" cx={17.85} cy={6} r={2.4} />
      </g>
    </svg>
  );
};
