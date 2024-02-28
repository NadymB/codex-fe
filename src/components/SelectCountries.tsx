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
import { useEffect, useState } from "react";

interface IProps {
  onBack: VoidFunction;
  onChange: (lang: any) => void;
}
const SelectCountries = (props: IProps) => {
  const { onBack, onChange } = props;
  const [searchValue, setSearchValue] = useState("");
  const [listCountry, setListCountry] = useState<Country[]>([]);
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

  return (
    <div className="min-h-screen overflow-auto bg-[#1C1C1E]">
      <div className="sticky top-0 left-0 w-full px-4 py-4  bg-[#1C1C1E] flex items-center gap-2">
        <div className="cursor-pointer" onClick={onBack}>
          <BackIcon />
        </div>
        <span className="text-[#fff]">{i18next.t("language")}</span>
      </div>
      <div className="px-4">
        <div className="relative w-fit px-2 flex items-center gap-2 bg-[#4C4B4F] rounded">
          <SearchIcon />
          <input
            className="p-2 text-[#fff] w-full bg-transparent border-none outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search country or region"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col">
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
