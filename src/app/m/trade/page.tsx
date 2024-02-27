"use client";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { TradingChart } from "@/components/trade/TradingChart";

const TradePage = () => {
  return (
    <DefaultLayout
      isShowMenubar={false}
      pageTitle="Dashboard"
      containerStyle="bg-[#13111a] dark:bg-[#13111a]"
    >
      <TradingChart />
    </DefaultLayout>
  );
};
export default TradePage;
