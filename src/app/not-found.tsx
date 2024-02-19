"use client";
/* eslint-disable @next/next/no-img-element */
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { getStaticURL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const pageNotFound = () => {
  return (
    <div className="relative w-full h-screen  overflow-hidden bg-[#111319] p-5">
      <div className="absolute z-10 top-0 right-0 w-1/4 h-full">
        <img
          className="h-full"
          src={`${getStaticURL()}/assets/images/group_line_service_page.svg`}
          alt=""
        />
      </div>
      <div className="absolute z-10 top-[60%] right-[200px] -rotate-12 hidden lg:flex flex-col gap-3">
        <span className="font-bold text-[#fff]">Working hours:</span>
        <ul>
          <li className="text-[#A9AFC3]  font-normal py-1">24/7</li>
        </ul>
      </div>
      <div className="absolute z-10 bottom-[50px] left-[30%] -rotate-12 hidden lg:flex flex-col gap-3">
        <span className="font-bold text-[#fff]">Hit us up:</span>
        <ul>
          <li className="text-[#A9AFC3]  font-normal py-1">0375026694</li>
          <li className="text-[#A9AFC3]  font-normal py-1">
            admin@greensoftware.asia
          </li>
        </ul>
      </div>
      <div className="absolute z-10 top-[50px] right-[50%] rotate-45 hidden lg:flex flex-col gap-3">
        <span className="font-bold text-[#fff]">Cases</span>
      </div>
      <div className="absolute z-10 top-[50px] left-[30%] -rotate-12 hidden lg:flex flex-col gap-3">
        <span className="font-bold text-[#fff]">Services</span>
      </div>
      <div className="absolute z-10 top-[150px] left-[20%] rotate-12 hidden lg:flex flex-col gap-3">
        <span className="font-bold text-[#fff]">Contacts us</span>
      </div>
      <div className="absolute z-10 top-[150px] right-[20%]  hidden lg:flex flex-col gap-3">
        <span className="font-bold text-[#fff]">0375026694</span>
      </div>
      <div className="absolute z-10 bottom-[50px] right-[10%] rotate-45 hidden lg:flex flex-col gap-3">
        <button className="rounded-[50px] w-fit mt-4  py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
          Get a quote
        </button>
      </div>
      <div className="absolute top-0 left-0 w-[100px] h-full bg-black origin-bottom rotate-12"></div>
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center ">
        <h1 className="flex flex-col items-center justify-center text-[#fff] font-bold text-[64px] text-center">
          <div className="font-extrabold">OMG!</div>
          <div className="font-bold text-[64px]">You broke the site!</div>
        </h1>
        <div className="text-[#A9AFC3] ">
          Don’t worry. It’s just 404 page not found.
        </div>
        <div className="text-[#A9AFC3] mt-20">
          Please try Search or go back to{" "}
          <Link className="text-[#DBB070]" href={"/"}>
            Homepage.
          </Link>
        </div>
        <div className="flex relative mt-10 w-[500px] max-w-full">
          <input
            className="w-full outline-none border-b border-b-[#3A3F50] bg-transparent pb-2  text-[#fff]"
            type="text"
            placeholder="Search"
          />

          <div className="absolute  right-0 fill-[#DBB070]">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default pageNotFound;
