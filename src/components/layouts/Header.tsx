/* eslint-disable @next/next/no-img-element */
"use client";
import { AvatarIcon } from "@/assets/icons/AvatarIcon";
import { RingIcon } from "@/assets/icons/RingIcon";
import { useAuth } from "@/hooks/useAuth";
import { OptionsLanguage, getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import Link from "next/link";
import "../../../i18n";
import { useEffect, useState } from "react";
import { OptionsLanguageType } from "@/utils/type";

const Header = () => {
  const { currentUser } = useAuth();
  const [currentLang, setCurrentLang] = useState<OptionsLanguageType>();

  useEffect(() => {
    if (i18next.language) {
      const lang = OptionsLanguage.find(
        (lang) => lang.value === i18next.language
      );
      setCurrentLang(lang);
    }
  }, [i18next.language]);

  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50 px-4 py-4 flex justify-between  bg-[#100F14] ">
        <div className=" flex items-center gap-4 ">
          <Link href="/m/profile">
            <AvatarIcon />
            {/* <img
              className="w-[40px] h-[40px] rounded-[50%] bg-[green]"
              src={`/assets/images/user_avatar.svg`}
              alt=""
            /> */}
          </Link>
          <span className="text-[16px] font-bold text-white">
            {currentUser?.username}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="cursor-pointer">
            <RingIcon />
          </div>
          {currentLang && (
            <Link
              href={"/m/setting/locale"}
              className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-[#19181d]"
            >
              <img
                className="w-[20px]"
                src={`${getStaticURL()}${currentLang?.flag}`}
                alt=""
              />
              <span className="text-[14px] text-white">
                {currentLang?.label}
              </span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
