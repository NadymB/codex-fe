/* eslint-disable react/jsx-key */
"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { OrderItemHistory } from "@/components/order.tsx/OrderItemHistory";
import { tradeService } from "@/services/TradeService";
import { getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

const OrderPage = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const getOrderHistory = async () => {
    try {
      const response = await tradeService.getOrders({
        limit: 10,
        offset: 0,
      });
      if (response.success) {
        setOrderHistory(response.data.rows);
        console.log(response.data.rows);
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  useEffect(() => {
    getOrderHistory();
  }, []);
  return (
    <div className="min-h-screen bg-[#000000]">
      <GoBack title={t("order.title")} />
      {orderHistory.length > 0 ? (
        orderHistory.map((item: any, index: number) => {
          return (
            <Fragment key={index}>
              <OrderItemHistory
                key={index}
                id={item.id}
                isLong={item.position === "long"}
                price={item.orderValue}
                amount={item.amount}
                profit={(item.amount * item.betPercentage) / 100}
                timeoutInMinutes={item.timeoutInMinutes}
                endAt={item.endAt}
                token={item.pairName.replace("usdt", "").toUpperCase()}
              />
            </Fragment>
          );
        })
      ) : (
        <div className="flex flex-col items-center p-4">
          <Image
            src={`${getStaticURL()}/assets/images/empty.svg`}
            alt={t("order.noData")}
            width={100}
            height={100}
            className="w-80 h-80"
          />
          <span className="text-base text-[#737373]">{t("order.noData")}</span>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
