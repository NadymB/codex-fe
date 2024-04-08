"use client";
import { countdownInSeconds } from "@/utils";
import { TRADE_TYPE_CODE } from "@/utils/constants";
import {
  convertNumberToFormattedString,
  removeTrailingZeros,
} from "@/utils/converter";
import { CircularProgress } from "@mui/material";
import { t } from "i18next";
import { useEffect, useState } from "react";
interface IOrderItem {
  isLong: boolean;
  price: string;
  amount: string;
  profit: string | number;
  timeoutInMinutes: number;
  endAt?: string;
  countDownTime?: string;
  token: string;
  balanceAtStart: string;
  balanceAtEnd?: number;
}
export const OrderItem = ({
  isLong,
  price,
  amount,
  profit,
  timeoutInMinutes,
  countDownTime,
  endAt,
  token,
  balanceAtStart,
  balanceAtEnd,
}: IOrderItem) => {
  const [remainingSeconds, setRemainingSeconds] = useState(() => {
    if (endAt && countDownTime) {
      return countdownInSeconds(countDownTime, endAt);
    }
    return 0;
  });

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setRemainingSeconds((time) => time - 1);
    }, 1000);

    return () => clearInterval(intervalTime);
  }, [endAt, countDownTime]);

  return (
    <div className="flex flex-col gap-1 p-4 border-b border-[#ffffff1a]">
      <div className="flex justify-between">
        <div className="flex  gap-1 items-center">
          <div className="text-white text-base">
            {TRADE_TYPE_CODE[token as keyof typeof TRADE_TYPE_CODE] ?? token}
            <span className="text-[#9ca3af]">/USDT</span>
          </div>
          <div
            className={`py-1 px-3 text-xs text-white rounded ${isLong ? "bg-[#55af72]" : "bg-[#dd5350]"}`}
          >
            {isLong
              ? `${t("tradePage.trade.bullishAMinute", { number: timeoutInMinutes })}`
              : `${t("tradePage.trade.bearishAMinute", { number: timeoutInMinutes })}`}
          </div>
        </div>
        {!!remainingSeconds && (
          <div className="flex-1 flex justify-end gap-1 text-[#fff] mt-2">
            <div className="relative inline-flex">
              <CircularProgress
                variant="determinate"
                value={100 - (remainingSeconds / (timeoutInMinutes * 60)) * 100}
              />
              <div className="w-full h-10  absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                <div className="text-[12px]">{remainingSeconds}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-1">
        <div className="flex-1 flex items-center  gap-1 ">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.balanceAtStart")} :
          </span>
          <span className="text-xs text-white">
            {convertNumberToFormattedString(
              removeTrailingZeros(Number(balanceAtStart).toFixed(8))
            )}{" "}
            USDT
          </span>
        </div>
        <div className="flex-1 flex items-center gap-1">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.balanceAtEnd")} :
          </span>
          <span className="text-xs text-white">
            {balanceAtEnd
              ? ` ${convertNumberToFormattedString(
                  removeTrailingZeros(Number(balanceAtEnd).toFixed(8))
                )} USDT`
              : t("tradePage.trade.pending")}
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.orderPrice")}
          </span>
          <span
            className={`text-xs ${isLong ? "text-[#55af72]" : "text-[#dd5350]"}`}
          >
            {price}
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.amount")}
          </span>
          <span className="text-xs text-white">
            {convertNumberToFormattedString(
              removeTrailingZeros(Number(amount).toFixed(8))
            )}{" "}
            USDT
          </span>
        </div>
        <div className="flex-1 flex flex-col items-end gap-1">
          <span className="text-sm text-[#888]">
            {remainingSeconds > 0
              ? t("tradePage.trade.expectedProfit")
              : t("tradePage.trade.profit")}
          </span>
          <span className="text-xs text-[#f7a600]">
            +
            {convertNumberToFormattedString(
              removeTrailingZeros(Number(profit).toFixed(8))
            )}{" "}
            USDT
          </span>
        </div>
      </div>
    </div>
  );
};
