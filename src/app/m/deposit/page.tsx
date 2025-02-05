"use client";

import { ArtificialIcon } from "@/assets/icons/ArtificialIcon";
import { GoBack } from "@/components/layouts/GoBack";
import { t } from "i18next";
import Link from "next/link";

const DepositPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("deposit.title")} />
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-[32px] text-white text-center">
          {t("deposit.chooseYourDepositMethod")}
        </h2>
        <Link
          href="/m/service"
          className="flex py-[6px] gap-2 bg-[#202125] px-4 rounded"
        >
          <ArtificialIcon />
          <div className="flex flex-col text-sm text-white">
            <span className="text-base font-semibold">
              {t("deposit.artificialDeposit")}
            </span>
            <span>{t("deposit.contactArtificial")}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DepositPage;
