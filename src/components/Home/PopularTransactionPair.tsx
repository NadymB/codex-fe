import { NextIcon } from "@/assets/icons/NextIcon";
import { priceFeedService } from "@/services/PriceFeedService";
import { t } from "i18next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const PopularTransactionPair = () => {
  const [dataCommon, setDataCommon] = useState([]);
  const handleCrawlDataFeed = async () => {
    try {
      const response = await priceFeedService.getCommonPriceFeed();
      if (response.success) {
        setDataCommon(response.data.commodityPrices);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCrawlDataFeed();
    // const inteval = setInterval(handleCrawlDataFeed, 10000);

    // return () => clearInterval(inteval);
  }, []);
  return (
    <div className="flex flex-col gap-2 p-4">
      <h5 className="text-[24px] text-white">
        {t("homePage.popularTransactionPair")}
      </h5>
      <div className="flex gap-1 pb-3 overflow-auto ">
        {/* {dataCommon.length>0 && dataCommon.map((item:any)=>{
              return (
              <Link
              key={Math.random()}
              href={"/coming-soon"}
              className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
              >
              <div>
                <span className="text-[#fff]">{item.metadata.name.replace("usdt", "").toUpperCase()}</span>
                <span className="mx-0.5 text-[#fff]">/</span>
                <span className="text-[#888888]">USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#dd5350]">51665.17</span>
                <span className="text-[#dd5350] text-[12px]">-0.76%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#fff] text-nowrap">
                  {t("homePage.trade")}
                </span>
                <NextIcon />
              </div>
            </Link>

              )
            })} */}

        {/*  */}
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">ETH</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#55af72]">2921.39</span>
            <span className="text-[#55af72] text-[12px]">+1.53%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        {/*  */}
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">ALUMINIUM</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#55af72]">2145.39</span>
            <span className="text-[#55af72] text-[12px]">+0.19%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        {/*  */}
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">GOLD</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#55af72]">2021.39</span>
            <span className="text-[#55af72] text-[12px]">+1.53%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        {/*  */}
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">PLATINUM</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#dd5350]">51665.17</span>
            <span className="text-[#dd5350] text-[12px]">-0.76%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        {/*  */}
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">BNB</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#55af72]">2021.39</span>
            <span className="text-[#55af72] text-[12px]">+1.53%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">COFFEE</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#dd5350]">51665.17</span>
            <span className="text-[#dd5350] text-[12px]">-0.76%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">SOL</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#dd5350]">51665.17</span>
            <span className="text-[#dd5350] text-[12px]">-0.76%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">OIL</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#dd5350]">51665.17</span>
            <span className="text-[#dd5350] text-[12px]">-0.76%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
        <Link
          href={"/coming-soon"}
          className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
        >
          <div>
            <span className="text-[#fff]">LTC</span>
            <span className="mx-0.5 text-[#fff]">/</span>
            <span className="text-[#888888]">USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#dd5350]">51665.17</span>
            <span className="text-[#dd5350] text-[12px]">-0.76%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#fff] text-nowrap">
              {t("homePage.trade")}
            </span>
            <NextIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
