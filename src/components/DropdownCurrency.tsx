"use client";

import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { DEFAULT_CURRENCY, OPTIONS_CURRENCY } from "@/utils/constants";
import { FC, useEffect, useRef, useState } from "react";
import { OptionProps } from "@/app/asset/page";

interface IDropdownCurrency {
  isOpenCurrency: boolean;
  onClickCurrency: () => void;
  onChangeCurrency: (option: OptionProps) => void;
  onClickBack: () => void;
  currency: OptionProps;
}

export const DropdownCurrency = ({isOpenCurrency, onClickCurrency, onChangeCurrency, onClickBack, currency}: IDropdownCurrency) => {
  const ref = useRef(null);

  return (
    <div className="" ref={ref}>
      <div className="relative inline-block text-right">
        <button
          onClick={onClickCurrency}
          type="button"
          className="text-[#888] text-base"
        >
          {currency.label}

          <svg
            className="-mr-1 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute ${isOpenCurrency ? "" : "hidden"} flex flex-col gap-4 bg-black w-full h-screen top-0 right-0 z-10 mt-2 rounded-md shadow-lg focus:outline-none`}
      >
        <div className="sticky top-0 w-full bg-[#100f14] flex gap-1 items-center h-14 px-6">
            <button onClick={onClickBack}>
              <ArrowRightIcon color="#fff"/>
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
              onClick={() => onChangeCurrency(option)}
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
