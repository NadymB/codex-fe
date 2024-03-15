/* eslint-disable @next/next/no-img-element */
"use client";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { SWIPER_SLIDER_DATA } from "@/utils/constants";
import { SwiperItem } from "@/components/SwiperItem";
import Link from "next/link";
import i18next from "i18next";

export default function Home() {
  return (
    <div className="flex flex-col bg-black h-screen">
      <div className="flex items-center justify-end px-6 h-16 ">
        <Link className="text-sm text-white" href={"/m/home"}>
          {i18next.t("onBoarding.skipBtn")}
        </Link>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-black"
      >
        {SWIPER_SLIDER_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperItem
              url={item.url}
              title={i18next.t(`onBoarding.${item.title}`)}
              content={i18next.t(`onBoarding.${item.content}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex-1 flex px-4 bg-black">
        <Link
          href={"/m/home"}
          className="h-fit self-end mb-[70px] flex-1 py-[6px] px-4 bg-[#3d5afe] hover:bg-[#2a3eb1] text-sm text-white text-center rounded"
        >
          {i18next.t("onBoarding.startNowBtn")}
        </Link>
      </div>
    </div>
  );
}
