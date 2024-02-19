import React from "react";

export const UserIcon = () => {
  return (
    <svg
      className="w-12 h-12 cursor-pointer"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={24} cy={24} r={24} className="fill-primary-main" />
      <path
        clipRule="evenodd"
        d="M4.155 37.501c1.23-9.866 9.646-17.5 19.845-17.5 10.2 0 18.615 7.634 19.845 17.5C39.525 43.839 32.25 48 24 48c-8.249 0-15.525-4.162-19.845-10.5z"
        className="fill-primary-light"
      />
      <circle cx={24} cy={16} r={9} className="fill-secondary-main" />
    </svg>
  );
};
