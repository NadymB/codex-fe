import { InstructIcon } from "@/assets/icons/InstructIcon";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-4 bg-[#121212] pb-8">
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Hướng dẫn</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Trung tâm trợ giúp</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Cao cấp</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Xếp hạng</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Mời bạn bè</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Tiết kiệm</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Robot giao dịch</span>
        </div>
      </div>
      {/*  */}
      <div className="flex item-center justify-center pt-2">
        <div className="p-2 rounded hover:bg-[#1c1c1e] flex flex-col items-center justify-center gap-1">
          <InstructIcon />
          <span className="text-[#fff] font-medium">Khai thác mỏ</span>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default FeatureSection;
