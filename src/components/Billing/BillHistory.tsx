import { convertNumberToFormattedString } from "@/utils/converter";
import { t } from "i18next";
import { DateTime } from "luxon";

interface IOrderItem {
  amount: string;
  id: string;
  createdAt: string;
  isSuccess: boolean;
}
export const BillHistory = ({
  amount,
  id,
  createdAt,
  isSuccess,
}: IOrderItem) => {
  return (
    <div
      className="p-4 bg-[#1c1c1e] rounded"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
      }}
    >
      <div className="flex justify-between border-b border-b-[#FFFFFF1A] pb-2 mb-4">
        <div className=" w-full flex flex-col gap-1 text-[#9ca3af]">
          <div className="flex items-center gap-2">
            <span className="text-[#FFFF] text-[20px]">Trade</span>
            <div className="text-[#d32f2f] bg-[#d32f2f33] w-fit text-[12px] px-2 py-[2px] rounded">
              Expanditure
            </div>
            <div className="text-[#55AF72] bg-[#55AF7233] w-fit text-[12px] px-2 py-[2px] rounded">
              Income
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-xs text-[#888]">{id}</span>
            <span className="text-xs text-[#888]">
              {DateTime.fromISO(createdAt as string).toFormat(
                "yyyy-MM-dd HH:mm"
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.amount")}
          </span>
          <span className="text-xs text-white">
            {convertNumberToFormattedString(String(amount))} USDT
          </span>
        </div>
        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.fee")}
          </span>
          <span className="text-xs text-white">
            {convertNumberToFormattedString(String(amount))} USDT
          </span>
        </div>

        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#A3A3A3]">Status</span>
          <span
            className={`text-base ${isSuccess ? "text-[#55af72]" : "text-[#dd5350]"}`}
          >
            {isSuccess ? t("tradePage.trade.win") : t("tradePage.trade.lose")}
          </span>
        </div>
      </div>
    </div>
  );
};
