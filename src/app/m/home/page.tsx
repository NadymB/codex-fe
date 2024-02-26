/* eslint-disable @next/next/no-img-element */
"use client";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useEffect, useState } from "react";
import Header from "@/components/layouts/Header";
import { getStaticURL } from "@/utils/constants";
import { NextIcon } from "@/assets/icons/NextIcon";
import { DepositIcon } from "@/assets/icons/DepositIcon";
import { TelesaleIcon } from "@/assets/icons/TelesaleIcon";
import FeatureSection from "@/components/Home/FeatureSection";
import { LoudspeakerIcon } from "@/assets/icons/LoudspeakerIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import Link from "next/link";
import i18next from "i18next";

export default function Home() {

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <Header />
      <div>
        <div className="w-full">
          <img
            className="w-full"
            src={`${getStaticURL()}/assets/images/home_banner.png`}
            alt=""
          />
        </div>
        <div className="flex gap-4 p-4">
          <Link
            href={"/m/deposit"}
            className=" flex-1 flex items-center justify-between px-4 py-2 rounded bg-[#202125] hover:bg-[#121212] duration-200 ease-in-out"
          >
            <div className="flex items-center gap-3">
              <DepositIcon />
              <span className="text-[#fff]">{i18next.t("homePage.deposit")}</span>
            </div>
            <NextIcon />
          </Link>
          <Link
            href={"/coming-soon"}
            className=" flex-1 flex items-center justify-between px-4 py-2 rounded bg-[#3D5AFE] hover:bg-[#2a3eb1] duration-200 ease-in-out"
          >
            <div className="flex items-center gap-3">
              <TelesaleIcon />
              <span className="text-[#fff]">{i18next.t("homePage.service")}</span>
            </div>
            <NextIcon />
          </Link>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h5 className="text-[24px] text-white">{i18next.t("homePage.popularTransactionPair")}</h5>
          <div className="flex gap-1 pb-3 overflow-auto ">
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">BTC</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#dd5350]">51665.17</span>
                <span className="text-[#dd5350] text-[12px]">-0.76%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            {/*  */}
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">ETH</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#55af72]">2921.39</span>
                <span className="text-[#55af72] text-[12px]">+1.53%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            {/*  */}
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">ALUMINIUM</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#55af72]">2145.39</span>
                <span className="text-[#55af72] text-[12px]">+0.19%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            {/*  */}
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">GOLD</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#55af72]">2021.39</span>
                <span className="text-[#55af72] text-[12px]">+1.53%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            {/*  */}
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">PLATINUM</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#dd5350]">51665.17</span>
                <span className="text-[#dd5350] text-[12px]">-0.76%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            {/*  */}
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">BNB</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#55af72]">2021.39</span>
                <span className="text-[#55af72] text-[12px]">+1.53%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">COFFEE</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#dd5350]">51665.17</span>
                <span className="text-[#dd5350] text-[12px]">-0.76%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">SOL</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#dd5350]">51665.17</span>
                <span className="text-[#dd5350] text-[12px]">-0.76%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">OIL</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#dd5350]">51665.17</span>
                <span className="text-[#dd5350] text-[12px]">-0.76%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
            <Link
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
            >
              <div>
                <span className="text-[#fff]">LTC</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#dd5350]">51665.17</span>
                <span className="text-[#dd5350] text-[12px]">-0.76%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">{i18next.t("homePage.trade")}</span>
                <NextIcon />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 ">
          <LoudspeakerIcon />
          <Link href={'/m/announcement'}>
          <MenuIcon />
          </Link>
        </div>
        <FeatureSection />
      </div>
    </DefaultLayout>
  );
}
