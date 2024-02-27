/* eslint-disable @next/next/no-img-element */
"use client";

import { FavoriteIcon } from "@/assets/icons/FavoriteIcon";
import Tabs from "@/components/Tabs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { OrderSection } from "@/components/trade/OrderSection";
import Trading from "@/components/trade/Trading";
import { TradingChart } from "@/components/trade/TradingChart";
import { Button } from "@mui/material";
import i18next from "i18next";

const tabs = [
  {
    name: `${i18next.t("tradePage.chart.title")}`,
    content: (
      <>
        <div className=" flex flex-col ">
          <div className="py-3 px-2 flex items-center justify-between">
            <div>
              <img className="w-10 h-10" src="" alt="" />
              <span className="text-[#fff] ml-1">SILVER/USDT</span>
              <span className="text-[#fff] bg-[#55AF7233] px-2 py-1 rounded ml-1">
                +0.44%
              </span>
            </div>
            <div><FavoriteIcon/></div>
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
          <div className=" p-4">
            <TradingChart />
          </div>
        </div>
        <OrderSection />
        <div className="sticky bottom-0 left-0 flex items-center gap-3 px-4 py-2 z-50 bg-[#000000]">
          {" "}
          <Button
            sx={{ padding: 0 ,textTransform: "none" }}
            className="p-0 w-full overflow-hidden normal-case"
            variant="contained"
          >
            <div className="w-full bg-[#55af72] py-[6px] px-4 ">
              {i18next.t("tradePage.long")}
            </div>
          </Button>
          <Button
            sx={{ padding: 0 ,textTransform: "none" }}
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

const TradePage = () => {
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
