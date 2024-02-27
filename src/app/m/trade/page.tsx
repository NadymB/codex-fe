/* eslint-disable @next/next/no-img-element */
"use client";

import Tabs from "@/components/Tabs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Tab } from "@/components/layouts/Tab";
import Trading from "@/components/trade/Trading";
import { TradingChart } from "@/components/trade/TradingChart";
import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    name: `${i18next.t("tradePage.chart.title")}`,
    content: (
      <>
        <div className=" flex flex-col ">
          <div className="py-3 px-2">
            <div>
              <img className="w-10 h-10" src="" alt="" />
              <span className="text-[#fff] ml-1">SILVER/USDT</span>
              <span className="text-[#fff] bg-[#55AF7233] px-2 py-1 rounded ml-1">
                +0.44%
              </span>
            </div>
          </div>
          <div className="flex justify-between px-4 pb-4">
            <div className="">
              <h4 className="text-[#55af72] text-[25px] font-bold m-0">
                24.127
              </h4>
              <span className="text-[#fff] text-[14px]">≈ 88.62 AED</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="text-[#fff] text-[14px] opacity-30">
                  {i18next.t("tradePage.chart.24HourHigh")}
                </div>
                <div className="text-[#fff] text-[14px] ml-6">24.127</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[#fff] text-[14px] opacity-30">
                  {i18next.t("tradePage.chart.24HourHigh")}
                </div>
                <div className="text-[#fff] text-[14px] ml-6">24.127</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[#fff] text-[14px] opacity-30">
                  {i18next.t("tradePage.chart.24HourHigh")}
                </div>
                <div className="text-[#fff] text-[14px] ml-6">2.27B</div>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <TradingChart />
          </div>
        </div>
      </>
    ),
  },
  {
    name: `${i18next.t("tradePage.trade.title")}`,
    content: (
      <>
        <Trading />
      </>
    ),
  },
];
const tabOrder = [
  {
    name: `${i18next.t("tradePage.position")}`,
    content: (
      <div className="flex flex-col items-center justify-center  p-4 ">
        <Image
          src={`${getStaticURL()}/assets/images/empty.svg`}
          alt={i18next.t("order.noData")}
          width={100}
          height={100}
          className="w-80 h-80"
        />
        <span className="text-base text-[#737373]">
          {i18next.t("order.noData")}
        </span>
      </div>
    ),
  },
  {
    name: `${i18next.t("tradePage.order")}`,
    content: (
      <div className="flex flex-col items-center justify-center  p-4 ">
        <Image
          src={`${getStaticURL()}/assets/images/empty.svg`}
          alt={i18next.t("order.noData")}
          width={100}
          height={100}
          className="w-80 h-80"
        />
        <span className="text-base text-[#737373]">
          {i18next.t("order.noData")}
        </span>
      </div>
    ),
  },
];
const TradePage = () => {
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#13111a] dark:bg-[#13111a]  "
    >
      <Tabs
        tabs={tabs}
        classNameTab="sticky top-0 left-0 bg-[#13111a] z-[100]"
        classNameItem="flex-1 "
      />
      <div className="relative">
        <Tabs
          tabs={tabOrder}
          classNameTab="last:ml-4 w-full"
          classNameItem="px-0 mx-2 py-0 pb-2 bg-transparent "
        />
        <Link
          href={"/m/order"}
          className="text-[#3D5AFE] absolute top-0 right-4 "
        >
          Tất cả đơn hàng
        </Link>
      </div>
    </DefaultLayout>
  );
};
export default TradePage;
