import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { DisplayCurrencyIcon } from "@/assets/icons/DisplayCurrencyIcon";
import { LanguageSymbolIcon } from "@/assets/icons/LanguageSymbolIcon";
import { MultiArrowIcon } from "@/assets/icons/MultiArrowIcon";
import { TooltipIcon } from "@/assets/icons/TooltipIcon";
import { ProfileItem } from "./ProfileItem";

export const PublicProfile = () => {
  return (
    <div className="bg-[#1C1C1E] mt-2 rounded-sm">
      <ProfileItem
        icon={<LanguageSymbolIcon />}
        filedName={"Languages"}
        value={"English"}
        rightIcon={<ArrowRightIcon />}
      />
      <ProfileItem
        icon={<MultiArrowIcon />}
        filedName={"Colors of ups and downs"}
        value={"Green rise and red"}
        rightIcon={<ArrowRightIcon />}
      />
      <ProfileItem
        icon={<DisplayCurrencyIcon />}
        filedName={"Display Currency"}
        value={"USD"}
        rightIcon={<ArrowRightIcon />}
      />
      <ProfileItem
        icon={<TooltipIcon />}
        filedName={"About us"}
        rightIcon={<ArrowRightIcon />}
      />
    </div>
  );
};
