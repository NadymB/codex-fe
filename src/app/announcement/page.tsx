"use client"
import { BackIcon } from "@/assets/icons/BackIcon";
import i18next from "i18next";
import { useRouter } from "next/navigation";
import React from "react";

const AnnouncementPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen overflow-auto bg-[#000000]">
      <div className="sticky top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <BackIcon />
        </div>
        <span className="text-[#fff]">{i18next.t("announcementPage.title")}</span>
      </div>
    </div>
  );
};
export default AnnouncementPage