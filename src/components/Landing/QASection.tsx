/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import React from "react";

export const QASection = () => {
  return (
    <div className=" relative pb-[55px] lg:pb-[95px]    mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate">
      <div className="absolute z-[3] top-[34%] left-[10px]">
        <img
          className="relative z-[2]"
          src={`${getStaticURL()}/assets/images/shapes-round.png `}
          alt=""
        />
        <div className="absolute z-[1] w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#2c04fe26] waves"></div>
      </div>
      <div className="absolute z-[3] top-[-70px] left-[35%] ">
        <img
          className="relative z-[2]"
          src={`${getStaticURL()}/assets/images/shapes-round.png `}
          alt=""
        />
        <div className="absolute z-[1] w-[150px] h-[150px] top-[-35px] left-[-35px] rounded-[100%] bg-[#2c04fe26] waves"></div>
      </div>

      <div className="flex flex-col text-center max-w-[708px] mb-[50px] lg:mb-[75px] mx-auto">
        <h2 className="text-[#fff] text-[32px] mt-0 mb-2 leading-[1.2] font-[500]">
          Do you have any questions about digital exchange? Ask us
        </h2>
        <div className="text-[#fff]">
          Frequently asked questions qbout digital exchange & blockchain
          technology. Cryptographic security for conducting trusted
          transactions.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex flex-col last:border-b-2">
            <div className="w-full p-[30px] border-2 border-[#fff] border-b-0 text-[#fff] text-[20px] font-semibold">
              Q. What is digital exchange in general?
            </div>
            <div className="w-full p-[30px] border-2 border-[#fff] border-b-0 text-[#fff] text-[20px] font-semibold">
              Q. What other types of digital exchange are out there?
            </div>
            <div className="w-full p-[30px] border-2 border-[#fff] border-b-0 text-[#fff] text-[20px] font-semibold">
              Q. What’s the connection between NFTs & digital?
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col last:border-b-2">
            <div className="w-full p-[30px] border-2 border-[#fff] border-b-0 text-[#fff] text-[20px] font-semibold">
              Q. How safe is digital exchange?
            </div>
            <div className="w-full p-[30px] border-2 border-[#fff] border-b-0 text-[#fff] text-[20px] font-semibold">
              Q. What regulation and requirements govern?
            </div>
            <div className="w-full p-[30px] border-2 border-[#fff] border-b-0 text-[#fff] text-[20px] font-semibold">
              Q. What is the biggest problem with digital exchange?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
