"use client";

import { OptionProps } from "@/app/asset/page";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { DEFAULT_CURRENCY, OPTIONS_CURRENCY } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../../../i18n";

const CurrencySetting = () => {
  const [currency, setCurrency] = useState<OptionProps>(DEFAULT_CURRENCY);

  const handleChangeCurrency = (option: OptionProps) => {
    setCurrency({ label: option.label, value: option.value });
  };
  const router = useRouter();
  return (
    <div className="">
      <div
        className={`absolute flex flex-col gap-4 bg-black w-full h-screen top-0 right-0 z-10 mt-2 rounded-md shadow-lg focus:outline-none`}
      >
        <div className="sticky top-0 w-full bg-[#100f14] flex gap-1 items-center h-14 px-6">
          <button
            onClick={() => {
              router.back();
            }}
          >
            <ArrowRightIcon color="#fff" />
          </button>
          <h2 className="text-xl text-white mb-0">Hiển thị tiền tệ</h2>
        </div>
        <span className="text-base text-[#888] px-4">Thường được sử dụng</span>
        <div className="flex justify-center w-1/2 mx-4 px-4 py-[6px] border border-[#3d5afe80] hover:border-[#3d5afe] text-[#3d5afe] rounded cursor-pointer">
          {DEFAULT_CURRENCY.value.toUpperCase()}
        </div>
        <span className="text-base text-[#888] px-4">Hơn</span>
        <div className="grid grid-cols-2 gap-4 px-4">
          {OPTIONS_CURRENCY.map((option, i) => (
            <div
              key={i}
              onClick={() => handleChangeCurrency(option)}
              className={`flex gap-1 items-center justify-center px-4 py-2 text-sm ${currency.value === option.value ? "text-[#3d5afe] border border-[#3d5afe80] hover:border-[#3d5afe] bg-black" : "text-white bg-[#202125] hover:bg-[#121212]"} cursor-pointer rounded`}
            >
              {option.value.toUpperCase()}
              {currency.value === option.value && <CheckIcon />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CurrencySetting;
