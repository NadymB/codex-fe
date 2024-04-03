import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { BankIcon } from "@/assets/icons/BankIcon";
import { LockIcon } from "@/assets/icons/LockIcon";
import { MailIcon } from "@/assets/icons/MailIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { SecurityIcon } from "@/assets/icons/SecurityIcon";
import { UsernameIcon } from "@/assets/icons/UsernameIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { ProfileItem } from "./ProfileItem";
import { t } from "i18next";
import { useAuth } from "@/hooks/useAuth";
import { useMemo } from "react";

export const AuthenticatedProfile = () => {
  const { currentUser } = useAuth();

  const kycLevel = useMemo(() => {
    switch (currentUser?.kycLevel) {
      case 1:
        return t("authentication.lv1");
      case 2:
        return t("authentication.lv2");
      default:
        return t("profilePage.notCertified");
    }
  }, [currentUser?.kycLevel]);
  return (
    <div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm">
        <ProfileItem
          icon={<UsernameIcon />}
          filedName={t("profilePage.username")}
          value={currentUser?.username}
          link=""
        />
        <ProfileItem
          icon={<MailIcon />}
          filedName={t("profilePage.email")}
          value={currentUser?.email}
          link=""
        />
        <ProfileItem
          icon={<PhoneIcon />}
          filedName={t("profilePage.phoneNumber")}
          value={currentUser?.phoneNumber ?? t("profilePage.notSet")}
          link=""
        />
        <ProfileItem
          icon={<LockIcon />}
          filedName={t("profilePage.loginPassword")}
          rightIcon={<ArrowRightIcon />}
          link="/m/setting/password"
        />
        <ProfileItem
          icon={<SecurityIcon />}
          filedName={t("profilePage.securityCode")}
          rightIcon={<ArrowRightIcon />}
          link="/m/setting/password/security"
        />
      </div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm">
        <ProfileItem
          icon={<BankIcon />}
          filedName={t("profilePage.withdrawAccount")}
          rightIcon={<ArrowRightIcon />}
          link="/m/setting/payment"
        />
        <ProfileItem
          icon={<VisaIcon />}
          filedName={t("profilePage.authentication")}
          value={kycLevel}
          rightIcon={<ArrowRightIcon />}
          link="/m/setting/kyc"
        />
      </div>
    </div>
  );
};
