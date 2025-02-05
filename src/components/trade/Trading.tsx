/* eslint-disable @next/next/no-img-element */
"use client";
import { FavoriteIcon } from "@/assets/icons/FavoriteIcon";
import {
  BET_PERCENTAGE,
  CRYPTOCURRENCY_CODE,
  PRICE_TYPE,
  getStaticURL,
} from "@/utils/constants";
import { Button, InputAdornment, Slide, Slider, styled } from "@mui/material";
import { t } from "i18next";
import { FC, useEffect, useRef, useState } from "react";
import { InputCustom } from "../InputCustom";
import { TradingChartBar } from "./TradingChartBar";
import { useAuth } from "@/hooks/useAuth";
import { convertNumberToFormattedString } from "@/utils/converter";
import { BetType } from "@/utils/type";
import { onToast } from "@/hooks/useToast";

const CssSlider = styled(Slider)({
  "& .MuiSlider-mark": {
    width: "14px",
    height: "14px",
    border: "3px solid #888888",
    borderRadius: "40px",
    background: "#000000",
    transform: "translate(-50%, -50%)",
  },
  "& .MuiSlider-mark.MuiSlider-markActive": {
    borderColor: "#3D5AFE",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#888888",
  },
  "& .MuiSlider-track": {
    border: "1px solid #3D5AFE",
    background: "#3D5AFE",
  },
});
const marks = [
  { value: 0 },
  { value: 20},
  { value: 40 },
  { value: 60},
  { value: 80},
  { value: 100},
];

function valueLabelFormat(value: number) {
  return `${value}%`;
}

interface Props {
  isRefresh: boolean;
  token: string;
  currency: string;
  priceToken: number;

  onBet: ({
    amount,
    pairType,
    pairName,
    betPercentage,
    timeoutInMinutes,
    position,
  }: BetType) => void;
}

const Trading: FC<Props> = ({
  token,
  currency,
  isRefresh,
  priceToken,
  onBet,
}) => {
  const [percentIsSelected, setPercentIsSelected] = useState(BET_PERCENTAGE[0]);
  const { fetchUserBalance, currentBalance, currentUser } = useAuth();
  const [amount, setAmount] = useState<number>(0);
  const [markPercent, setMarkPercent] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentUser) {
      fetchUserBalance();
    }
  }, [currentUser]);

  useEffect(() => {
    setAmount(0);
    const ref = inputRef.current as any;
    ref.value = 0;
    setMarkPercent(0);
    setPercentIsSelected(BET_PERCENTAGE[0]);
  }, [isRefresh]);

  return (
    <div>
      <div className="py-3 px-4">
        <div className="flex flex-row space-x-1 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8"
              src={`${getStaticURL()}/assets/images/tokens/${token}.svg`}
              alt=""
            />
            <div className="text-[16px]">
              <span className="text-white">
                {token} / {currency}
              </span>
              <span className="text-green-600 bg-[#55AF7233] px-2 py-1 rounded ml-1 text-[14px]">
                +0.44%
              </span>
            </div>
          </div>
          <div>
            <FavoriteIcon />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 p-4">
        <div className="col-span-7">
          <div className="flex gap-2 pb-3 overflow-auto">
            {BET_PERCENTAGE.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center rounded-lg bg-[#1c1c1e] border-2 cursor-pointer ${percentIsSelected.betPercentage === item.betPercentage ? "border-[#3D5AFE]" : "border-transparent"}`}
                onClick={() => setPercentIsSelected(item)}
              >
                <span className="text-[12px] text-[#fff] whitespace-nowrap">
                  {" "}
                  {t("tradePage.trade.profit")}
                </span>
                <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">
                  {item.betPercentage}%
                </h6>
                <div className="text-[14px] w-full text-center bg-[#3D5AFE] rounded-b-lg text-[#fff] whitespace-nowrap">
                  {item.timeoutInMinutes} {t("tradePage.trade.minute")}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[12px] text-[#888888]">
              {t("tradePage.trade.balance")}
            </span>
            <span className="text-[12px] text-[#fff]">
              {currentBalance > 0
                ? convertNumberToFormattedString(String(currentBalance))
                : 0}{" "}
              USDT
            </span>
          </div>
          <div className="px-3 mt-2 ">
            <CssSlider
              defaultValue={0}
              value={markPercent}
              step={null}
              marks={marks}
              min={0}
              onChange={(e) => {
                const data = e.target as any;
                const amount = (Number(data.value) / 100) * currentBalance;
                setAmount(Number(amount));
                setMarkPercent(data.value);
                const ref = inputRef.current as any;
                ref.value = amount;
              }}
              max={100}
              valueLabelFormat={valueLabelFormat}
              valueLabelDisplay="auto"
            />
          </div>

          <div className=" mt-2 flex flex-col">
            <div className="bg-[#1D1C22] relative">
              <input
                type="number"
                ref={inputRef}
                className="w-full text-white text-lg rounded-sm p-2 bg-transparent border-none outline-none focus:outline-1 focus:outline-blue-600 "
                defaultValue={0}
                onChange={(e) => {
                  if (Number(e.target.value) > 0) {
                    setAmount(Number(e.target.value));
                    setMarkPercent(
                      (Number(e.target.value) / currentBalance) * 100
                    );
                  } else {
                    setAmount(0);
                  }
                }}
                placeholder="0.00"
                min={0}
                max={currentBalance}
                step={0.001}
              />
              <div className="text-gray-400 font-thin absolute right-2 top-1/2 -translate-y-1/2">
                USDT
              </div>
            </div>
            <span className="text-[#fff] mt-2">≈{amount} USD</span>
          </div>
          <Button
            sx={{ padding: 0, marginTop: "8px", textTransform: "none" }}
            className="w-full overflow-hidden"
            variant="contained"
            onClick={() => {
              if (amount <= 0) {
                onToast(t("amountMustBeGreaterThan0"), "error");
                return;
              }
              if (amount > currentBalance) {
                onToast(t("amountMustBeLessThanOrEqualToBalance"), "error");
                return;
              }
              onBet({
                amount,
                betPercentage: percentIsSelected.betPercentage,
                pairName: `${token + currency}`,
                pairType: PRICE_TYPE.CRYPTO,
                position: "long",
                timeoutInMinutes: percentIsSelected.timeoutInMinutes,
              });
            }}
          >
            <div className="w-full bg-[#55af72] py-[6px] px-4 ">
              {t("tradePage.long")}
            </div>
          </Button>
          <Button
            sx={{ padding: 0, marginTop: "8px", textTransform: "none" }}
            className="w-full overflow-hidden"
            variant="contained"
            onClick={() => {
              if (amount <= 0) {
                onToast(t("amountMustBeGreaterThan0"), "error");
                return;
              }
              if (amount > currentBalance) {
                onToast(t("amountMustBeLessThanOrEqualToBalance"), "error");
                return;
              }
              onBet({
                amount,
                betPercentage: percentIsSelected.betPercentage,
                pairName: CRYPTOCURRENCY_CODE.BNBUSDT,
                pairType: PRICE_TYPE.CRYPTO,
                position: "short",
                timeoutInMinutes: percentIsSelected.timeoutInMinutes,
              });
            }}
          >
            <div className="w-full bg-[#dd5350] py-[6px] px-4 ">
              {t("tradePage.short")}
            </div>
          </Button>
        </div>
        <div className="col-span-5 ml-4">
          <TradingChartBar
            priceToken={priceToken > 0 ? priceToken : Math.random() * 10}
          />
        </div>
      </div>
    </div>
  );
};
export default Trading;
