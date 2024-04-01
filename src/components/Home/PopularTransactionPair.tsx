import { NextIcon } from "@/assets/icons/NextIcon";
import { priceFeedService } from "@/services/PriceFeedService";
import { getRnd } from "@/utils/constants";
import {
  convertNumberToFormattedString,
  removeTrailingZeros,
} from "@/utils/converter";
import { t } from "i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PopularTransactionPair = () => {
  const [dataCommon, setDataCommon] = useState([]);
  const [dataCrypto, setDataCrypto] = useState([]);
  const [dataForex, setDataForex] = useState([]);
  const router = useRouter();
  
  const handleSelectCrypto = (metadata: any) => {
    const token = metadata.name.split("_")[0].toUpperCase();
    Cookies.set(
      "crypto",
      JSON.stringify({ token, values: "USDT", type: metadata.type})
    );
    router.push(`/m/trade/${token}/USDT`)
  }

  const handleCrawlDataFeed = async () => {
    try {
      const response = await priceFeedService.getCommonPriceFeed();
      if (response.success) {
        setDataCommon(response.data.commodityPrices);
        setDataCrypto(response.data.cryptoPrices);
        setDataForex(response.data.forexPrices);
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
  return (
    <div className="flex flex-col gap-2 p-4">
      <h5 className="text-[24px] text-white">
        {t("homePage.popularTransactionPair")}
      </h5>
      <div className="flex gap-1 pb-3 overflow-auto ">
        {dataCrypto?.length > 0 &&
          dataCrypto.map((item: any) => {
            let priceRandom = getRnd(0, 100000);
            let percentRandom = getRnd(-10, 10);
            return (
              <button
                key={Math.random()}
                onClick={()=> handleSelectCrypto(item.metadata)}
                className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
              >
                <div>
                  <span className="text-[#fff]">
                    {item.metadata.name.replace("usdt", "").toUpperCase()}
                  </span>
                  <span className="mx-0.5 text-[#fff]">/</span>
                  <span className="text-[#888888]">USDT</span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${Number(percentRandom) > 0 ? "text-[#55af72]" : "text-[#dd5350]"}`}
                  >
                    {convertNumberToFormattedString(
                      removeTrailingZeros(Number(item.value).toFixed(8))
                    )}
                  </span>
                  <span
                    className={`${Number(percentRandom) > 0 ? "text-[#55af72]" : "text-[#dd5350]"}`}
                  >
                    {percentRandom}%
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#fff] text-nowrap">
                    {t("homePage.trade")}
                  </span>
                  <NextIcon />
                </div>
              </button>
            );
          })}
        {dataCommon.length > 0 &&
          dataCommon.map((item: any) => {
            let priceRandom = getRnd(0, 100000);
            let percentRandom = getRnd(-10, 10);
            return (
              <button
                key={Math.random()}
                onClick={()=> handleSelectCrypto(item.metadata)}
                className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
              >
                <div>
                  <span className="text-[#fff]">
                    {item.metadata.name.replace("_futures", "").toUpperCase()}
                  </span>
                  <span className="mx-0.5 text-[#fff]">/</span>
                  <span className="text-[#888888]">USDT</span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${Number(percentRandom) > 0 ? "text-[#55af72]" : "text-[#dd5350]"}`}
                  >
                    {convertNumberToFormattedString(
                      removeTrailingZeros(Number(item.value).toFixed(8))
                    )}
                  </span>
                  <span
                    className={`${Number(percentRandom) > 0 ? "text-[#55af72]" : "text-[#dd5350]"}`}
                  >
                    {percentRandom}%
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#fff] text-nowrap">
                    {t("homePage.trade")}
                  </span>
                  <NextIcon />
                </div>
              </button>
            );
          })}
        {dataForex?.length > 0 &&
          dataForex.map((item: any) => {
            let priceRandom = getRnd(0, 100000);
            let percentRandom = getRnd(-10, 10);
            return (
              <button
                key={Math.random()}
                onClick={()=> handleSelectCrypto(item.metadata)}
                className="flex flex-col gap-3 p-2 rounded-lg bg-[#1c1c1e]"
              >
                <div>
                  <span className="text-[#fff]">
                    {item.metadata.name.replace("_usd", "").toUpperCase()}
                  </span>
                  <span className="mx-0.5 text-[#fff]">/</span>
                  <span className="text-[#888888]">USDT</span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${Number(percentRandom) > 0 ? "text-[#55af72]" : "text-[#dd5350]"}`}
                  >
                    {convertNumberToFormattedString(
                      removeTrailingZeros(Number(item.value).toFixed(8))
                    )}
                  </span>
                  <span
                    className={`${Number(percentRandom) > 0 ? "text-[#55af72]" : "text-[#dd5350]"}`}
                  >
                    {percentRandom}%
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#fff] text-nowrap">
                    {t("homePage.trade")}
                  </span>
                  <NextIcon />
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
};
