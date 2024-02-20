/* eslint-disable @next/next/no-img-element */
"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import React, { useEffect, useState } from "react";
import i18next, { changeLanguage } from "i18next";
import { OptionsLanguage, getStaticURL } from "@/utils/constants";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const LocaleSettingPage = () => {
  const [currentLang, setLangCurrentLang] = useState(i18next.language);
  const router = useRouter()
  return (
    <div className="min-h-screen overflow-auto bg-[#000000]">
      <div className="sticky top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2">
        <div className="cursor-pointer" onClick={()=>router.back()}><BackIcon /></div>
        <span className="text-[#fff]">Ngôn Ngữ</span>
      </div>
      <div className="flex flex-col">
        {OptionsLanguage.map((lang, idx) => {
          return (
            <div
              key={idx}
              className="py-5 px-4 flex items-center justify-between cursor-pointer"
              onClick={() => {
                changeLanguage(lang.value) 
                setLangCurrentLang(lang.value);
              }}
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-[50px]"
                  src={`${getStaticURL()}${lang.flag}`}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#fff] text-[14px]">{lang.label}</span>
                  <span className="text-[#888888] text-[14px]">
                    {lang.International}
                  </span>
                </div>
              </div>
              {currentLang === lang.value && <CheckIcon />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LocaleSettingPage;
