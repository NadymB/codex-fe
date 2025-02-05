import { TRANSACTION_STATUS } from "@/models/Transaction";
import { TRADE_TYPE } from "@/utils/constants";
import { convertNumberToFormattedString } from "@/utils/converter";
import { t } from "i18next";
import { DateTime } from "luxon";

interface IOrderItem {
  amount: number;
  fee: number;
  id: string;
  createdAt: string;
  status: string;
  action: TRADE_TYPE;
}
export const BillHistory = ({
  amount,
  fee,
  id,
  createdAt,
  status,
  action,
}: IOrderItem) => {
  const handleReturnTransactiionTitle = (type: string) => {
    switch (type) {
      case TRADE_TYPE.PLACE_ORDER:
        return t("tradePage.trade.title");

      case TRADE_TYPE.SETTLE_ORDER:
        return t("tradePage.trade.income");

      case TRADE_TYPE.TOPUP:
        return t("deposit.title");

      case TRADE_TYPE.DEDUCT:
        return t("tradePage.trade.deduction");

      case TRADE_TYPE.WITHDRAW:
        return t("withdraw.title");

      default:
        return "";
    }
  };
  const handleReturnTransactiionSubTitle = (type: string) => {
    switch (type) {
      case TRADE_TYPE.PLACE_ORDER:
        return (
          <div className="text-[#d32f2f] bg-[#d32f2f33] w-fit text-[12px] px-2 py-[2px] rounded">
            {t("tradePage.trade.expenditure")}
          </div>
        );

      case TRADE_TYPE.SETTLE_ORDER:
        return (
          <div className="text-[#55AF72] bg-[#55AF7233] w-fit text-[12px] px-2 py-[2px] rounded">
            {t("tradePage.trade.expenditure")}
          </div>
        );

      case TRADE_TYPE.TOPUP:
        return (
          <div className="text-[#55AF72] bg-[#55AF7233] w-fit text-[12px] px-2 py-[2px] rounded">
            {t("tradePage.trade.income")}
          </div>
        );

      case TRADE_TYPE.DEDUCT:
        return (
          <div className="text-[#d32f2f] bg-[#d32f2f33] w-fit text-[12px] px-2 py-[2px] rounded">
            {t("tradePage.trade.expenditure")}
          </div>
        );
      case TRADE_TYPE.WITHDRAW:
        return (
          <div className="text-[#d32f2f] bg-[#d32f2f33] w-fit text-[12px] px-2 py-[2px] rounded">
            {t("tradePage.trade.expenditure")}
          </div>
        );

      default:
        return "";
    }
  };

  const statusColor =
    status === TRANSACTION_STATUS.COMPLETED
      ? "text-[#00b42a]"
      : status === TRANSACTION_STATUS.PENDING
        ? "text-[#c9cdd4]"
        : status === TRANSACTION_STATUS.PAYMENT_PROCESSING
          ? "text-[#165dff]"
          : status === TRANSACTION_STATUS.AUDITING_IN_PROGRESS
            ? "text-[#ff7d00]"
            : "text-[#f53f3f]";
  const statusLabel =
    status === TRANSACTION_STATUS.COMPLETED
      ? t("bill.success")
      : status === TRANSACTION_STATUS.PENDING
        ? t("bill.pending")
        : status === TRANSACTION_STATUS.PAYMENT_PROCESSING
          ? t("bill.paying")
          : status === TRANSACTION_STATUS.AUDITING_IN_PROGRESS
            ? t("bill.auditing")
            : t("bill.fail");
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
            <span className="text-[#FFFF] text-[20px]">
              {handleReturnTransactiionTitle(action)}
            </span>
            {handleReturnTransactiionSubTitle(action)}
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
            {action === TRADE_TYPE.PLACE_ORDER ||
            action === TRADE_TYPE.DEDUCT ||
            action === TRADE_TYPE.WITHDRAW
              ? "-"
              : ""}
            {convertNumberToFormattedString(String(amount))} USDT
          </span>
        </div>
        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#888]">
            {t("tradePage.trade.handlingFee")}
          </span>
          <span className="text-xs text-white">
            {convertNumberToFormattedString(String(fee))} USDT
          </span>
        </div>

        <div className="flex justify-between text-base text-white">
          <span className="text-sm text-[#A3A3A3]">
            {t("tradePage.trade.status")}
          </span>
          <span className={`text-base ${statusColor}`}>{statusLabel}</span>
        </div>
      </div>
    </div>
  );
};
