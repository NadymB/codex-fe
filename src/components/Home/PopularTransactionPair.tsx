import { NextIcon } from "@/assets/icons/NextIcon";
import { priceFeedService } from "@/services/PriceFeedService";
import { PRICE_TYPE, getRnd } from "@/utils/constants";
import {
  convertNumberToFormattedString,
  removeTrailingZeros,
} from "@/utils/converter";
import { t } from "i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MOCKUP_COMMON_PRICE = [
  {
    metadata: {
      name: "aluminium_futures",
      type: "commodity",
    },
    value: 2370.50,
  },
  {
    metadata: {
      name: "gold_futures",
      type: "commodity",
    },
    value: 2271.72,
  },
  {
    metadata: {
      name: "silver_futures",
      type: "commodity",
    },
    value: 26.292,
  },
];

const MOCKUP_FOREX_PRICE = [
  {
    metadata: {
      name: "cny_usd",
      type: "foreign_exchange",
    },
    value: 7.2358,
  },
  {
    metadata: {
      name: "gbp_usd",
      type: "foreign_exchange",
    },
    value: 0.7954,
  },
  {
    metadata: {
      name: "jpy_usd",
      type: "foreign_exchange",
    },
    value: 151.7325,
  },
];

export const PopularTransactionPair = () => {
  const [dataCrypto, setDataCrypto] = useState([]);
  const [dataCommon, setDataCommon] = useState<Array<any>>([]);
  const [dataForex, setDataForex] = useState<Array<any>>([]);
  const router = useRouter();

  const handleSelectCrypto = (metadata: any) => {
    const token =
      metadata.type === PRICE_TYPE.CRYPTO
        ? metadata.name.replace("usdt", "").toUpperCase()
        : metadata.name.split("_")[0].toUpperCase();
    Cookies.set(
      "crypto",
      JSON.stringify({ token, values: "USDT", type: metadata.type })
    );
    router.push(`/m/trade/${token}/USDT`);
  };

  const handleCrawlDataFeed = async () => {
    try {
      const response = await priceFeedService.getCommonPriceFeed();
      if (response.success) {
        setDataCrypto(response.data.cryptoPrices);
        setDataCommon(MOCKUP_COMMON_PRICE);
        setDataForex(MOCKUP_FOREX_PRICE);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCrawlDataFeed();
    const inteval = setInterval(handleCrawlDataFeed, 2000);

    return () => clearInterval(inteval);
  }, []);
  return (
    <div className="flex flex-col gap-2 p-4">
      <h5 className="text-[24px] text-white">
        {t("homePage.popularTransactionPair")}
      </h5>
      <div className="flex gap-1 pb-3 overflow-auto">
        {dataCrypto?.length > 0 &&
          dataCrypto.map((item: any) => {
            let percentRandom = getRnd(-5, 5);
            return (
              <button
                key={Math.random()}
                onClick={() => handleSelectCrypto(item.metadata)}
                className="flex flex-col gap-3 min-w-[120px] p-2 rounded-lg bg-[#1c1c1e] overflow-hidden"
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
                      removeTrailingZeros(Number(item.value * (1 + Number(percentRandom) / 100)).toFixed(6))
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
            let percentRandom = getRnd(-1, 1);
            return (
              <button
                key={Math.random()}
                onClick={() => handleSelectCrypto(item.metadata)}
                className="flex flex-col gap-3 min-w-[120px] p-2 rounded-lg bg-[#1c1c1e] overflow-hidden"
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
                      removeTrailingZeros(
                        Number(
                          item.value * (1 + Number(percentRandom) / 100)
                        ).toFixed(6)
                      )
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
            let percentRandom = getRnd(-0.1, 1.1);
            return (
              <button
                key={Math.random()}
                onClick={() => handleSelectCrypto(item.metadata)}
                className="flex flex-col gap-3 min-w-[120px] p-2 rounded-lg bg-[#1c1c1e] overflow-hidden"
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
                      removeTrailingZeros(
                        Number(
                          item.value * (1 + Number(percentRandom) / 100)
                        ).toFixed(6)
                      )
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
