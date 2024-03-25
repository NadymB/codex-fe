import { convertNumberToFormattedString } from "@/utils/converter";
import { t } from "i18next";
import { DateTime } from "luxon";

interface IOrderItem {
    isLong: boolean;
    price: string;
    amount: string;
    profit: string | number;
    timeoutInMinutes: number;
    endAt?: string;
    token:string
    id:string
  }
  export const OrderItemHistory = ({
    isLong,
    price,
    amount,
    profit,
    timeoutInMinutes,
    endAt,
    token,
    id
  }: IOrderItem) => {
  return (
    <div
      className="p-4 bg-[#1c1c1e] rounded"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
      }}
    >
      <div className="flex justify-between border-b border-[#0000001f] mb-4">
        <div className="flex flex-col gap-1 text-[#9ca3af]">
        <span className="text-[#9ca3af]">{token}/USDT</span>
          <span className="text-xs text-[#888]">{id}</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div
            className={`text-xs py-1 px-3 rounded text-white ${isLong ? "bg-[#55af72]" : "bg-[#dd5350]"}`}
          >
             {isLong
            ? `${t("tradePage.trade.bullishAMinute", { number: timeoutInMinutes })}`
            : `${t("tradePage.trade.bearishAMinute", { number: timeoutInMinutes })}`}
          </div>
          <span className="text-xs text-[#888]">{ DateTime.fromISO(endAt as string).toFormat("yyyy:MM:dd:HH:mm")}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#A3A3A3]">{t("tradePage.trade.orderPrice")}</span>
          <span
            className={`text-xs text-[#A3A3A3] `}
          >
            {price} USDT
          </span>
        </div>
        <div className="flex justify-between text-base text-white">
        <span className="text-sm text-[#888]">
            {t("tradePage.trade.amount")}
          </span>
          <span className="text-xs text-white">
            {convertNumberToFormattedString(String(amount))} USDT
          </span>
        </div>
        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#A3A3A3]">{t("tradePage.trade.profit")}</span>
          <span className="text-xs text-[#f7a600]">
            +{convertNumberToFormattedString(String(profit))} USDT
          </span>
        </div>
        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#A3A3A3]">Status</span>
          <span
            className={`text-base ${Number(profit)>0 ? "text-[#55af72]" : "text-[#dd5350]"}`}
          >
            {Number(profit)>0?t("tradePage.trade.win"):t("tradePage.trade.lose")}
          </span>
        </div>
      </div>
    </div>
  );
};