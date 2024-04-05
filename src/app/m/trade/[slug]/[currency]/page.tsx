/* eslint-disable @next/next/no-img-element */
"use client";

import Tabs from "@/components/Tabs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ConfirmPaymentModal } from "@/components/trade/ConfirmPaymentModal";
import { OrderSection } from "@/components/trade/OrderSection";
import Trading from "@/components/trade/Trading";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import { PERMISSION_REQUIRED } from "@/models/User";
import { tradeService } from "@/services/TradeService";
import {
  CHART_CODE,
  CRYPTOCURRENCY_CODE,
  PAIR_CODE,
  PAIR_TYPE,
  PRICE_TYPE,
  TRADE_CHART
} from "@/utils/constants";
import { BetType } from "@/utils/type";
import { Button } from "@mui/material";
import { t } from "i18next";
import { useEffect, useRef, useState } from "react";
import {
  AdvancedChart
} from "react-tradingview-embed";

const TradePage = ({
  params,
}: {
  params: { slug: string; currency: string };
}) => {
  const [isOpenConfirmPaymentModal, setIsOpenConfirmPaymenModal] =
    useState(false);
  const [isSelectTab, setIsSelectTab] = useState(0);
  const { fetchUserBalance, currentUser } = useAuth();
  const [formData, setFormData] = useState<BetType>({
    amount: 0,
    pairType: PRICE_TYPE.CRYPTO,
    pairName: CRYPTOCURRENCY_CODE.BNBUSDT,
    betPercentage: 0,
    timeoutInMinutes: 0,
    position: "long",
  });

  const [isRefresh, setIsRefresh] = useState(false);
  const [tokenPrice, setTokenPrice] = useState<number>(0);
  const [typeOfChart, setTypeOfChart] = useState<TRADE_CHART>();
  const [pairCode, setPairCode] = useState<string>();
  const changeTab = (tabNumber: number) => {
    setIsSelectTab(tabNumber);
  };

  useEffect(() => {
    if (params.slug && params.currency) {
      const tokenKey = CHART_CODE[params.slug as keyof typeof CHART_CODE]
        .split(" ")
        .join("_");

      setPairCode(
        PAIR_CODE[tokenKey.toLocaleUpperCase() as keyof typeof PAIR_CODE]
      );
      setTypeOfChart(
        PAIR_TYPE[tokenKey.toLocaleLowerCase() as keyof typeof PAIR_TYPE] ===
          PRICE_TYPE.CRYPTO
          ? TRADE_CHART.CANDLE
          : TRADE_CHART.TRADING_VIEW
      );
    }
  }, [params]);

  const tradeBtnRef = useRef(null);
  const orderRef = useRef(null);

  const handleConfirmPayment = async (value: BetType) => {
    try {
      const checkPermissions = currentUser?.configMetadata?.permissions?.find(
        (item: string) => item === PERMISSION_REQUIRED.TRADE
      );

      if (!checkPermissions) {
        onToast(t("permissionDenied.trade"), "error");
      } else {
        const tokenKey = CHART_CODE[params.slug as keyof typeof CHART_CODE]
          .split(" ")
          .join("_")
          .toLowerCase();
        const response = await tradeService.placeOrders({
          ...value,
          pairName: tokenKey,
          pairType: PAIR_TYPE[tokenKey as keyof typeof PAIR_TYPE],
        });
        if (response.success) {
          onToast(t("orderConfirmed"), "success");
          fetchUserBalance();
          setIsRefresh(!isRefresh);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderHistory = async () => {
    try {
      if (!currentUser) return [];
      const tokenKey = CHART_CODE[params.slug as keyof typeof CHART_CODE]
        .split(" ")
        .join("_")
        .toLowerCase();

      const response = await tradeService.getOrders(
        {
          limit: 10,
          offset: 0,
        },
        tokenKey
      );
      if (response.success) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const getOrderPending = async () => {
    try {
      if (!currentUser) return [];
      const tokenKey = CHART_CODE[params.slug as keyof typeof CHART_CODE]
        .split(" ")
        .join("_")
        .toLowerCase();

      const response = await tradeService.getOrdersPending(
        {
          limit: 10,
          offset: 0,
        },
        tokenKey
      );
      if (response.success) {
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
        <div className=" flex flex-col ">
          {/* {typeOfChart === TRADE_CHART.CANDLE && (
            <>
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
                  setValueToken={setTokenPrice}
                  token={params.slug}
                  currency={params.currency}
                />
              </div>
            </>
          )} */}
          {pairCode && (
            <AdvancedChart
              widgetProps={{
                allow_symbol_change: true,
                symbol: pairCode,
                interval: "15",
                locale: "vi_VN",
              }}
            />
          )}
          <div ref={orderRef}>
            <OrderSection
              isRefresh={isRefresh}
              getOrderPending={getOrderPending}
              getOrderHistory={getOrderHistory}
            />
          </div>
          <div
            id="tradeBtn"
            ref={tradeBtnRef}
            className="fixed bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-2 z-50 bg-[#000000]"
          >
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
        </div>
      ),
    },
    {
      name: `${t("tradePage.trade.title")}`,
      content: (
        <>
          <Trading
            priceToken={tokenPrice}
            isRefresh={isRefresh}
            token={params.slug}
            currency={params.currency}
            onBet={(value: BetType) => {
              setFormData(value);
              setIsOpenConfirmPaymenModal(true);
            }}
          />
          <OrderSection
            isRefresh={isRefresh}
            getOrderPending={getOrderPending}
            getOrderHistory={getOrderHistory}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    const menubar = document.getElementById("menu-bar");
    const ref = tradeBtnRef.current as any;
    if (menubar && ref) {
      ref.style.bottom = `${menubar.offsetHeight}px`;
    }

    const orderSection = document.getElementById("tradeBtn");
    const orderRefCurrent = orderRef.current as any;
    if (menubar && orderSection && orderRefCurrent) {
      orderRefCurrent.style.marginBottom = `${orderSection.offsetHeight}px`;
    }
  }, []);

  return (
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
  );
};
export default TradePage;
