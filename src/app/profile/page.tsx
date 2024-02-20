"use client";

import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { BankIcon } from "@/assets/icons/BankIcon";
import { DisplayCurrencyIcon } from "@/assets/icons/DisplayCurrencyIcon";
import { LanguageSymbolIcon } from "@/assets/icons/LanguageSymbolIcon";
import { LockIcon } from "@/assets/icons/LockIcon";
import { MailIcon } from "@/assets/icons/MailIcon";
import { MultiArrowIcon } from "@/assets/icons/MultiArrowIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { SecurityIcon } from "@/assets/icons/SecurityIcon";
import { TooltipIcon } from "@/assets/icons/TooltipIcon";
import { UsernameIcon } from "@/assets/icons/UsernameIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { ProfileItem } from "@/components/profile/ProfileItem";
import { useRouter } from "next/navigation";

const MarketPage = () => {
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center gap-2 bg-[#110F15] p-4">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </div>
        <div className="text-white text-xl font-semibold">Personal center</div>
      </div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm">
        <ProfileItem
          icon={<UsernameIcon />}
          filedName={"Username"}
          value={"tyha"}
        />
        <ProfileItem
          icon={<MailIcon />}
          filedName={"Username"}
          value={"tyha"}
        />
        <ProfileItem
          icon={<PhoneIcon />}
          filedName={"Phone number"}
          value={"Not set"}
        />
        <ProfileItem
          icon={<LockIcon />}
          filedName={"Login password"}
          rightIcon={<ArrowRightIcon />}
        />
        <ProfileItem
          icon={<SecurityIcon />}
          filedName={"Username"}
          rightIcon={<ArrowRightIcon />}
        />
      </div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm">
        <ProfileItem
          icon={<BankIcon />}
          filedName={"Withdrawal account"}
          rightIcon={<ArrowRightIcon />}
        />
        <ProfileItem
          icon={<VisaIcon />}
          filedName={"Authentication"}
          value={"Not certified"}
          rightIcon={<ArrowRightIcon />}
        />
      </div>
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
      <div className="p-5">
        <button className="py-2 w-full text-white bg-red-600 rounded-md text-[13px] font-semibold">
          Quit
        </button>
      </div>
    </div>
  );
};

export default MarketPage;
