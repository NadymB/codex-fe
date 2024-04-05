/* eslint-disable @next/next/no-img-element */
import ImageGallery from "@/app/m/service/previewImage";
import { ReceivedIcon } from "@/assets/icons/ReceivedIcon";
import { SentIcon } from "@/assets/icons/SentIcon";
import { Messages } from "@/models/Chat";
import { Account } from "@/models/User";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { WS_TOPIC } from "@/utils/constants";
import { DateTime } from "luxon";
import { useState, useContext, useEffect } from "react";

interface IProp {
  message: Messages;
  sender: Account;
}

export const OutComingMessage = ({ message, sender }: IProp) => {
  const [isRead, setIsRead] = useState(false);
  const { webSocket } = useContext(WebSocketCtx);
  useEffect(() => {
    if (webSocket) {
      webSocket.on(WS_TOPIC.READ_MESSAGE, (data) => {
        setIsRead(data?.messageIds?.includes(message._id));
      });
    }

    return () => {
      webSocket?.off(WS_TOPIC.READ_MESSAGE);
    };
  }, [webSocket]);

  return (
    <div className="flex flex-col justify-end items-end py-1">
      <div className="text-[#4B5563] text-[12px] text-right">
        {sender?.username}
      </div>
      {message && (
        <div className="my-1 py-1 px-2 flex flex-col bg-[#637BFE] rounded-lg max-w-[80%] lg:max-w-[50%]">
          <div className="max-w-md">{message?.content?.text}</div>
          {!!message?.content?.images.length && (
            <div className="">
              <ImageGallery image={message?.content?.images[0].original} />
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
              {isRead || message?.metadata?.readStatus.length > 1 ? (
                <ReceivedIcon />
              ) : (
                <SentIcon />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
