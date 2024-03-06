/* eslint-disable @next/next/no-img-element */
"use client";

import { FavoriteIcon } from "@/assets/icons/FavoriteIcon";
import Tabs from "@/components/Tabs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ConfirmPaymentModal } from "@/components/trade/ConfirmPaymentModal";
import { OrderSection } from "@/components/trade/OrderSection";
import Trading from "@/components/trade/Trading";
import { TradingCandleChart } from "@/components/trade/TradingCandleChart";
import { getStaticURL } from "@/utils/constants";
import { Button } from "@mui/material";
import i18next from "i18next";
import { useState } from "react";

const TradePage = ({
  params,
}: {
  params: { slug: string; currency: string };
}) => {
  const [isOpenConfirmPaymentModal, setIsOpenConfirmPaymenModal] = useState(false);
  const [isLong, setIsLong] = useState<boolean>();

  const handleLong = () => {
    setIsLong(true);
    setIsOpenConfirmPaymenModal(true);
  };

  const handleShort = () => {
    setIsLong(false);
    setIsOpenConfirmPaymenModal(true);
  };

  const tabs = [
    {
      name: `${i18next.t("tradePage.chart.title")}`,
      content: (
        <>
          <div className=" flex flex-col ">
            <div className="flex flex-row space-x-1 px-4 py-3 items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8"
                  src={`${getStaticURL()}/assets/images/tokens/${params.slug}.svg`}
                  alt=""
                />
                <div className="text-[16px]">
                  <span className="text-white">
                    {params.slug} / {params.currency}
                  </span>
                  <span className="text-green-600 bg-[#55AF7233] px-2 py-1 rounded ml-1 text-[14px]">
                    +0.44%
                  </span>
                </div>
              </div>
              <div>
                <FavoriteIcon />
              </div>
            </div>
            <div className="px-4">
              <TradingCandleChart
                token={params.slug}
                currency={params.currency}
              />
            </div>
          </div>
          <OrderSection />
          <div className="sticky bottom-0 left-0 flex items-center gap-3 px-4 py-2 z-50 bg-[#000000]">
            <Button
              sx={{ padding: 0, textTransform: "none" }}
              className="p-0 w-full overflow-hidden normal-case"
              variant="contained"
              onClick={handleLong}
            >
              <div className="w-full bg-[#55af72] py-[6px] px-4 ">
                {i18next.t("tradePage.long")}
              </div>
            </Button>
            <Button
              sx={{ padding: 0, textTransform: "none" }}
              className="p-0 w-full overflow-hidden normal-case"
              variant="contained"
              onClick={handleShort}
            >
              <div className="w-full bg-[#dd5350] py-[6px] px-4 ">
                {i18next.t("tradePage.short")}
              </div>
            </Button>
          </div>
        </>
      ),
    },
    {
      name: `${i18next.t("tradePage.trade.title")}`,
      content: (
        <>
          <Trading token={params.slug} currency={params.currency} onClickLongBtn={handleLong} onClickShortBtn={handleShort}/>
          <OrderSection />
        </>
      ),
    },
  ];

  return (
    <DefaultLayout containerStyle="bg-[#000000] dark:bg-[#000000] relative">
      <Tabs
        tabs={tabs}
        classNameTab="sticky top-0 left-0 bg-[#000000] z-[100] "
        classNameItem="flex-1 "
      />
      {isOpenConfirmPaymentModal && <ConfirmPaymentModal isLong={isLong} onClickCloseBtn={() => setIsOpenConfirmPaymenModal(false)}/>}
    </DefaultLayout>
  );
};
export default TradePage;
