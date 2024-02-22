/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const VideoSection = () => {
  return (
    <div className="grid grid-cols-12 mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate items-center ">
      <div className="col-span-12 lg:col-span-6 mb-[30px] lg:mb-0 lg:mr-[50px]  ">
        <div className="relative z-[4] w-full ">
          <div className="absolute z-[3]  left-[32%] top-[38%] translate-x-[-50%] translate-y-[-50%]">
            <div className="absolute w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#ffdd0080] waves"></div>
            <div
              style={{ animationDelay: "1s" }}
              className="absolute w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#ffdd0080] waves"
            ></div>
            <div
              style={{ animationDelay: "2s" }}
              className="absolute w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#ffdd0080] waves"
            ></div>
          </div>
          <img
            className="w-full relative z-[2]"
            src={`${getStaticURL()}/assets/images/video-thumb.webp`}
            alt=""
          />
          <div className="absolute z-[1] w-[84%] h-[100%] bottom-[-46px] left-[-26%] ">
            <img
              className="w-full rounded-[3px]"
              src={`${getStaticURL()}/assets/images/shape-video.webp`}
              alt=""
            />
          </div>
          <div className="absolute z-[1] w-[71%] h-[130%] top-[-95px] right-[-80px] ">
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
            CME is the most trusted digital exchange platform
          </h2>
          <div className="flex flex-col gap-4">
            <span className="text-[#fff]">
              CME Digital exchanges are websites where individuals can buy,
              sell, or exchange digital assets other digital currency here a CME
              is a digital exchange markets have crashed in the last 24 hours.
            </span>
            <span className="text-[#fff]">
              The exchanges can converte a digital assets into major part of a
              government-backed currencies and convert exchanges.
            </span>
            <Link
              href={"/m"}
              className="relative group  w-fit flex items-center justify-center cursor-pointer "
            >
              <div className="absolute top-0 left-0 group-hover:top-[5px] group-hover:left-[5px] bg-[#fff] duration-300 ease-in-out w-full h-full rounded-[4px]"></div>
              <div className="relative text-[#000] bg-[#f7a600] px-[36px] py-4 font-bold  rounded-[4px]">
                Discover more
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
