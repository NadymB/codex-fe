"use client";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { CandleStickChart } from "@/components/trade/CandleStickChart";
import { tradeService } from "@/services/TradeService";
import { PRICE_TYPE } from "@/utils/constants";
import { ChartData } from "@/utils/type";
import { KLineData } from "klinecharts";
import { useEffect, useState } from "react";

const TradePage = () => {
  const [chartData, setChartData] = useState<Array<KLineData>>([]);
  const getChartData = async () => {
    const response = await tradeService.getChartData(PRICE_TYPE.CRYPTO);

    if (response.success) {
      const formattedData: any = response.data
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

      setChartData(formattedData);
    }
  };

  useEffect(() => {
    getChartData();
    const interval = setInterval(() => {
      getChartData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DefaultLayout
      isShowMenubar={false}
      pageTitle="Dashboard"
      containerStyle="bg-[#13111a] dark:bg-[#13111a]"
    >
      {chartData && <CandleStickChart data={chartData} />}
    </DefaultLayout>
  );
};
export default TradePage;
