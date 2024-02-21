import { ExploitIcon } from "@/assets/icons/ExploitIcon";
import { HightClassIcon } from "@/assets/icons/HightClassIcon";
import { InstructIcon } from "@/assets/icons/InstructIcon";
import { RankIcon } from "@/assets/icons/RankIcon";
import { RobotIcon } from "@/assets/icons/RobotIcon";
import { SaveIcon } from "@/assets/icons/SaveIcon";
import { ShareIcon } from "@/assets/icons/ShareIcon";
import { SupportIcon } from "@/assets/icons/SupportIcon";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-4 bg-[#121212] pb-8">
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium text-center">Hướng dẫn</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <SupportIcon />
          <span className="text-[#fff] font-medium text-center">
            Trung tâm trợ giúp
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <HightClassIcon />
          <span className="text-[#fff] font-medium text-center">Cao cấp</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <RankIcon />
          <span className="text-[#fff] font-medium text-center">Xếp hạng</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <ShareIcon />
          <span className="text-[#fff] font-medium text-center">
            Mời bạn bè
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <SaveIcon />
          <span className="text-[#fff] font-medium text-center">Tiết kiệm</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <RobotIcon />
          <span className="text-[#fff] font-medium text-center">
            Robot giao dịch
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2 cursor-pointer">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-start gap-1">
          <ExploitIcon />
          <span className="text-[#fff] font-medium text-center">
            Khai thác mỏ
          </span>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default FeatureSection;
