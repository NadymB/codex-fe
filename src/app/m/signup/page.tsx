"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import LoginWithEmail from "@/components/Login/LoginWithEmail";
import LoginWithPhoneNumber from "@/components/Login/LoginWithPhoneNumber";
import LoginWithUserName from "@/components/Login/LoginWithUserName";
import Tabs from "@/components/Tabs";
import SignupWithEmail from "@/components/signup/SignupWithEmail";
import SignupWithPhoneNumber from "@/components/signup/SignupWithPhoneNumber";
import i18next from "i18next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SignUpPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const tab = tabRefs.current[activeTab - 1];
    if (tab) {
      const { offsetLeft, offsetWidth } = tab;
      setTabPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);
  const tabs = [
    {
      name: `${i18next.t("authenticationPage.email")}`,
      content: (
        <>
          <SignupWithEmail />
        </>
      ),
    },
    {
      name: `${i18next.t("authenticationPage.phoneNumber")}`,
      content: <><SignupWithPhoneNumber/></>,
    }
  ];
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="min-h-screen overflow-auto bg-[#000000]">
      <div className="sticky top-0 left-0 w-full px-6 py-6  flex items-center justify-between gap-2">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <BackIcon />
        </div>
        <Link href={"/m/login"}>
          <span className="text-[#3D5AFE]">{i18next.t("authenticationPage.login")}</span>
        </Link>
      </div>
      <div className="p-4">
        <h4 className="text-[32px] text-[#fff]">{i18next.t("authenticationPage.signupTitle")}</h4>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default SignUpPage;
