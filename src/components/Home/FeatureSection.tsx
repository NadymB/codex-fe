import { ExploitIcon } from "@/assets/icons/ExploitIcon";
import { HightClassIcon } from "@/assets/icons/HightClassIcon";
import { InstructIcon } from "@/assets/icons/InstructIcon";
import { RankIcon } from "@/assets/icons/RankIcon";
import { RobotIcon } from "@/assets/icons/RobotIcon";
import { SaveIcon } from "@/assets/icons/SaveIcon";
import { ShareIcon } from "@/assets/icons/ShareIcon";
import { SupportIcon } from "@/assets/icons/SupportIcon";
import i18next from "i18next";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-4 bg-[#121212] pb-8">
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium text-center">{i18next.t("homePage.study")}</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <SupportIcon />
          <span className="text-[#fff] font-medium text-center">
          {i18next.t("homePage.helpCenter")}
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <HightClassIcon />
          <span className="text-[#fff] font-medium text-center">{i18next.t("homePage.vip")}</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <RankIcon />
          <span className="text-[#fff] font-medium text-center">{i18next.t("homePage.leaderBoard")}</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <ShareIcon />
          <span className="text-[#fff] font-medium text-center">
          {i18next.t("homePage.inviteFriends")}
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <SaveIcon />
          <span className="text-[#fff] font-medium text-center">{i18next.t("homePage.savings")}</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <RobotIcon />
          <span className="text-[#fff] font-medium text-center">
          {i18next.t("homePage.tradingRobot")}
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <ExploitIcon />
          <span className="text-[#fff] font-medium text-center">
          {i18next.t("homePage.mining")}
          </span>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default FeatureSection;
