/* eslint-disable @next/next/no-img-element */
"use client";
import { RingIcon } from "@/assets/icons/RingIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { getStaticURL } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  return (
    <>
      <div className="w-full px-4 py-4 flex justify-between  bg-[#100F14] ">
        <div className=" flex items-center gap-4 ">
          <img
            className="w-[40px] h-[40px] rounded-[50%] bg-[green]"
            src={`/assets/images/user_avatar.svg`}
            alt=""
          />
          <span className="text-[16px] font-bold text-white">newuser</span>
        </div>
        <div className="flex items-center gap-3">
          <RingIcon />
          <div className="flex items-center gap-2">
            <img
              className="w-[20px]"
              src={`/assets/images/flags/vn.svg`}
              alt=""
            />
            <span className="text-[14px] text-white">Việt Nam</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
