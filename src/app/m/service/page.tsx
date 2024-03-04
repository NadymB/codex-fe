"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { ImageIcon } from "@/assets/icons/ImageIcon";
import { SendIcon } from "@/assets/icons/SendIcon";
import { Logo } from "@/components/Logo";
import { InComingMessage } from "@/components/chat/InComingMessage";
import { OutComingMessage } from "@/components/chat/OutComingMessage";
import { TextField, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { IncomingMessage } from "http";

import i18next from "i18next";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useRef, useState } from "react";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3D5AFE",
  },
  "& label": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
      borderWidth: 1,
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3D5AFE",
      borderWidth: 1,
    },
  },
});
const ServicePage = () => {
  const router = useRouter();
  const headerRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const messageListRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [sendingMessageId, setSendingMessageId] = useState<
    undefined | number
  >();
  const [heightHeader, setHeightHeader] = useState(0);
  const [heighInput, setHeighInput] = useState(0);
  const [listMessage, setListMessage] = useState([
    {
      type: "in",
      content: {
        text: "Xin chào tôi có thể giúp gì được cho bạn?",
      },
      time: new Date().getTime(),
      messageId: Math.random(),
    },
  ]);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeightHeader(height);
    }
    if (inputRef.current) {
      const height = inputRef.current.offsetHeight;
      setHeighInput(height);
    }
  }, []);
  const handleSendMessage = ({
    text = "",
    image = "",
  }: {
    text?: string;
    image?: string;
  }) => {
    if (text !== "" || image !== "") {
      const messageId = Math.random();
      const newMessage = {
        type: "out",
        content: {
          text: text,
          image: image,
        },
        time: new Date().getTime(),
        status: "sending",
        messageId,
      };
      setListMessage((prev) => [...prev, newMessage]);
      setInputMessage("");
      setSendingMessageId(messageId);
    }
  };
  useEffect(() => {
    scrollToBottom();
    const updateMessageStatusById = (idToUpdate: number, newStatus: string) => {
      const ListMessageUpdate = listMessage.map((message) => {
        if (message.messageId === idToUpdate) {
          return { ...message, status: newStatus };
        }
        return message;
      });
      setListMessage(ListMessageUpdate);
    };
    const timeOutSendMessage = setTimeout(() => {
      if (sendingMessageId) {
        updateMessageStatusById(Number(sendingMessageId), "sent");
        setSendingMessageId(undefined);
      }
    }, 1500);
  }, [listMessage]);

  const scrollToBottom = () => {
    const lastMessage = messageListRef.current.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        let image = e.target.result;
        handleSendMessage({ image: image })
      };
    }
  };
  return (
    <div className="h-screen overflow-hidden bg-[#1C1C1E]">
      <div
        ref={headerRef}
        className="fixed top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2"
      >
        <div className="cursor-pointer" onClick={() => router.back()}>
          <BackIcon />
        </div>
        <span className="text-[#fff]">{i18next.t("servicePage.title")}</span>
      </div>
      <div
        ref={messageListRef}
        className=" relative overflow-auto flex flex-col px-4 py-4"
        style={{
          height: `calc(100% - ${heightHeader + heighInput + 10}px)`,
          marginTop: `${heightHeader}px`,
          marginBottom: `${heighInput}px`,
          scrollBehavior: "smooth",
        }}
      >
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#22C55E]"></div>
        <div>
          <div className="flex flex-col justify-center items-center pt-4 mb-4">
            <div className="rounded-lg overflow-hidden mb-4">
              <Logo />
            </div>
          </div>
          <div className="text-[#fff] text-[18px] font-bold text-center my-2">
            {i18next.t("servicePage.onlineService")}
          </div>
          <div className="text-[#9CA3AF] text-center">
            {i18next.t("servicePage.onlineServiceContent")}
          </div>
          <div className="flex flex-col">
            {listMessage.map((message, index) => {
              if (message.type === "in") {
                return (
                  <Fragment key={index}>
                    {" "}
                    <InComingMessage message={message} />
                  </Fragment>
                );
              } else if (message.type === "out") {
                return (
                  <Fragment key={index}>
                    {" "}
                    <OutComingMessage message={message} />
                  </Fragment>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div
        ref={inputRef}
        className="fixed bottom-0 left-0 w-full px-2 py-2  bg-[#000000] flex items-center h-auto"
      >
        <div className="relative  flex flex-col justify-center rounded-md w-full bg-[#1D1C22]  ">
          <CssTextField
            placeholder={i18next.t("servicePage.placeholderMessage")}
            id="outlined-multiline-flexible"
            multiline
            maxRows={4}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </div>
        <input
          ref={imageRef}
          type="file"
          accept="image/*"
          name="image"
          id="imgUpload"
          onChange={handleFileChange}
          hidden
        />
        <IconButton
          size="large"
          onClick={() => {
            return imageRef.current && imageRef.current.click();
          }}
        >
          <ImageIcon />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => handleSendMessage({ text: inputMessage })}
        >
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default ServicePage;
