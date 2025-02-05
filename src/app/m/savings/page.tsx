/* eslint-disable @next/next/no-img-element */
"use client";
import { t } from "i18next";
import Link from "next/link";
import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";

const SavingsPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("savings.title")} />
      <div className="flex flex-col items-center gap-4 p-4">
        <img
          src={`${getStaticURL()}/assets/images/savings.webp`}
          alt="Vip"
          className="w-[384px] max-w-[80%]"
        />
        <h2 className="text-2xl text-white text-center">
          {t("savings.depositInterestTitle")}
        </h2>
        <span className="text-sm text-[#888] text-center">
          {t("savings.depositInterestContent")}
        </span>
        <div className="flex flex-col gap-6 w-full p-4 bg-[#1c1c1e] rounded">
          <div className="flex gap-2 items-center justify-center text-lg text-white text-center">
            {t("savings.depositInterestSubContent")}
          </div>
          <Link
            href={"/m/service"}
            className="py-[6px] px-4 bg-[#3d5afe] hover:bg-[#2a3db0] rounded text-center text-white text-sm font-medium"
          >
            {t("savings.contactBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavingsPage;
