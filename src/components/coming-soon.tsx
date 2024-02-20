"use client";
/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";

export const ComingSoon = () => {
  return (
    <div className="relative w-full h-[calc(100vh-66px)]  overflow-hidden bg-[#111319] p-5">
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
          <div className="font-extrabold">Coming Soon</div>
        </h1>
        <div className="text-[#A9AFC3] ">
        We are working hard to bring you something amazing.
        </div>
      </div>
    </div>
  );
};
