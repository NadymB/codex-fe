/* eslint-disable @next/next/no-img-element */
import { ReceivedIcon } from "@/assets/icons/ReceivedIcon";
import { SendingIcon } from "@/assets/icons/SendingIcon";
import { getStaticURL } from "@/utils/constants";
import { DateTime } from "luxon";
import React from "react";

interface IProp {
  message: any;
}

export const OutComingMessage = ({ message }: IProp) => {
  return (
    <div className="flex flex-col justify-end items-end py-1">
      <div className="text-[#4B5563] text-[12px] text-right">new user</div>
      {message && (
        <div className="my-1 py-1 px-2 flex flex-col bg-[#637BFE] rounded-lg  max-w-full">
          <div className="max-w-md">{message?.content?.text}</div>
          {message?.content?.image && (
            <div className="">
              <img className="max-w-sm" src={message?.content?.image} alt="" />
            </div>
          )}
          <div className="flex items-center justify-end">
            <span className="text-[#4B5563] text-[12px]">
              {message?.time &&
                DateTime.fromMillis(message?.time).toFormat("HH:MM")}
            </span>
            <div className="ml-2">
              {message?.status === "sending" ? (
                <SendingIcon />
              ) : (
                <ReceivedIcon />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
