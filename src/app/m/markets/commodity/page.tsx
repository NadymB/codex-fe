"use client";

import { Table } from "@/components/table/Table";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Tab } from "@/components/layouts/Tab";
import { PRICE_TYPE } from "@/utils/constants";
import { TrandingCell } from "@/components/table/TradingCell";
import { PriceCell } from "@/components/table/PriceCell";
import { Button } from "@/components/table/Button";
import { useEffect, useState } from "react";
import { priceFeedService } from "@/services/PriceFeedService";
import i18next from "i18next";
import { Loading } from "@/components/Loading";
import Link from "next/link";

const MarketPage = () => {
  const [data, setData] = useState([]);
  const handleCrawlDataFeed = async () => {
    try {
      const response = await priceFeedService.getPriceFeed(
        PRICE_TYPE.COMMODITY
      );
      if (response.success) {
        const mappedData = response.data.map((item: any, index: number) => {
          return [
            <Link
              href={`/m/trade/${item.metadata.name.split("_")[0].toUpperCase()}/USDT`}
              key={index}
            >
              <TrandingCell
                tradingName={item.metadata.name.split("_")[0].toUpperCase()}
                totalValue="99.14M"
              />
            </Link>,
            <Link
              href={`/m/trade/${item.metadata.name.split("_")[0].toUpperCase()}/USDT`}
              key={index}
            >
              <PriceCell usdtPrice={item.value} usdPrice={item.value} />
            </Link>,
            <Link
              href={`/m/trade/${item.metadata.name.split("_")[0].toUpperCase()}/USDT`}
              key={index}
            >
              <Button text="+3.06%" className="bg-[#54AF71] text-white" />
            </Link>,
          ];
        });
        setData(mappedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCrawlDataFeed();
    const inteval = setInterval(handleCrawlDataFeed, 10000);

    return () => clearInterval(inteval);
  }, []);
  const marketTabOption = [
    {
      label: `${i18next.t("marketPage.commodity")}`,
      link: "/m/markets/commodity",
    },
    {
      label: i18next.t("marketPage.cryptoCurrency"),
      link: "/m/markets/crypto",
    },
    {
      label: i18next.t("marketPage.foreignExchange"),
      link: "/m/markets/forex",
    },
  ];
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <Tab options={marketTabOption} />
      {data.length ? (
        <div className="w-full p-3">
          <Table
            columns={[
              `${i18next.t("marketPage.transaction")} / ${i18next.t("marketPage.tradingVolume")}`,
              `${i18next.t("marketPage.price")}`,
              `${i18next.t("marketPage.24HRisingDecline")}`,
            ]}
            data={data}
          />
        </div>
      ) : (
        <div className="h-screen">
          <Loading />
        </div>
      )}
    </DefaultLayout>
  );
};

export default MarketPage;
