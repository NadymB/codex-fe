/* eslint-disable @next/next/no-img-element */
"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import { Button } from "@mui/material";
import { t } from "i18next";
import Link from "next/link";

const KycPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={t("kycPage.title")} />
      <div className="flex flex-col  px-4 my-4">
        <div className="py-[6px] px-4 flex items-center bg-[#fff4e5] rounded mb-4">
          <div className="py-2 text-[#663c00] ">
            {t("kycPage.warning")}
          </div>
        </div>
        <div>
          <div className="text-[#fff]">{t("kycPage.uploadRequirementsTitle")}</div>
          <div className="pl-[40px] my-4">
            <li className="text-[#888888]">
              <span>
                {t("kycPage.uploadRequirementsContent")}
              </span>
            </li>
            <li className="text-[#888888]">
              <span>{t("kycPage.uploadRequirementsSubContent")}</span>
            </li>
          </div>
          <img
            className="w-full"
            src={`${getStaticURL()}/assets/images/id.png`}
            alt=""
          />
        </div>
        {/*  */}
        <div>
          <div className="text-[#fff]">{t("kycPage.guidance")}</div>
          <div className="pl-[40px] my-4">
            <li className="text-[#888888]">
              <span>
                {t("kycPage.guidanceContent")}
              </span>
            </li>
            <li className="text-[#888888]">
              <span>
                {t("kycPage.guidanceSubContent")}
              </span>
            </li>
          </div>
          <img
            className="w-full"
            src={`${getStaticURL()}/assets/images/selfie.webp`}
            alt=""
          />
        </div>
        <div className="w-full mt-6">
          <Button
            sx={{ padding: 0, textTransform: "none" }}
            className="p-0 w-full overflow-hidden normal-case"
            variant="contained"
          >
            <Link
              href={"/m/setting/payment/create"}
              className=" flex justify-center w-full px-6 py-2  bg-[#3d5afe]  text-white text-sm text-center text-medium rounded"
            >
              {t("kycPage.nextStep")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KycPage;
