"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { Slider, styled } from "@mui/material";
import i18next from "i18next";
import { useRouter } from "next/navigation";
import React from "react";

const CssSlider = styled(Slider)({
  "& .MuiSlider-mark": {
    width: '12px', 
    height: '12px', 
    border:'3px solid #888888',
    borderRadius:'40px',
    background:'#000000',
    transform: "translate(-50%, -50%)"
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
          {i18next.t("announcementPage.title")}
        </span>
      </div>
      <div className="grid grid-cols-12 p-4">
        <div className="col-span-7">
          <div className="flex gap-1 pb-3 overflow-auto">
             {/*  */}
             <div className="flex flex-col items-center overflow-hidden rounded-lg bg-[#1c1c1e] border border-[red] ">
              <span className="text-[12px] text-[#fff]">Lợi nhuận</span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">10%</h6>
              <div className="text-[14px] w-full text-center bg-[red] text-[#fff]">
                1 phút
              </div>
            </div>
            {/*  */}
             {/*  */}
             <div className="flex flex-col items-center overflow-hidden rounded-lg bg-[#1c1c1e] border border-[red] ">
              <span className="text-[12px] text-[#fff]">Lợi nhuận</span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">20%</h6>
              <div className="text-[14px] w-full text-center bg-[red] text-[#fff]">
                1 phút
              </div>
            </div>
            {/*  */}
             {/*  */}
             <div className="flex flex-col items-center overflow-hidden rounded-lg bg-[#1c1c1e] border border-[red] ">
              <span className="text-[12px] text-[#fff]">Lợi nhuận</span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">30%</h6>
              <div className="text-[14px] w-full text-center bg-[red] text-[#fff]">
                1 phút
              </div>
            </div>
            {/*  */}
             {/*  */}
             <div className="flex flex-col items-center overflow-hidden rounded-lg bg-[#1c1c1e] border border-[red] ">
              <span className="text-[12px] text-[#fff]">Lợi nhuận</span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">50%</h6>
              <div className="text-[14px] w-full text-center bg-[red] text-[#fff]">
                1 phút
              </div>
            </div>
            {/*  */}
             {/*  */}
             <div className="flex flex-col items-center overflow-hidden rounded-lg bg-[#1c1c1e] border border-[red] ">
              <span className="text-[12px] text-[#fff]">Lợi nhuận</span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">80%</h6>
              <div className="text-[14px] w-full text-center bg-[red] text-[#fff]">
                1 phút
              </div>
            </div>
            {/*  */}
             {/*  */}
             <div className="flex flex-col items-center overflow-hidden rounded-lg bg-[#1c1c1e] border border-[red] ">
              <span className="text-[12px] text-[#fff]">Lợi nhuận</span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">100%</h6>
              <div className="text-[14px] w-full text-center bg-[red] text-[#fff]">
                1 phút
              </div>
            </div>
            {/*  */}
            
          </div>
          <div className="px-3 mt-2">
          <CssSlider
        aria-label="Temperature"
        defaultValue={30}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={20}
        marks
        min={10}
        max={100}
      />
          </div>
        </div>
        <div className="col-span-5"></div>
      </div>
    </div>
  );
};
export default AnnouncementPage;
