"use client";

import { Loading } from "@/components/Loading";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Tab } from "@/components/layouts/Tab";
import { Button } from "@/components/table/Button";
import { PriceCell } from "@/components/table/PriceCell";
import { Table } from "@/components/table/Table";
import { TrandingCell } from "@/components/table/TradingCell";
import { priceFeedService } from "@/services/PriceFeedService";
import { PRICE_TYPE, getRnd } from "@/utils/constants";
import { t } from "i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MarketPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleCrawlDataFeed = async () => {
    try {
      const response = await priceFeedService.getPriceFeed(
        PRICE_TYPE.COMMODITY
      );
      if (response.success) {
        const mappedData = response.data.map((item: any, index: number) => {
          return [
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                onSelect(item.metadata.name.split("_")[0].toUpperCase())
              }
            >
              <TrandingCell
                token={item.metadata.name.split("_")[0].toUpperCase()}
                totalValue={getRnd(0, 100000)}
              />
            </div>,
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                onSelect(item.metadata.name.split("_")[0].toUpperCase())
              }
            >
              <PriceCell usdtPrice={item.value} usdPrice={item.value} />
            </div>,
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                onSelect(item.metadata.name.split("_")[0].toUpperCase())
              }
            >
              <Button className="bg-[#54AF71] text-white">
                <p className="mb-0" suppressHydrationWarning>{`+${getRnd(0, 10)}%`}</p>
              </Button>
            </div>,
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

  const onSelect = (token: string) => {
    Cookies.set(
      "crypto",
      JSON.stringify({ token, values: "USDT", type: PRICE_TYPE.COMMODITY })
    );
    router.push(`/m/trade/${token}/USDT`);
  };

  const marketTabOption = [
    {
      label: `${t("marketPage.commodity")}`,
      link: "/m/markets/commodity",
    },
    {
      label: t("marketPage.cryptoCurrency"),
      link: "/m/markets/crypto",
    },
    {
      label: t("marketPage.foreignExchange"),
      link: "/m/markets/forex",
    },
  ];
  return (
    <DefaultLayout containerStyle="bg-[#000000] dark:bg-[#000000]">
      <Tab options={marketTabOption} />
      {data.length ? (
        <div className="w-full p-3">
          <Table
            columns={[
              `${t("marketPage.transaction")} / ${t("marketPage.tradingVolume")}`,
              `${t("marketPage.price")}`,
              `${t("marketPage.24HRisingDecline")}`,
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
