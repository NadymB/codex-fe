/* eslint-disable @next/next/no-img-element */
import { MediaCheckIcon } from "@/assets/icons/MediaCheckIcon";
import { getStaticURL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const ContentSection = () => {
  return (
    <div className="mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate">
      <div className="grid grid-cols-12 mb-[80px] lg:mb-[120px]  items-center ">
        <div className="col-span-12 lg:col-span-6 mb-[30px] lg:mb-0 lg:mr-[50px]  ">
          <div className="w-full">
            <h2 className="text-[#fff] text-[32px] mt-0 mb-2 leading-[1.2] font-medium">
              In the digital world, we are secure & trustworthy
            </h2>
            <div className="text-[#fff] mb-4">
              CME is one of the largest and safest platforms out there. The best
              digital wallets provide a good mix of security tools and
              user-facing features at a reasonable cost.
            </div>
            <ul className="flex flex-col mt-[35px]">
              <li className="flex gap-3 mb-[15px] pl-8">
                <div>
                  <MediaCheckIcon />
                </div>
                <span className=" mt-[-4px] text-[#fff] text-[18px] font-semibold">
                  Cost-effective mode of transaction secure and private.
                </span>
              </li>
              <li className="flex gap-3 mb-[15px] pl-8">
                <div>
                  <MediaCheckIcon />
                </div>
                <span className=" mt-[-4px] text-[#fff] text-[18px] font-semibold">
                  Self-governed managed all and easy transfer of funds.
                </span>
              </li>
              <li className="flex gap-3 mb-[15px] pl-8">
                <div>
                  <MediaCheckIcon />
                </div>
                <span className=" mt-[-4px] text-[#fff] text-[18px] font-semibold">
                  Currency exchanges finish smoothly and decentralized.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative text-right  col-span-12 lg:col-span-6 ">
          <div className="relative z-[4] inline-block ">
            <div className="absolute z-[3] top-[-23%] right-[0%] ">
              <img
                className="relative z-[2]"
                src={`${getStaticURL()}/assets/images/shapes-round.png `}
                alt=""
              />
              <div className="absolute z-[1] w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#2c04fe26] waves"></div>
            </div>
            <div className="absolute z-[3] bottom-[25%] left-[70px]">
              <img
                className="relative z-[2]"
                src={`${getStaticURL()}/assets/images/shapes-round.png `}
                alt=""
              />
              <div className="absolute z-[1] w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#2c04fe26] waves"></div>
            </div>
            <img
              className=" relative z-[4]"
              src={`${getStaticURL()}/assets/images/content-thumb.webp`}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* CONTENT BOTTOM */}
      <div className="grid grid-cols-12 ">
        <div className="col-span-12 lg:col-span-6 text-left mb-[30px] lg:mb-0 lg:mr-[50px]  ">
          <div className="relative  z-[2] inline-block ">
            <img
              className="relative z-[2] "
              src={`${getStaticURL()}/assets/images/content-thumb2.webp`}
              alt=""
            />
            <div className="absolute z-[2] bottom-[10px] right-[-90px]  bitcoin">
              <img
                className=""
                src={`${getStaticURL()}/assets/images/bitcoin4.webp `}
                alt=""
              />
            </div>
            <div className="absolute z-[1] w-[161%] h-[90%] top-[0%] left-[-35%] ">
              <img
                className="w-full h-full rounded-[3px]"
                src={`${getStaticURL()}/assets/images/shape-video.webp`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <div className="w-full">
            <h2 className="text-[#fff] text-[32px] mt-0 mb-2 leading-[1.2]">
              Easy step to use CME to invest on any device
            </h2>
            <div className="flex flex-col gap-4">
              <span className="text-[#fff]">
                While the concept is simple a place to store your assets & use
                choosing CMEcan be an incredibly experience.
              </span>
              <Link
                href={"/m"}
                className="relative group  w-fit flex items-center justify-center cursor-pointer "
              >
                <div className="absolute top-0 left-0 group-hover:top-[5px] group-hover:left-[5px] bg-[#fff] duration-300 ease-in-out w-full h-full rounded-[4px]"></div>
                <div className="relative text-[#000] bg-[#f7a600] px-[36px] py-4 font-bold  rounded-[4px]">
                  Go To Exchange
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
