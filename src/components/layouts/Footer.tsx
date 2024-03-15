"use client";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";

export const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className="w-[1080px] max-w-full mx-auto py-[50px] border-t border-t-[#3A3F50]">
      <div className="grid grid-cols-1 lg:grid-cols-4 text-[#fff] gap-10 lg:gap-0 xs:px-5 lg:p-0">
        <div className="flex flex-col xs:items-center lg:items-start gap-3">
          <Logo />
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">
              Copyright © 2023 Crope.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Working hours:</span>
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">24/7</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Address</span>
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">
              174 Đường số 1, Bình Trị Đông B, Bình Tân
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Hit us up:</span>
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">0375026694</li>
            <li className="text-[#A9AFC3]  font-normal py-1">
              admin@greensoftware.asia
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
