import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { BankIcon } from "@/assets/icons/BankIcon";
import { LockIcon } from "@/assets/icons/LockIcon";
import { MailIcon } from "@/assets/icons/MailIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { SecurityIcon } from "@/assets/icons/SecurityIcon";
import { UsernameIcon } from "@/assets/icons/UsernameIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { ProfileItem } from "./ProfileItem";

export const AuthenticatedProfile = () => {
  return (
    <div>
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
    </div>
  );
};
