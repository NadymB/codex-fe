import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";

const MarketPage = () => {
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <div className="text-white">MarketPage</div>
    </DefaultLayout>
  );
};

export default MarketPage;
