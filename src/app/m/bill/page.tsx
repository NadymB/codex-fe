"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import Image from "next/image";

const BillPage = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      <GoBack title={t("bill.title")} />
      <div className="flex flex-col items-center p-4">
        <Image
          src={`${getStaticURL()}/assets/images/empty.svg`}
          alt={t("bill.noData")}
          width={100}
          height={100}
          className="w-80 h-80"
        />
        <span className="text-base text-[#737373]">
          {t("bill.noData")}
        </span>
      </div>
    </div>
  );
};

export default BillPage;
