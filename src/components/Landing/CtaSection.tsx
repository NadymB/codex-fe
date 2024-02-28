/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const CtaSection = () => {
  return (
    <div className=" relative mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate">
      <div className="w-full bg-[#f7a600] p-[35px] lg:p-20 rounded-[10px] grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="relative inline-block ">
          <img
            className="max-w-full"
            src={`${getStaticURL()}/assets/images/cta-thumb.webp`}
            alt=""
          />
        </div>
        <div className="w-full">
          <h2 className="text-[#fff] text-[32px] font-medium mt-0 mb-2 leading-[1.2]">
            Subscribe to learn more and get updates
          </h2>
          <div className="flex flex-col gap-4">
            <span className="text-[#fff]">
              A membership site lets you create a secure platform that allows
              you to deliver content easily and automatically..
            </span>
            <div className="relative  flex flex-wrap lg:flex-nowrap gap-2 lg:gap-0 items-center justify-center cursor-pointer mt-[45px] w-full max-w-[460px] rounded overflow-hidden">
              <div className="bg-[#fff]  h-[55px] w-full">
                <input
                  className="text-[#000] bg-transparent w-full h-full border-none outline-none py-[10px] pl-[25px] pr-[10px] "
                  type="text"
                  placeholder="Type your email here"
                  name=""
                  id=""
                />
              </div>
              <button className="bg-[#13111a] text-[#fff] h-[55px] xs:w-full lg:w-[150px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
