"use client";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export type TabOptions = Array<{ label: string; link: string }>;

type Props = {
  options: TabOptions;
};

export const Tab: FC<Props> = ({ options }) => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#110F15]">
      <div className="w-fit flex items-center">
        {options.map((option, index) => (
          <Link
            key={index}
            href={option.link}
            className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${pathname === option.link ? "border-b-[#3D5AFE]" : "border-b-transparent"}`}
          >
            <span
              className={`text-sm font-semibold ${pathname === option.link ? "text-[#3D5AFE]" : "text-[#888888]"} whitespace-nowrap`}
            >
              {option.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
