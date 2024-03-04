/* eslint-disable @next/next/no-img-element */
"use client";

import { FavoriteIcon } from "@/assets/icons/FavoriteIcon";
import Tabs from "@/components/Tabs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { OrderSection } from "@/components/trade/OrderSection";
import Trading from "@/components/trade/Trading";
import { TradingChart } from "@/components/trade/TradingChart";
import { getStaticURL } from "@/utils/constants";
import { Button } from "@mui/material";
import i18next from "i18next";
import { useState } from "react";

const tradingSessionTimes = ["15m", "30m", "1h", "5h", "1d", "1w", "1M"];

const TradePage = ({
  params,
}: {
  params: { slug: string; currency: string };
}) => {
  const [currentTradingSessionTime, setCurrentTradingSessionTime] = useState(0);
  const tabs = [
    {
      name: `${i18next.t("tradePage.chart.title")}`,
      content: (
        <>
          <div className=" flex flex-col ">
            <div className="flex flex-row space-x-1 px-4 py-3 items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8"
                  src={`${getStaticURL()}/assets/images/commodity/GOLD.svg`}
                  alt=""
                />
                <div className="text-[16px]">
                  <span className="text-white">
                    {params.slug} / {params.currency}
                  </span>
                  <span className="text-green-600 bg-[#55AF7233] px-2 py-1 rounded ml-1 text-[14px]">
                    +0.44%
                  </span>
                </div>
              </div>
              <div>
                <FavoriteIcon />
              </div>
            </div>
            <div className="flex justify-between px-4 pb-6">
              <div className="">
                <h2 className="text-[#55af72] font-bold m-0">2,047.43</h2>
                <span className="text-[#fff] text-[14px]">≈2,047.43 USD</span>
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
                    {i18next.t("tradePage.chart.24HourLow")}
                  </div>
                  <div className="text-[#fff] text-[14px] ml-6">24.127</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[#fff] text-[14px] opacity-30">
                    {i18next.t("tradePage.chart.24HourTurnover")}
                  </div>
                  <div className="text-[#fff] text-[14px] ml-6">2.27B</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 px-4">
              {tradingSessionTimes.map((time: string, index: number) => (
                <div
                  key={index}
                  className={`${currentTradingSessionTime === index ? "text-white hover:bg-[#1F1F1F]" : "text-gray-500"} ${tradingSessionTimes.length - 1 === index ? "rounded-r-lg" : ""} ${index === 0 ? "rounded-l-lg" : ""} text-[12.5px] font-[600] cursor-pointer  py-2 px-1.5`}
                  onClick={() => setCurrentTradingSessionTime(index)}
                >
                  {time}
                </div>
              ))}
            </div>
            <div className="p-4">
              <TradingChart />
            </div>
          </div>
          <OrderSection />
          <div className="sticky bottom-0 left-0 flex items-center gap-3 px-4 py-2 z-50 bg-[#000000]">
            <Button
              sx={{ padding: 0, textTransform: "none" }}
              className="p-0 w-full overflow-hidden normal-case"
              variant="contained"
            >
              <div className="w-full bg-[#55af72] py-[6px] px-4 ">
                {i18next.t("tradePage.long")}
              </div>
            </Button>
            <Button
              sx={{ padding: 0, textTransform: "none" }}
              className="p-0 w-full overflow-hidden normal-case"
              variant="contained"
            >
              <div className="w-full bg-[#dd5350] py-[6px] px-4 ">
                {i18next.t("tradePage.short")}
              </div>
            </Button>
          </div>
        </>
      ),
    },
    {
      name: `${i18next.t("tradePage.trade.title")}`,
      content: (
        <>
          <Trading />
          <OrderSection />
        </>
      ),
    },
  ];

  return (
    <DefaultLayout containerStyle="bg-[#000000] dark:bg-[#000000]  ">
      <Tabs
        tabs={tabs}
        classNameTab="sticky top-0 left-0 bg-[#000000] z-[100] "
        classNameItem="flex-1 "
      />
    </DefaultLayout>
  );
};
export default TradePage;
