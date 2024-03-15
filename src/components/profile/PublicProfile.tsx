import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { DisplayCurrencyIcon } from "@/assets/icons/DisplayCurrencyIcon";
import { LanguageSymbolIcon } from "@/assets/icons/LanguageSymbolIcon";
import { MultiArrowIcon } from "@/assets/icons/MultiArrowIcon";
import { TooltipIcon } from "@/assets/icons/TooltipIcon";
import { ProfileItem } from "./ProfileItem";
import i18next, { t } from "i18next";
import { useState } from "react";
import { OptionsLanguage } from "@/utils/constants";

export const PublicProfile = () => {
  const [currentLang, setCurrentLang] = useState(
    OptionsLanguage.find((lang) => lang.value === i18next.language)
  );
  return (
    <div className="bg-[#1C1C1E] mt-2 rounded-sm">
      <ProfileItem
        icon={<LanguageSymbolIcon />}
        filedName={t("profilePage.language")}
        value={currentLang?.label}
        rightIcon={<ArrowRightIcon />}
        link="/m/setting/locale"
      />
      <ProfileItem
        icon={<MultiArrowIcon />}
        filedName={t("profilePage.colorsOfUpsAndDowns")}
        value={t("profilePage.greenRiseAndRed")}
        rightIcon={<ArrowRightIcon />}
        link="/m/setting/color"
      />
      <ProfileItem
        icon={<DisplayCurrencyIcon />}
        filedName={t("profilePage.displayCurrency")}
        value={"USD"}
        rightIcon={<ArrowRightIcon />}
        link="/m/setting/currency"
      />
      <ProfileItem
        icon={<TooltipIcon />}
        filedName={t("profilePage.aboutUs")}
        rightIcon={<ArrowRightIcon />}
        link="/m/setting/about"
      />
    </div>
  );
};
