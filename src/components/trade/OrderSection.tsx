import React, { useContext, useEffect, useState } from "react";
import Tabs from "../Tabs";
import Link from "next/link";
import Image from "next/image";
import { t } from "i18next";
import { ORDERS_DATA, WS_TOPIC, getStaticURL } from "@/utils/constants";
import { OrderItem } from "./OrderItem";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { useAuth } from "@/hooks/useAuth";
const orders = true;

export const OrderSection = ({
  isRefresh,

  getOrderHistory,
  getOrderPending,
}: {
  getOrderHistory: () => Promise<any>;
  getOrderPending: () => Promise<any>;
  isRefresh: boolean;
}) => {
  const { webSocket } = useContext(WebSocketCtx);
  const { fetchUserBalance } = useAuth();
  const [isSelectTab, setIsSelectTab] = useState(0);
  const [orderHistory, setOrderHistory] = useState<any>([]);
  const [orderPending, setOrderPending] = useState<any>([]);
  const changeTab = (tabNumber: number) => {
    setIsSelectTab(tabNumber);
  };

  useEffect(() => {
    fetchOrderHistory();
    fetchOrderPending();
  }, [isRefresh]);

  const fetchOrderHistory = async () => {
    const data = await getOrderHistory();
    setOrderHistory(data.rows);
  };
  const fetchOrderPending = async () => {
    const data = await getOrderPending();
    setOrderPending(data);
  };
  useEffect(() => {
    if (webSocket) {
      webSocket.on(WS_TOPIC.BET_RESULT, (data) => {
        fetchOrderPending();
        fetchOrderHistory();
        fetchUserBalance();

      });
      webSocket.on(WS_TOPIC.TRADING, (data) => {
        fetchOrderPending();
        fetchOrderHistory();
        fetchUserBalance();
      });
    }
    return () => {
      webSocket?.off(WS_TOPIC.BET_RESULT);
      webSocket?.off(WS_TOPIC.TRADING);
    };
  }, [webSocket]);

  const tabOrder = [
    {
      name: `${t("tradePage.position")} ${orderPending?.length > 0? `(${orderPending?.length})`:""} `,
      content:
        orderPending?.length > 0 ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              {orderPending.map((item: any, index: number) => (
                <OrderItem
                  key={index}
                  isLong={item.position === "long"}
                  price={item.orderValue}
                  amount={item.amount}
                  profit={(item.amount * item.betPercentage) / 100}
                  timeoutInMinutes={item.timeoutInMinutes}
                  endAt={item.endAt}
                  token={item.pairName.replace("usdt", "").toUpperCase()}
                  balanceAtStart={item.balanceAtTradeSessionStart}
                />
              ))}
            </div>
            <span className="w-full text-[#9ca3af] text-xs pb-3 text-center">
              {t("tradePage.trade.noMoreData")}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <Image
              src={`${getStaticURL()}/assets/images/empty.svg`}
              alt={t("order.noData")}
              width={100}
              height={100}
              className="w-80 h-80"
            />
            <span className="text-base text-[#737373]">
              {t("order.noData")}
            </span>
          </div>
        ),
    },
    {
      name: `${t("tradePage.order")}`,
      content:
        orderHistory?.length > 0 ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              {orderHistory.map((item: any, index: number) => (
                <OrderItem
                  key={index}
                  isLong={item.position === "long"}
                  price={item.orderValue}
                  amount={item.amount}
                  profit={(item.isWin?(item.amount * item.betPercentage) / 100:0)}
                  timeoutInMinutes={item.timeoutInMinutes}
                  token={item.pairName.replace("usdt", "").toUpperCase()}
                  balanceAtStart={item.balanceAtTradeSessionStart}
                  balanceAtEnd={item.balanceAtTradeSessionEnd}

                />
              ))}
            </div>
            <span className="w-full text-[#9ca3af] text-xs pb-3 text-center">
              {t("tradePage.trade.noMoreData")}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <Image
              src={`${getStaticURL()}/assets/images/empty.svg`}
              alt={t("order.noData")}
              width={100}
              height={100}
              className="w-80 h-80"
            />
            <span className="text-base text-[#737373]">
              {t("order.noData")}
            </span>
          </div>
        ),
    },
  ];
  return (
    <div className="relative">
      <Tabs
        tabs={tabOrder}
        classNameTab="last:ml-4 w-full"
        classNameItem="px-0 mx-2 py-0 pb-2 bg-transparent "
        onChange={(value) => changeTab(value)}
        activeTab={isSelectTab}
      />
      <Link
        href={"/m/order"}
        className="text-[#3D5AFE] absolute top-0 right-4 "
      >
        {t("tradePage.trade.allOrders")}
      </Link>
    </div>
  );
};
