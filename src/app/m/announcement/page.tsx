"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { Slider, styled } from "@mui/material";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import React from "react";

const CssSlider = styled(Slider)({
  "& .MuiSlider-mark": {
    width: "12px",
    height: "12px",
    border: "3px solid #888888",
    borderRadius: "40px",
    background: "#000000",
    transform: "translate(-50%, -50%)",
  },
});
const AnnouncementPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen overflow-auto bg-[#000000]">
      <div className="sticky top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <BackIcon />
        </div>
        <span className="text-[#fff]">
          {t("announcementPage.title")}
        </span>
      </div>
    </div>
  );
};
export default AnnouncementPage;
