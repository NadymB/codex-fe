"use client";

import { tradeService } from "@/services/TradeService";
import { CHART_CODE } from "@/utils/constants";
import { numberToLocaleString } from "@/utils/formatNumber";
import { ChartData } from "@/utils/type";
import { t } from "i18next";
import Cookies from "js-cookie";
import {
  KLineData,
  LineType,
  TooltipShowType,
  dispose,
  init,
} from "klinecharts";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

const tradingSessionTimes = [
  { lable: "15m", value: 15 },
  { lable: "30m", value: 30 },
  { lable: "1h", value: 60 },
  { lable: "5h", value: 300 },
  { lable: "1d", value: 1440 },
  { lable: "1w", value: 10080 },
  { lable: "1M", value: 43200 },
];

interface Props {
  token: string;
  currency: string;
  setValueToken: Dispatch<SetStateAction<number>>;
}

export const TradingCandleChart: FC<Props> = ({
  token,
  currency,
  setValueToken,
}) => {
  const [currentTradingSessionTime, setCurrentTradingSessionTime] = useState(0);
  const [tokenPrice, setTokenPrice] = useState<string>("0");
  const [lastCandleDirection, setLastCandleDirection] = useState<string>("up");

  const applyDataToChart = async (
    chart: {
      getDataList(): any;
      updateData(cleared: KLineData): unknown;
      applyNewData: (arg0: KLineData[]) => void;
    },
    { loadMore }: { loadMore: boolean }
  ) => {
    const crypto = Cookies.get("crypto");
    const cookiesData = crypto
      ? JSON.parse(crypto)
      : { token: "BNB", values: "USDT", type: "crypto" };

    const tokenKey = CHART_CODE[token as keyof typeof CHART_CODE]
      .replace(" ", "_")
      .toLowerCase();

    const response = await tradeService.getChartData(
      cookiesData.type,
      tokenKey,
      tradingSessionTimes[currentTradingSessionTime].value
    );

    if (response.success) {
      const formattedData: KLineData[] = response.data
        .map((data: ChartData) => {
          const dateObject = new Date(data.intervalStart);
          const unixTimestamp = dateObject.getTime();
          return {
            close: data.closingValue,
            high: data.highestValue,
            low: data.lowestValue,
            open: data.openingValue,
            timestamp: unixTimestamp,
            volume: data.totalValue,
          };
        })
        .sort(
          (a: { timestamp: number }, b: { timestamp: number }) =>
            a.timestamp - b.timestamp
        );

      setTokenPrice(
        numberToLocaleString(
          formattedData[formattedData.length - 1].close,
          "USC"
        )
      );
      setValueToken(formattedData[formattedData.length - 1].close)

      if (loadMore) {
        const cleared = formattedData.filter(
          (data) =>
            data.timestamp >= formattedData[formattedData.length - 1].timestamp
        );
        chart.updateData(cleared[0]);
      } else {
        // add new data to the chart
        chart?.applyNewData(formattedData);
      }

      const dataList = chart.getDataList();
      const lastCandle = dataList[dataList.length - 1];
      const openPrice = lastCandle.open;
      const closePrice = lastCandle.close;

      if (closePrice > openPrice) {
        setLastCandleDirection("up");
      } else if (closePrice < openPrice) {
        setLastCandleDirection("down");
      }
    }
  };

  useEffect(() => {
    // initialize the chart
    const chart = init("chart");

    chart?.createIndicator("MA");
    chart?.resize();
    chart?.setStyles({
      candle: { tooltip: { showType: "rect" as TooltipShowType } },
      grid: {
        show: true,
        horizontal: {
          show: true,
          size: 0.1,
          color: "#EDEDED",
          style: "solid" as LineType,
        },
        vertical: {
          show: true,
          size: 0.1,
          color: "#EDEDED",
          style: "solid" as LineType,
        },
      },
      crosshair: {
        show: true,
        horizontal: {
          show: true,
          line: {
            show: true,
            style: "dashed" as LineType,
            dashedValue: [4, 2],
            size: 1,
            color: "#3D5AFE",
          },
        },
        vertical: {
          show: true,
          line: {
            show: true,
            style: "dashed" as LineType,
            dashedValue: [4, 2],
            size: 1,
            color: "#3D5AFE",
          },
        },
      },
    });

    applyDataToChart(chart as any, { loadMore: false });
    const interval = setInterval(() => {
      applyDataToChart(chart as any, { loadMore: true });
    }, 10000);

    return () => {
      // destroy chart
      dispose("chart");
      clearInterval(interval);
    };
  }, [currentTradingSessionTime]);

  return (
    <>
      <div>
        <div className="flex justify-between pb-6">
          <div className="">
            <h2
              className={`${lastCandleDirection === "up" ? "text-[#55af72]" : "text-[#F92954]"} font-bold m-0`}
            >
              {tokenPrice}
            </h2>
            <span className="text-[#fff] text-[14px]">≈{tokenPrice} USD</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-[#fff] text-[14px] opacity-30">
                {t("tradePage.chart.24HourHigh")}
              </div>
              <div className="text-[#fff] text-[14px] ml-6">24.127</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[#fff] text-[14px] opacity-30">
                {t("tradePage.chart.24HourLow")}
              </div>
              <div className="text-[#fff] text-[14px] ml-6">24.127</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[#fff] text-[14px] opacity-30">
                {t("tradePage.chart.24HourTurnover")}
              </div>
              <div className="text-[#fff] text-[14px] ml-6">2.27B</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {tradingSessionTimes.map((time, index: number) => (
            <div
              key={index}
              className={`${currentTradingSessionTime === index ? "text-white hover:bg-[#1F1F1F]" : "text-gray-500"} ${tradingSessionTimes.length - 1 === index ? "rounded-r-lg" : ""} ${index === 0 ? "rounded-l-lg" : ""} text-[12.5px] font-[600] cursor-pointer  py-2 px-1.5`}
              onClick={() => setCurrentTradingSessionTime(index)}
            >
              {time.lable}
            </div>
          ))}
        </div>
      </div>
      <div id="chart" style={{ width: "100%", height: "100vh" }} />;
    </>
  );
};
