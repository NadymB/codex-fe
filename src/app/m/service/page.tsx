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
import React, { useEffect, useRef, useState } from "react";
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
  const [heightHeader, setHeightHeader] = useState(0);
  const [heighInput, setHeighInput] = useState(0);

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
        className=" relative flex flex-col overflow-auto px-4 py-4"
        style={{
          height: `calc(100% - ${heightHeader + heighInput}px)`,
          marginTop: `${heightHeader}px`,
          marginBottom: `${heighInput}px`,
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
            Dịch vụ trực tuyến
          </div>
          <div className="text-[#9CA3AF] text-center">
            Chào mừng bạn đến với dịch vụ khách hàng trực tuyến!
          </div>
          <div className="flex flex-col">
            <OutComingMessage />
            <InComingMessage />
          </div>
        </div>
      </div>
      <div
        ref={inputRef}
        className="fixed bottom-0 left-0 w-full px-4 py-4  bg-[#000000] flex items-center h-auto"
      >
        <div className="relative  flex flex-col justify-center rounded-md w-full bg-[#1D1C22]  ">
          <CssTextField
            placeholder="Tin nhắn sẽ được gửi..."
            id="outlined-multiline-flexible"
            multiline
            maxRows={4}
          />
        </div>
        <IconButton size="large">
          <ImageIcon />
        </IconButton>
        <IconButton size="large">
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default ServicePage;
