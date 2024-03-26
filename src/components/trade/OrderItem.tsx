import { convertNumberToFormattedString } from "@/utils/converter";
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
  endAt,
  token,
  balanceAtStart,
  balanceAtEnd,
}: IOrderItem) => {
  const calculateRemainingSeconds = () => {
    if (endAt) {
      const now: any = new Date();
      const end: any = new Date(endAt);
      return Math.floor((end - now) / 1000);
    }
    return 0;
  };

  const [remainingSeconds, setRemainingSeconds] = useState(
    calculateRemainingSeconds()
  );

  useEffect(() => {
    let animationFrameId: number;

    const updateCountdown = () => {
      const newRemainingSeconds = calculateRemainingSeconds();
      setRemainingSeconds(newRemainingSeconds);
      if (newRemainingSeconds > 0) {
        animationFrameId = requestAnimationFrame(updateCountdown);
      }
    };

    if (remainingSeconds > 0) {
      animationFrameId = requestAnimationFrame(updateCountdown);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [endAt]);

  return (
    <div className="flex flex-col gap-1 p-4 border-b border-[#ffffff1a]">
      <div className="flex justify-between">
        <div className="flex  gap-1 items-center">
          <div className="text-white text-base">
            {token}
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
        {remainingSeconds > 0 && (
          <div className="flex-1 flex justify-end gap-1 text-[#fff] mt-2">
            <div className="relative inline-flex">
              <CircularProgress
                variant="determinate"
                value={100 - (remainingSeconds / (timeoutInMinutes * 60)) * 100}
              />
              <div className="w-full h-10  absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                <span className="text-[12px]">{remainingSeconds}</span>
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
            {convertNumberToFormattedString(String(balanceAtStart))} USDT
          </span>
        </div>
        <div className="flex-1 flex items-center gap-1">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.balanceAtEnd")} :
          </span>
          <span className="text-xs text-white">
            {balanceAtEnd
              ? ` ${convertNumberToFormattedString(String(balanceAtEnd))} USDT`
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
            {convertNumberToFormattedString(String(amount))} USDT
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-sm text-[#888]">
            {remainingSeconds > 0
              ? t("tradePage.trade.expectedProfit")
              : t("tradePage.trade.profit")}
          </span>
          <span className="text-xs text-[#f7a600]">
            +{convertNumberToFormattedString(String(profit))} USDT
          </span>
        </div>
      </div>
    </div>
  );
};
