import React from "react";

export const RobotIcon = () => {
  return (
    <svg
      className="w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path stroke="#fff" className="stroke-current" d="M12 3v4" />
      <rect
        stroke="#fff"
        fill="none"
        x={3}
        y={7}
        width={18}
        height={14}
        rx={2}
        className="stroke-current fill-none"
      />
      <path stroke="#fff" d="M9 17h6" className="stroke-current" />
      <circle
        fill="#3D5AFE"
        cx={9}
        cy={13}
        r={1}
        className="fill-primary-main"
      />
      <circle
        fill="#3D5AFE"
        cx={15}
        cy={13}
        r={1}
        className="fill-primary-main"
      />
      <circle
        fill="#3D5AFE"
        cx={12}
        cy={2.5}
        r={1.5}
        className="fill-primary-main"
      />
    </svg>
  );
};
