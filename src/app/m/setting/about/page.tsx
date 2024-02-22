"use client";
import { GoBack } from "@/components/layouts/GoBack";
import i18next from "i18next";
import "../../../../../i18n";
import Image from "next/image";
import { getStaticURL } from "@/utils/constants";
import { CheckUpdateIcon } from "@/assets/icons/ChecUpdateIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { toast } from "react-toastify";

const ColorPage = () => {

  return (
    <div className="min-h-screen overflow-auto bg-[#000000] text-white">
      <GoBack title={i18next.t("about.title")}/>
      <div className="">
        <div className="flex flex-col justify-center items-center pt-8 pb-4 bg-[#1c1c1e]">
            <div className="p-2 bg-[#10172a] mb-2">
                <Image 
                    src={`${getStaticURL()}/assets/images/about.png`}
                    width={100}
                    height={100}
                    alt="About"
                    className="w-[98px] h-[98px]"
                />
            </div>
            <h3 className="text-base text-white">{i18next.t("about.eUREX")}</h3>
            <span className="text-sm text-[#888]">{i18next.t("about.version")}</span>
        </div>
        <div 
            className="flex items-center gap-2 p-4 cursor-pointer"
            onClick={() => toast(`${i18next.t("about.upgradedLatestVersion")}`, {
                type: "success",
                position: "bottom-left",
                autoClose: 2000,
                closeOnClick: true,
            })}
        >
            <CheckUpdateIcon />
            <span className="flex-1 text-base text-white">{i18next.t("about.checkForUpdates")}</span>
            <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
