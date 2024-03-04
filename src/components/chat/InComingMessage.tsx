/* eslint-disable @next/next/no-img-element */
import { ReceivedIcon } from "@/assets/icons/ReceivedIcon";
import { getStaticURL } from "@/utils/constants";
import React from "react";

export const InComingMessage = () => {
  return (
    <div className="flex flex-col items-start py-1">
      <div className="w-full max-w-sm flex items-center">
        <div className="mr-2 bg-[#4c4c6c] p-1 rounded">
          <img
            className="w-[50px] h-[50px]"
            src={`${getStaticURL()}/assets/images/logo.png`}
            alt=""
          />
        </div>
        <div className="my-1 py-1 px-2 flex flex-col bg-[#fff] rounded-lg ">
          <div>
            Xin chào,chúng tôi có thể giúp gì cho bạn?
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[#4B5563] text-[12px]">15:34</span>
          </div>
        </div>
      </div>
    </div>
  );
};
