/* eslint-disable @next/next/no-img-element */
"use client";

import { FavoriteIcon } from "@/assets/icons/FavoriteIcon";
import Tabs from "@/components/Tabs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ConfirmPaymentModal } from "@/components/trade/ConfirmPaymentModal";
import { OrderSection } from "@/components/trade/OrderSection";
import Trading from "@/components/trade/Trading";
import { TradingCandleChart } from "@/components/trade/TradingCandleChart";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import { tradeService } from "@/services/TradeService";
import {
  CRYPTOCURRENCY_CODE,
  PRICE_TYPE,
  getStaticURL,
} from "@/utils/constants";
import { BetType } from "@/utils/type";
import { Button } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";

const TradePage = ({
  params,
}: {
  params: { slug: string; currency: string };
}) => {
  const [isOpenConfirmPaymentModal, setIsOpenConfirmPaymenModal] =
    useState(false);
  const [isSelectTab, setIsSelectTab] = useState(0);
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState<BetType>({
    amount: 0,
    pairType: PRICE_TYPE.CRYPTO,
    pairName: CRYPTOCURRENCY_CODE.BNBUSDT,
    betPercentage: 0,
    timeoutInMinutes: 0,
    position: "long",
  });

  const changeTab = (tabNumber: number) => {
    setIsSelectTab(tabNumber);
  };

  const handleConfirmPayment = async (value: BetType) => {
    try {
      const response = await tradeService.placeOrders({
        ...value,
        pairName: value.pairName.toLocaleLowerCase(),
      });
      if (response.success) {
        onToast(t("orderConfirmed"), "success");
        console.log("bet success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderHistory = async () => {
    try {
      const response = await tradeService.getOrders({
        limit: 10,
        offset: 0,
      });
      if (response.success) {
        console.log(response);
        return response.data;
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const tabs = [
    {
      name: `${t("tradePage.chart.title")}`,
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
          <OrderSection getOrderHistory={getOrderHistory} />
          <div className="sticky bottom-0 left-0 flex items-center gap-3 px-4 py-2 z-50 bg-[#000000]">
            <Button
              sx={{ padding: 0, textTransform: "none" }}
              className="p-0 w-full overflow-hidden normal-case"
              variant="contained"
              onClick={() => setIsSelectTab(1)}
            >
              <div className="w-full bg-[#55af72] py-[6px] px-4 ">
                {t("tradePage.long")}
              </div>
            </Button>
            <Button
              sx={{ padding: 0, textTransform: "none" }}
              className="p-0 w-full overflow-hidden normal-case"
              variant="contained"
              onClick={() => setIsSelectTab(1)}
            >
              <div className="w-full bg-[#dd5350] py-[6px] px-4 ">
                {t("tradePage.short")}
              </div>
            </Button>
          </div>
        </>
      ),
    },
    {
      name: `${t("tradePage.trade.title")}`,
      content: (
        <>
          <Trading
            token={params.slug}
            currency={params.currency}
            onBet={(value: BetType) => {
              setFormData(value);
              setIsOpenConfirmPaymenModal(true);
            }}
          />
          <OrderSection getOrderHistory={getOrderHistory} />
        </>
      ),
    },
  ];

  return (
    // <AuthenticationLayout>
    <DefaultLayout containerStyle="bg-[#000000] dark:bg-[#000000] relative">
      <Tabs
        tabs={tabs}
        classNameTab="sticky top-0 left-0 bg-[#000000] z-[30] "
        classNameItem="flex-1 "
        onChange={(value) => changeTab(value)}
        activeTab={isSelectTab}
      />
      {isOpenConfirmPaymentModal && (
        <ConfirmPaymentModal
          isLong={formData.position === "long"}
          data={formData}
          slug={params.slug}
          currency={params.currency}
          onClickCloseBtn={() => setIsOpenConfirmPaymenModal(false)}
          onClickConfirmBtn={() => {
            setIsOpenConfirmPaymenModal(false);
            handleConfirmPayment(formData);
          }}
        />
      )}
    </DefaultLayout>
    // </AuthenticationLayout>
  );
};
export default TradePage;
