/* eslint-disable @next/next/no-img-element */
"use client";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/index.css';
import { Pagination } from "swiper/modules";
import { SWIPER_SLIDER_DATA } from "@/utils/constants";
import { SwiperItem } from "@/components/SwiperItem";
import Link from "next/link";
import i18next from "i18next";

export default function Home() {

  return (
    <>
      <Link 
        className="px-6"
        href={"/home"}
      > 
        {i18next.t("onBoarding.skipBtn")}
      </Link>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-white dark:bg-black"
      >
        {SWIPER_SLIDER_DATA.map((item,index) => (
          <SwiperSlide key={index}>
            <SwiperItem url={item.url} title={i18next.t(`onBoarding.sliderTitleFirst`)} content={i18next.t(`onBoarding.sliderContentFirst`)}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
