"use client";
import i18next from "i18next";
import React, { useEffect, useState } from "react";

export const TradingChartBar = () => {
  const [columnWidthLong, setColumnWidthLong] = useState([
    30, 50, 40, 60, 45, 20, 40,
  ]);
  const [columnWidthShort, setColumnWidthShort] = useState([
    30, 50, 40, 60, 45, 20, 40,
  ]);

  const generateRandomHeights = () => {
    const newWidthLong = columnWidthLong.map(() =>
      Math.floor(Math.random() * 100)
    );
    setColumnWidthLong(newWidthLong);
    const newWidthShort = columnWidthShort.map(() =>
      Math.floor(Math.random() * 100)
    );
    setColumnWidthShort(newWidthShort);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomHeights();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-[12px] text-[#fff] opacity-30">{i18next.t("tradePage.trade.price")}</span>
        <span className="text-[12px] text-[#fff] opacity-30">{i18next.t("tradePage.trade.amount")}</span>
      </div>
      {columnWidthLong.map((width, index) => (
        <div key={index} className="flex relative justify-between">
          <span className="text-[#55af72] text-[12px]">24.137</span>
          <span className="text-[#fff] text-[12px]">{((Math.random() * 1000)*width).toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
          <div
            style={{ width: `${width}%` }}
            className="absolute top-0 right-0 h-full  bg-[#55af7233] duration-300 ease-in-out"
          ></div>
        </div>
      ))}
      <div className="flex flex-col my-1">
        <span className="text-[#55af72] font-bold text-[16px]">24.137</span>
        <span className="text-[#fff] text-[12px]">≈ 88.62 AED</span>
      </div>
      {columnWidthShort.map((width, index) => (
        <div key={index} className="flex relative justify-between">
          <span className="text-[#dd5350] text-[12px]">24.137</span>
          <span className="text-[#fff] text-[12px]">{((Math.random() * 1000)*width).toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
          <div
            style={{ width: `${width}%` }}
            className="absolute top-0 right-0 h-full  bg-[#dd535033] duration-300 ease-in-out"
          ></div>
        </div>
      ))}
    </div>
  );
};
