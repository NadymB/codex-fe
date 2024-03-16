import { CloseIcon } from "@/assets/icons/CloseIcon";
import { t } from "i18next";

export const ConfirmPaymentModal = ({
  isLong,
  onClickCloseBtn,
}: {
  isLong?: boolean;
  onClickCloseBtn: () => void;
}) => {
  return (
    <div className="bg-[#1c1c1e] z-50 sticky bottom-0 left-0 right-0">
      <div className="flex justify-between py-2 px-4 border-b border-[#ffffff1a]">
        <span className="text-base text-white">{t("tradePage.trade.tradeConfirmation")}</span>
        <div onClick={onClickCloseBtn} className="cursor-pointer">
          <CloseIcon color="#676769" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between">
          <span className="text-sm text-[#888]">{t("tradePage.trade.tradingPair")}</span>
          <span className="text-sm text-white">AXS / USDT</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-[#888]">{t("tradePage.trade.settlementPeriod")}</span>
          <span className="text-sm text-white">1Phút</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-[#888]">{t("tradePage.trade.profitRatio")}</span>
          <span className="text-sm text-white">5%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-[#888]">{t("tradePage.trade.amount")}</span>
          <span className="text-sm text-white">45,000.00 USDT</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-[#888]">{t("tradePage.trade.expectedProfit")}</span>
          <span className="text-sm text-[#f7a600]">+2,250.00 USDT</span>
        </div>
        <button
          className={`${isLong ? "bg-[#55af72]" : "bg-[#dd5350]"} text-[15px] text-white mt-8 py-2 rounded`}
        >
          {isLong
            ? `${t("tradePage.long")}`
            : `${t("tradePage.short")}`}
        </button>
      </div>
    </div>
  );
};
