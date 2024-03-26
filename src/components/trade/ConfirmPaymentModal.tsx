import { CloseIcon } from "@/assets/icons/CloseIcon";
import { convertNumberToFormattedString } from "@/utils/converter";
import { BetType } from "@/utils/type";
import { t } from "i18next";
import { useEffect, useMemo, useRef } from "react";

export const ConfirmPaymentModal = ({
  isLong,
  onClickCloseBtn,
  onClickConfirmBtn,
  data,
  currency,
  slug,
}: {
  isLong?: boolean;
  data: BetType;
  onClickCloseBtn: () => void;
  onClickConfirmBtn: () => void;
  currency: string;
  slug: string;
}) => {
  const confirmRef = useRef(null);

  useEffect(() => {
    const menubar = document.getElementById("menu-bar");
    const ref = confirmRef.current as any;
    if(menubar && ref) {
      ref.style.bottom = `${menubar.offsetHeight}px`;
    }
  },[])

  return (
    <>
      <div
        className="w-screen h-screen z-40 fixed bottom-0 left-0 bg-zinc-400 bg-opacity-25 backdrop-blur-sm"
        onClick={onClickCloseBtn}
      />
      <div ref={confirmRef} className={`bg-[#1c1c1e] z-50 fixed bottom-0 left-0 right-0`}>
        <div className="flex justify-between py-2 px-4 border-b border-[#ffffff1a]">
          <span className="text-base text-white">
            {t("tradePage.trade.tradeConfirmation")}
          </span>
          <div onClick={onClickCloseBtn} className="cursor-pointer">
            <CloseIcon color="#676769" />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex justify-between">
            <span className="text-sm text-[#888]">
              {t("tradePage.trade.tradingPair")}
            </span>
            <span className="text-sm text-white">
              {slug} / {currency}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#888]">
              {t("tradePage.trade.settlementPeriod")}
            </span>
            <span className="text-sm text-white">
              {data.timeoutInMinutes}&nbsp;
              {t("tradePage.trade.minute")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#888]">
              {t("tradePage.trade.profitRatio")}
            </span>
            <span className="text-sm text-white">{data.betPercentage}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#888]">
              {t("tradePage.trade.amount")}
            </span>
            <span className="text-sm text-white">
              {convertNumberToFormattedString(String(data.amount))} USDT
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#888]">
              {t("tradePage.trade.expectedProfit")}
            </span>
            <span className="text-sm text-[#f7a600]">
              +
              {convertNumberToFormattedString(
                Number((data.amount * data.betPercentage) / 100).toFixed(2)
              )}{" "}
              USDT
            </span>
          </div>
          <button
            className={`${isLong ? "bg-[#55af72]" : "bg-[#dd5350]"} text-[15px] text-white mt-8 py-2 rounded`}
            onClick={onClickConfirmBtn}
          >
            {isLong ? `${t("tradePage.long")}` : `${t("tradePage.short")}`}
          </button>
        </div>
      </div>
    </>
  );
};
