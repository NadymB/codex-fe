/* eslint-disable @next/next/no-img-element */
import { ReceivedIcon } from "@/assets/icons/ReceivedIcon";
import { SendingIcon } from "@/assets/icons/SendingIcon";
import { getStaticURL } from "@/utils/constants";
import React from "react";

export const OutComingMessage = () => {
  return (
    <div className="flex flex-col justify-end items-end py-1">
    <div className="text-[#4B5563] text-[12px] text-right">new user</div>
      <div className="my-1 py-1 px-2 flex flex-col bg-[#637BFE] rounded-lg  max-w-full">
        <div className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum
          maiores quibusdam sunt dignissimos et minima reprehenderit corporis.
          Delectus dignissimos, eum necessitatibus minus pariatur hic eos quam
          veniam aliquam totam.
        </div>
        {/* <div className="">
          <img className="max-w-sm" src={`${getStaticURL()}/assets/images/banner_about.png`} alt="" />
        </div> */}
        <div className="flex items-center justify-end">
          <span className="text-[#4B5563] text-[12px]">15:34</span>
          <div className="ml-2">
            {/* <ReceivedIcon /> */}
            <SendingIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};
