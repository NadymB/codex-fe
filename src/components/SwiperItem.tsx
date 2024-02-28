import React from "react";
import Image from "next/image";

interface SwiperItemProps {
  url: string;
  title: string;
  content: string;
}

export const SwiperItem = ({ url, title, content }: SwiperItemProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Image
        src={url}
        alt={title}
        width={100}
        height={100}
        style={{
          height: "250px",
          width: "fit-content",
        }}
      />
      <h2 className="text-[32px] text-white pt-8">{title}</h2>
      <span className="text-xs text-[#888]">{content}</span>
    </div>
  );
};
