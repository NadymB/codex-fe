import React from "react";
import Tabs from "../Tabs";
import Link from "next/link";
import Image from "next/image";
import i18next from "i18next";
import { getStaticURL } from "@/utils/constants";
const tabOrder = [
  {
    name: `${i18next.t("tradePage.position")}`,
    content: (
      <div className="flex flex-col items-center justify-center  p-4 ">
        <Image
          src={`${getStaticURL()}/assets/images/empty.svg`}
          alt={i18next.t("order.noData")}
          width={100}
          height={100}
          className="w-80 h-80"
        />
        <span className="text-base text-[#737373]">
          {i18next.t("order.noData")}
        </span>
      </div>
    ),
  },
  {
    name: `${i18next.t("tradePage.order")}`,
    content: (
      <div className="flex flex-col items-center justify-center  p-4 ">
        <Image
          src={`${getStaticURL()}/assets/images/empty.svg`}
          alt={i18next.t("order.noData")}
          width={100}
          height={100}
          className="w-80 h-80"
        />
        <span className="text-base text-[#737373]">
          {i18next.t("order.noData")}
        </span>
      </div>
    ),
  },
];
export const OrderSection = () => {
  return (
    <div className="relative">
      <Tabs
        tabs={tabOrder}
        classNameTab="last:ml-4 w-full"
        classNameItem="px-0 mx-2 py-0 pb-2 bg-transparent "
      />
      <Link
        href={"/m/order"}
        className="text-[#3D5AFE] absolute top-0 right-4 "
      >
        Tất cả đơn hàng
      </Link>
    </div>
  );
};
