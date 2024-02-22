"use client";
import i18next from "i18next";
import Image from "next/image";
import Link from "next/link";
import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";

const VipPage = () => {

  return (
    <div className="bg-black min-h-screen">
        <GoBack title={i18next.t("vip.title")} />
        <div className="flex flex-col items-center gap-4 p-4">
            <Image
                src={`${getStaticURL()}/assets/images/vip.webp`}
                alt="Vip"
                width={100}
                height={100}
                className="w-[384px] h-fit"
            />
            <h2 className="text-2xl text-white text-center">{i18next.t("vip.upgradeMyMemberLevelTitle")}</h2>
            <span className="text-sm text-[#888] text-center">{i18next.t("vip.upgradeMyMemberLevelContent")}</span>
            <div className="flex flex-col gap-6 w-full p-4 bg-[#1c1c1e] rounded">
                <div className="flex gap-2 items-center justify-center text-base text-[#888]">
                    <div className="text-center">{i18next.t("vip.currentLevelTitle")}</div>
                    <div className="text-xl text-white text-center">{i18next.t("vip.currentLevelContent")}</div>
                </div>
                <Link
                    href={"/coming-soon"}
                    className="py-[6px] px-4 bg-[#3d5afe] rounded text-center text-white text-sm font-medium"
                >
                    {i18next.t("vip.contactBtn")}
                </Link>
            </div>
        </div>
    </div>
  );
};

export default VipPage;
