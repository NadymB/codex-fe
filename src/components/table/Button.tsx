import { FC } from "react";

interface Props {
  text: string;
  className?: string;
}
export const Button: FC<Props> = ({ text, className }) => {
  return (
    <button className={`${className} py-1 px-5 rounded-md text-[15px]`}>
      {text}
    </button>
  );
};
