import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { BankIcon } from "@/assets/icons/BankIcon";
import { LockIcon } from "@/assets/icons/LockIcon";
import { MailIcon } from "@/assets/icons/MailIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { SecurityIcon } from "@/assets/icons/SecurityIcon";
import { UsernameIcon } from "@/assets/icons/UsernameIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { ProfileItem } from "./ProfileItem";
import i18next from "i18next";

export const AuthenticatedProfile = () => {
  return (
    <div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm">
        <ProfileItem
          icon={<UsernameIcon />}
          filedName={i18next.t("profilePage.username")}
          value={"tyha"}
        />
        <ProfileItem
          icon={<MailIcon />}
          filedName={i18next.t("profilePage.email")}
          value={"tyha@greensoftware.asia"}
        />
        <ProfileItem
          icon={<PhoneIcon />}
          filedName={i18next.t("profilePage.phoneNumber")}
          value={"Not set"}
        />
        <ProfileItem
          icon={<LockIcon />}
          filedName={i18next.t("profilePage.loginPassword")}
          rightIcon={<ArrowRightIcon />}
        />
        <ProfileItem
          icon={<SecurityIcon />}
          filedName={i18next.t("profilePage.securityCode")}
          rightIcon={<ArrowRightIcon />}
        />
      </div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm">
        <ProfileItem
          icon={<BankIcon />}
          filedName={i18next.t("profilePage.withdrawAccount")}
          rightIcon={<ArrowRightIcon />}
        />
        <ProfileItem
          icon={<VisaIcon />}
          filedName={i18next.t("profilePage.authentication")}
          value={"Not certified"}
          rightIcon={<ArrowRightIcon />}
        />
      </div>
    </div>
  );
};