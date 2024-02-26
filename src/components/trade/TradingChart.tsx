"use client";

import { tradeService } from "@/services/TradeService";
import { PRICE_TYPE } from "@/utils/constants";
import { ChartData } from "@/utils/type";
import {
  KLineData,
  LineType,
  TooltipShowType,
  dispose,
  init,
} from "klinecharts";
import { useEffect } from "react";

export const TradingChart = () => {
  const applyDataToChart = async (chart: {
    applyNewData: (arg0: KLineData[]) => void;
  }) => {
    const response = await tradeService.getChartData(PRICE_TYPE.CRYPTO);
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

      // add data to the chart
      chart?.applyNewData(formattedData);
    }
  };

  useEffect(() => {
    // initialize the chart
    const chart = init("chart");

    chart?.createIndicator("MA");

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

    applyDataToChart(chart as any);
    const interval = setInterval(() => {
      applyDataToChart(chart as any);
    }, 10000);

    return () => {
      // destroy chart
      dispose("chart");
      clearInterval(interval);
    };
  }, []);

  return <div id="chart" style={{ width: "100%", height: "100vh" }} />;
};
