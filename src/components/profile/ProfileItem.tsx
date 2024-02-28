import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  filedName: string;
  value?: string;
  rightIcon?: ReactNode;
  link: string;
}

export const ProfileItem: FC<Props> = ({
  icon,
  filedName,
  value,
  rightIcon,
  link,
}) => {
  return (
    <Link
      href={link}
      className="flex justify-between items-center text-white p-4"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[13px]">{filedName}</span>
      </div>
      <div className="flex items-center gap-1">
        {value && <div className="text-[12px] text-gray-400">{value}</div>}
        {rightIcon}
      </div>
    </Link>
  );
};
