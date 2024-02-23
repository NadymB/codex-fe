"use client";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { CandleStickChart } from "@/components/trade/CandleStickChart";
import { tradeService } from "@/services/TradeService";
import { PRICE_TYPE } from "@/utils/constants";
import { ChartData } from "@/utils/type";
import { useEffect, useState } from "react";

const TradePage = () => {
  const [chartData, setChartData] = useState<Array<ChartData>>([]);
  const getChartData = async () => {
    const response = await tradeService.getChartData(PRICE_TYPE.CRYPTO);

    if (response.success) {
      const formattedData: ChartData[] = response.data
        .map((data: ChartData) => {
          const dateObject = new Date(data.intervalStart);
          const unixTimestamp = dateObject.getTime();

          return [
            unixTimestamp,
            data.openingValue,
            data.highestValue,
            data.lowestValue,
            data.closingValue,
            48908700,
          ];
        })
        .sort((a: number[], b: number[]) => a[0] - b[0]);

      setChartData(formattedData);
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <DefaultLayout
      isShowMenubar={false}
      pageTitle="Dashboard"
      containerStyle="bg-[#13111a] dark:bg-[#13111a]"
    >
      <div className="text-white">heheh</div>
      {chartData && <CandleStickChart data={chartData} />}
    </DefaultLayout>
  );
};
export default TradePage;
