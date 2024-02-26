"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import "../../../../i18n";
import Image from "next/image";

const OrderPage = () => {

  return (
    <div className="min-h-screen bg-[#000000]">
      <GoBack title={i18next.t("order.title")}/>
      <div className="flex flex-col items-center p-4">
        <Image 
            src={`${getStaticURL()}/assets/images/empty.svg`}
            alt={i18next.t("order.noData")}
            width={100}
            height={100} 
            className="w-80 h-80"
        />
        <span className="text-base text-[#737373]">{i18next.t("order.noData")}</span>
      </div>
    </div>
  );
};

export default OrderPage;
