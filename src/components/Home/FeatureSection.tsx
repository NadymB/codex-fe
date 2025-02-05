import { ExploitIcon } from "@/assets/icons/ExploitIcon";
import { HightClassIcon } from "@/assets/icons/HightClassIcon";
import { InstructIcon } from "@/assets/icons/InstructIcon";
import { RankIcon } from "@/assets/icons/RankIcon";
import { RobotIcon } from "@/assets/icons/RobotIcon";
import { SaveIcon } from "@/assets/icons/SaveIcon";
import { ShareIcon } from "@/assets/icons/ShareIcon";
import { SupportIcon } from "@/assets/icons/SupportIcon";
import { t } from "i18next";
import Link from "next/link";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-4 bg-[#121212] pb-8">
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/m/learn"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <InstructIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.study")}
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/m/help-center"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <SupportIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.helpCenter")}
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/m/vip"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <HightClassIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.vip")}
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/m/leaderboard"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <RankIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.leaderBoard")}
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/m/invite-friend"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <ShareIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.inviteFriends")}
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/m/savings"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <SaveIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.savings")}
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/coming-soon"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <RobotIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.tradingRobot")}
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <Link
          href={"/coming-soon"}
          className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1"
        >
          <ExploitIcon />
          <span className="text-[#fff] font-medium text-center">
            {t("homePage.mining")}
          </span>
        </Link>
      </div>
      {/*  */}
    </div>
  );
};
export default FeatureSection;
