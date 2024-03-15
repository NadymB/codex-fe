/* eslint-disable @next/next/no-img-element */
import ImageGallery from "@/app/m/service/previewImage";
import { IsTypingIcon } from "@/assets/icons/IsTypingIcon";
import { ReceivedIcon } from "@/assets/icons/ReceivedIcon";
import { Messages } from "@/models/Chat";
import { getStaticURL } from "@/utils/constants";
import { DateTime } from "luxon";
import { useState } from "react";

interface IProp {
  message: Messages;
  // sender: Account;
}
export const InComingMessage = ({ message }: IProp) => {
  const [isTyping, setIsTyping] = useState(false);

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
        {message && (
          <div className="my-1 py-1 px-2 flex flex-col bg-[#fff] rounded-lg  max-w-full">
            <div className="max-w-md">{message?.content?.text}</div>
            {!!message?.content?.images.length && (
              <div className="">
              <ImageGallery image={message?.content?.images[0].original}/>
            </div>
            )}
            <div className="flex items-center justify-end">
              <span className="text-[#4B5563] text-[12px]">
                {message?.createdAt &&
                  DateTime.fromISO(message?.createdAt).toFormat("HH:mm")}
              </span>
              <div className="ml-2">
                {/* {message?.status === "sending" ? (
                <SendingIcon />
              ) : (
              )} */}
                <ReceivedIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
