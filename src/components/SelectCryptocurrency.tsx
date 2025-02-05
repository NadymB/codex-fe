/* eslint-disable @next/next/no-img-element */
"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import {
  COUNTRIES,
  Country,
  CURRENCIES,
  Currency
} from "@/utils/constants";
import { t } from "i18next";
import { useEffect, useRef, useState } from "react";

interface IProps {
  onBack: VoidFunction;
  onChange: (currency: any) => void;
}
const SelectCryptoCurrency = (props: IProps) => {
  const { onBack, onChange } = props;
  const headerRef = useRef<any>(null);
  const [searchValue, setSearchValue] = useState("");
  const [listCurrency, setListCurrency] = useState<Currency[]>([]);
  const [heightHeader, setHeightHeader] = useState(0);

  useEffect(() => {
    if (searchValue !== "") {
      const newListCounty = CURRENCIES.filter((item) =>
        item.value.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setListCurrency(newListCounty);
      return;
    }
    setListCurrency(CURRENCIES);
  }, [searchValue]);
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeightHeader(height);
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#1C1C1E]">
      <div
        ref={headerRef}
        className="sticky z-50 top-0 left-0 w-full px-4 py-4 bg-[#100f14]"
      >
        <div className=" flex items-center gap-2 mb-4">
          <div className="cursor-pointer" onClick={onBack}>
            <BackIcon />
          </div>
          <span className="text-[#fff]">
            {t("withdrawAccount.pleaseSelectCryptocurrencies")}
          </span>
        </div>
        <div className="relative w-fit px-2 flex items-center gap-2 bg-[#4C4B4F] rounded mt-4">
          <SearchIcon />
          <input
            className="p-2 text-[#fff] w-full bg-transparent border-none outline-none"
            type="text"
            name=""
            id=""
            placeholder={t("withdrawAccount.searchCryptocurrencies")}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div
        className="flex flex-col overflow-auto"
        style={{ height: `calc(100% - ${heightHeader}px)` }}
      >
        {listCurrency.map((currency, idx) => {
          return (
            <div
              key={idx}
              className="py-2 px-4 flex items-center justify-between cursor-pointer"
              onClick={() => onChange(currency)}
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={`https://www.cmechicagoil.com/static/token/${currency.value.toUpperCase()}.svg`}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#fff] text-[14px]">
                    {currency.acronym}
                  </span>
                </div>
              </div>
              <span className="text-[#fff]">{currency.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SelectCryptoCurrency;
