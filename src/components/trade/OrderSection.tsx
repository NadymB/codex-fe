import React, {useState} from "react";
import Tabs from "../Tabs";
import Link from "next/link";
import Image from "next/image";
import { t } from "i18next";
import { ORDERS_DATA, getStaticURL } from "@/utils/constants";
import { OrderItem } from "./OrderItem";
const orders = true;
const tabOrder = [
  {
    name: `${t("tradePage.position")}`,
    content: orders ? (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          {ORDERS_DATA.map((item, index) => (
            <OrderItem key={index} isLong={item.long} price={item.paymentPrice} amount={item.amount} profit={item.profit}/>
          ))}
        </div>
        <span className="w-full text-[#9ca3af] text-xs pb-3 text-center">{t("tradePage.trade.noMoreData")}</span>
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
    content: (
      <div className="flex flex-col items-center justify-center  p-4 ">
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
export const OrderSection = () => {
  const [isSelectTab, setIsSelectTab] = useState(0);
  const changeTab = (tabNumber: number) => {
    setIsSelectTab(tabNumber);
  };

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
