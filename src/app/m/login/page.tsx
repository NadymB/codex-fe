"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import LoginWithEmail from "@/components/Login/LoginWithEmail";
import Tabs from "@/components/Tabs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LoginPage = () => {
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
      name: "Email",
      content: (
        <>
          <LoginWithEmail />
        </>
      ),
    },
    {
      name: "Phone number",
      content: <></>,
    },
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
        <Link href={"/"}>
          <span className="text-[#3D5AFE]">Đăng ký</span>
        </Link>
      </div>
      <div className="p-4">
        <h4 className="text-[32px] text-[#fff]">Vui lòng đăng nhập!</h4>
        <div>Tab</div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default LoginPage;
