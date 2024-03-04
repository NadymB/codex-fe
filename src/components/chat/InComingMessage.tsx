/* eslint-disable @next/next/no-img-element */
import { IsTypingIcon } from "@/assets/icons/IsTypingIcon";
import { ReceivedIcon } from "@/assets/icons/ReceivedIcon";
import { getStaticURL } from "@/utils/constants";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";

interface IProp{
  message:any
}
export const InComingMessage = ({message}:IProp) => {
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    const timeOutTyping = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col items-start py-1">
      <div className="w-full max-w-sm flex items-start">
        <div className="flex items-end">
          <div className="mr-2 mt-1 bg-[#4c4c6c] p-1 rounded">
            <img
              className="w-[50px] h-[50px]"
              src={`${getStaticURL()}/assets/images/logo.png`}
              alt=""
            />
          </div>

          {isTyping && (
            <div>
              <IsTypingIcon />
            </div>
          )}
        </div>
        {!isTyping && message && (
          <div className="my-1 py-1 px-2 flex flex-col bg-[#fff] rounded-lg ">
            <div>
              {message?.content.text}
            </div>
            <div className="flex items-center justify-end">
              <span className="text-[#4B5563] text-[12px]">{message?.time&&DateTime.fromMillis(message.time).toFormat("HH:MM")}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
