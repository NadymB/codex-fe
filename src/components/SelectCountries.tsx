/* eslint-disable @next/next/no-img-element */
"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import {
  COUNTRIES,
  Country,
  OptionsLanguage,
  getStaticURL,
} from "@/utils/constants";
import i18next, { changeLanguage } from "i18next";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface IProps {
  onBack: VoidFunction;
  onChange: (lang: any) => void;
}
const SelectCountries = (props: IProps) => {
  const { onBack, onChange } = props;
  const headerRef = useRef<any>(null);
  const [searchValue, setSearchValue] = useState("");
  const [listCountry, setListCountry] = useState<Country[]>([]);
  const [heightHeader, setHeightHeader] = useState(0);

  
  useEffect(() => {
    if (searchValue !== "") {
      const newListCounty = COUNTRIES.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setListCountry(newListCounty);
      return;
    }
    setListCountry(COUNTRIES);
  }, [searchValue]);
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeightHeader(height);
    }
  }, []);
  return (
    <div className="min-screen bg-[#1C1C1E]">
      <div ref={headerRef} className="sticky top-0 left-0 w-full px-4 py-4 bg-[#100f14]">
        <div className=" flex items-center gap-2 mb-4">
          <div className="cursor-pointer" onClick={onBack}>
            <BackIcon />
          </div>
          <span className="text-[#fff]">{i18next.t("withdrawAccount.pleaseSelectCryptocurrencies")}</span>
        </div>
        <div className="relative w-fit px-2 flex items-center gap-2 bg-[#4C4B4F] rounded mt-4">
          <SearchIcon />
          <input
            className="p-2 text-[#fff] w-full bg-transparent border-none outline-none"
            type="text"
            name=""
            id=""
            placeholder={i18next.t("withdrawAccount.searchCountryOrRegion")}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col overflow-auto" style={{height: `calc(100% - ${heightHeader}px)`,}}>
        {listCountry.map((country, idx) => {
          return (
            <div
              key={idx}
              className="py-2 px-4 flex items-center justify-between cursor-pointer"
              onClick={() => onChange(country)}
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#fff] text-[14px]">
                    {country.label}
                  </span>
                </div>
              </div>
              <span className="text-[#fff]">{country.phone}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SelectCountries;
