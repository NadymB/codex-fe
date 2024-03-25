import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}
export const Button: FC<Props> = ({ children, className }) => {
  return (
    <button className={`${className} py-1 px-5 rounded-md text-[15px]`}>
      {children}
    </button>
  );
};
