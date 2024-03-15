/* eslint-disable @next/next/no-img-element */
"use client";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";

const VipPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("vip.title")} />
      <div className="flex flex-col items-center gap-4 p-4">
        <img
          src={`${getStaticURL()}/assets/images/vip.webp`}
          alt="Vip"
          className="w-[384px] max-w-[80%]"
        />
        <h2 className="text-2xl text-white text-center">
          {t("vip.upgradeMyMemberLevelTitle")}
        </h2>
        <span className="text-sm text-[#888] text-center">
          {t("vip.upgradeMyMemberLevelContent")}
        </span>
        <div className="flex flex-col gap-6 w-full p-4 bg-[#1c1c1e] rounded">
          <div className="flex gap-2 items-center justify-center text-base text-[#888]">
            <div className="text-center">
              {t("vip.currentLevelTitle")}
            </div>
            <div className="text-xl text-white text-center">
              {t("vip.currentLevelContent")}
            </div>
          </div>
          <Link
            href={"/m/service"}
            className="py-[6px] px-4 bg-[#3d5afe] hover:bg-[#2a3db0] rounded text-center text-white text-sm font-medium"
          >
            {t("vip.contactBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VipPage;
