import React from "react";
import { Logo } from "../Logo";
import Link from "next/link";

export const HeaderLandingSection = () => {
  return (
    <div className="fixed z-20 top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-[#13111a]">
      <Logo />
      <div className="flex items-center justify-center">
        <Link href={"#"} className="py-4 px-5 font-semibold text-[#fff]">
            <span>Home</span>
        </Link>
        <Link href={"#"} className="py-4 px-5 font-semibold text-[#fff]">
            <span>Features</span>
        </Link>
        <Link href={"#"} className="py-4 px-5 font-semibold text-[#fff]">
            <span>About</span>
        </Link>
        <Link href={"#"} className="py-4 px-5 font-semibold text-[#fff]">
            <span>Review</span>
        </Link>
        <Link href={"#"} className="py-4 px-5 font-semibold text-[#fff]">
            <span>Help</span>
        </Link>
      </div>
      <div className="relative group flex items-center justify-center cursor-pointer ">
        <div className="absolute top-0 left-0 group-hover:top-[5px] group-hover:left-[5px] bg-[#fff] duration-300 ease-in-out w-full h-full"></div>
        <div className="relative text-[#000] bg-[#f7a600] px-8 py-[10px] font-bold">Get started</div>
      </div>
    </div>
  );
};
