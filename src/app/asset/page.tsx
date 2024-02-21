"use client";

import { HideIcon } from "@/assets/icons/HideIcon";
import { ShowIcon } from "@/assets/icons/ShowIcon";
import { AccountItem } from "@/components/AccountItem";
import { AssetItem } from "@/components/AssetItem";
import { Dropdown } from "@/components/Dropdown";
import { DropdownCurrency } from "@/components/DropdownCurrency";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ACCOUNT_LIST, ASSET_LIST, DEFAULT_CURRENCY, OPTIONS_CURRENCY, getStaticURL } from "@/utils/constants";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export type OptionProps = {
  label: string; 
  value: string
}

const AssetPage = () => {
  const [isShow, setIsShow] = useState(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currency, setCurrency] = useState<OptionProps>(DEFAULT_CURRENCY);
  const ref = useRef(null);

  const handleChangeCurrency = (option: OptionProps) => {
    setCurrency({label: option.label, value: option.value})
    setIsOpen(false);
  };

  ClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <div className="flex flex-col gap-4 text-white p-4">
        <div>
          <h2 className="text-xl text-white">Tài sản của tôi</h2>
          <div className="flex flex-col gap-2">
            <div className="p-4 bg-[#1c1c1e] rounded">
              <span className="text-sm text-[#888]">Tổng tài sản</span>
              <div className="flex gap-3 mt-2 mb-1">
                <span className="text-white text-[32px]">{isShow ? "0.00" : "*****"}</span>
                <span className="self-end text-white text-base">USDT</span>
                <button onClick={() => setIsShow(!isShow)}>
                  {isShow ? <ShowIcon /> : <HideIcon />}
                </button>
              </div>
              <DropdownCurrency currency={currency} isOpenCurrency={isOpen} onClickCurrency={() => setIsOpen(!isOpen)} onChangeCurrency={(option) => handleChangeCurrency(option)} onClickBack={() => setIsOpen(false)}/>
              <div className="text-base text-white pt-2">
                Lợi nhuận ngày nay: &nbsp;
                <span className="text-[#55af72]">0.00 (0%)</span>&nbsp;
                USDT
              </div>
              <Image 
                src={`${getStaticURL()}/assets/images/line_image.svg`}
                alt="Line"
                height={100}
                width={100}
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              {ASSET_LIST.map((item, index) => (
                <AssetItem key={index} label={item.label} url={item.link} pathIcon={item.path} widthIcon={item.width} heightIcon={item.height} viewBox={item.viewBox}/>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-base text-white">Tài khoản của tôi</h3>
          <div>
            {ACCOUNT_LIST.map((item, index) => (
              <AccountItem key={index} label={item.label} amount={item.amount}/>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

const ClickOutside = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default AssetPage;
