/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <div className=" relative grid grid-cols-12 pt-[130px] pb-20 lg:pt-[280px] lg:pb-32  mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate ">
      <div className="absolute z-[3] top-[15%] left-[50%] translateX-[-50%]">
        <img
          className="relative z-[2]"
          src={`${getStaticURL()}/assets/images/shapes-round.png `}
          alt=""
        />
        <div className="absolute z-[1] w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#2c04fe26] waves"></div>
      </div>
      <div className="absolute z-[3] bottom-[30%] left-[-45px]">
        <img
          className="relative z-[2]"
          src={`${getStaticURL()}/assets/images/shapes-round.png `}
          alt=""
        />
        <div className="absolute z-[1] w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#2c04fe26] waves"></div>
      </div>
      <div className=" relative col-span-12 lg:col-span-7">
        <h1 className="text-[#fff] text-[40px] mt-0 mb-2 leading-[1.2]">
          New-gen of digital exchange
        </h1>
        <div className="text-[#fff] text-[20px] mb-4">
          Get started with one of the easiest and most secure platforms for
          buying, selling, trading, and earning digital exchange in one place.
        </div>
        <div className="flex items-center gap-2 mt-[35px] lg:mt-[55px]">
          <Link
            href={"/coming-soon"}
            className="flex-1 flex items-center justify-center"
          >
            <img
              className="h-16 max-w-full"
              src={`${getStaticURL()}/assets/images/app-store.svg`}
              alt=""
            />
          </Link>
          <Link
            href={"/coming-soon"}
            className="flex-1 flex items-center justify-center"
          >
            <img
              className="h-16  max-w-full"
              src={`${getStaticURL()}/assets/images/google-play.svg`}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 text-right mt-[150px] lg:mt-0">
        <div className="relative inline-block ">
          <img
            className=""
            src={`${getStaticURL()}/assets/images/hero-thumb.webp`}
            alt=""
          />
          <div className="absolute top-[-95px] right-[130px]  bitcoin">
            <img
              className=""
              src={`${getStaticURL()}/assets/images/bitcoin1.webp `}
              alt=""
            />
          </div>
          <div className="absolute top-[20px] left-[25px] w-[29%] bitcoin">
            <img
              className=""
              src={`${getStaticURL()}/assets/images/bitcoin2.webp`}
              alt=""
            />
          </div>
          <div className="absolute top-[5px] right-[20px] bitcoin">
            <img
              className=""
              src={`${getStaticURL()}/assets/images/bitcoin3.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
