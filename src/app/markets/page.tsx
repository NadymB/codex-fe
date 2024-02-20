import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Tab, TabOptions } from "@/components/layouts/Tab";
import React from "react";

const options: TabOptions = [
  {
    label: "Commodity",
    link: "/markets/commodity",
  },
  {
    label: "Cryptocurrency",
    link: "/markets/crypto",
  },
  {
    label: "Foreign Exchange",
    link: "/markets/forex",
  },
];

const MarketPage = () => {
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <Tab options={options} />
      <div className="text-white">MarketPage</div>
    </DefaultLayout>
  );
};

export default MarketPage;
