"use client";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { GreenRiseIcon } from "@/assets/icons/GreenRiseIcon";
import { GoBack } from "@/components/layouts/GoBack";
import i18next from "i18next";
import { useState } from "react";
import "../../../../../i18n";
import { RedRiseIcon } from "@/assets/icons/RedRiseIcon";

const ColorPage = () => {
    const [isGreenRise, setIsGreenRise] = useState(true);

  return (
    <div className="min-h-screen overflow-auto bg-[#000000] text-white">
      <GoBack title={i18next.t("color.title")}/>
      <div className="py-1">
        <div
          onClick={() => setIsGreenRise(true)}
          className="flex items-center gap-6 px-4 py-2 cursor-pointer"
        >
          <GreenRiseIcon />
          <span className="flex-1 text-base">{i18next.t("color.greenRise")}</span>
          {isGreenRise && <CheckIcon />}
        </div>
        <div
          onClick={() => setIsGreenRise(false)}
          className="flex items-center gap-6 px-4 py-2 cursor-pointer"
        >
          <RedRiseIcon />
          <span className="flex-1 text-base">{i18next.t("color.redRise")}</span>
          {!isGreenRise && <CheckIcon />}
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
