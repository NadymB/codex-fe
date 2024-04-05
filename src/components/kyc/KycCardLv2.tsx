import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { t } from "i18next";
import { useState } from "react";
import { KycIntroduceLv2 } from "./KycIntroduceLv2";
import { KycStatus } from "./KycStatus";
import { AddressIcon } from "@/assets/icons/AddressIcon";

export const KycCardLv2 = ({
  kyc,
  disabled,
}: {
  kyc: any;
  disabled: boolean;
}) => {
  const [opentIntroduce, setOpenIntroduce] = useState(false);
  return (
    <>
      <div className="p-4 bg-[#1c1c1e] rounded">
        <h2 className="text-xl text-white pb-8 border-b border-[#ffffff1a] flex items-center justify-between">
          {t("authentication.lv2")}
          <div className="flex items-center gap-2">
            <KycStatus status={kyc?.status} />
          </div>
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white">
              {t("authentication.rightsAndInterests")}
            </span>
            <div className="flex justify-between">
              <span className="text-sm text-[#888]">
                {t("authentication.fiatCurrencyDeposit")}
              </span>
              <span className="text-sm text-white">
                {t("authentication.unlimited")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#888]">
                {t("authentication.withdrawalAmount")}
              </span>
              <span className="text-sm text-white">
                {t("authentication.unlimited")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#888]">
                {t("authentication.other")}
              </span>
              <span className="text-sm text-white">
                {t("authentication.moreTradingProducts")}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-base text-white">
              <AddressIcon />
              <span>{t(`authentication.proofOfAddress`)}</span>
            </div>
          </div>
          {kyc?.isCanEdit === false ?"" : (
            <button
              disabled={disabled}
              onClick={() => setOpenIntroduce(true)}
              className={`py-[6px] mt-2 px-4 disabled:bg-[#343338] bg-[#3d5afe] disabled:hover:bg-[#343338] disabled:opacity-50 hover:bg-[#2a3db0] rounded text-center text-white text-sm font-medium`}
            >
              {disabled
                ? t(`authentication.certifyBtnLv2`)
                : t(`authentication.certifyBtnLv1`)}
            </button>
          )}
        </div>
      </div>
      <div
        className={`fixed ${opentIntroduce ? "top-0" : "top-[100%]"} left-0 z-40 w-full h-screen overflow-auto duration-200 ease-in-out`}
      >
        <KycIntroduceLv2 onClose={() => setOpenIntroduce(false)} />
      </div>
    </>
  );
};
