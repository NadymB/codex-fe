/* eslint-disable @next/next/no-img-element */
"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { CURRENCIES, Currency, getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { CardIcon } from "@/assets/icons/CardIcon";
import { paymentService } from "@/services/PaymentService";
import { useEffect, useState } from "react";
import { WITHDRAW_TYPE } from "@/models/Payment";

const listWithdrawAccount = true;

const PaymentPage = () => {
  const [withdrawAccountInfo, setWithdrawAccountInfo] = useState<any>();
  const [cryptoCurrencyCurrent, setCryptoCurrencyCurrent] = useState<Currency>();

  const getWithdrawalAccount = async () => {
    try {
      const response = await paymentService.getPaymentInfo();
      if (response.data && response.success) {
        setWithdrawAccountInfo(response.data);
        if(response.data.cryptoCurrency) {
          setCryptoCurrencyCurrent(CURRENCIES.find((item) => item.value === response.data.cryptoCurrency))
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWithdrawalAccount();
  }, []);
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={t("withdrawAccount.title")} />
      {withdrawAccountInfo ? (
        <div className="flex flex-col items-center gap-2 p-4 my-4">
          <Image
            src={`${getStaticURL()}/assets/images/atm.svg`}
            alt="ATM"
            width={100}
            height={100}
            className="h-80 w-80"
          />
          <div className="flex flex-col rounded bg-[#1c1c1e] w-full">
            <div className="flex gap-2 items-center py-2 border-b border-[#ffffff1a] text-[#888] text-base">
              <div className="h-8 w-[3px] bg-[#f7a600]" />
              <CardIcon />
              {withdrawAccountInfo.type === WITHDRAW_TYPE.FIAT_CURRENCY ? (
                <span>{withdrawAccountInfo.bankName}</span>
              ) : (
                <span>{cryptoCurrencyCurrent && `${cryptoCurrencyCurrent.acronym} (${cryptoCurrencyCurrent.name})`}</span>
              )}
            </div>
            <div className="flex flex-col gap-[2px] p-4 text-sm text-white">
              {withdrawAccountInfo.bankNumber && (
                <span>{withdrawAccountInfo.bankNumber}</span>
              )}
              {withdrawAccountInfo.country && (
                <span className="text-[#888]">{withdrawAccountInfo.country}</span>
              )}
              {withdrawAccountInfo.bankName && (
                <span className="text-[#888]">{withdrawAccountInfo.bankName}</span>
              )}
              {withdrawAccountInfo.address && (
                <span className="text-[#888]">{withdrawAccountInfo.address}</span>
              )}
              {withdrawAccountInfo.phoneNumber && (
                <span className="text-[#888]">{withdrawAccountInfo.phoneNumber}</span>
              )}
              {withdrawAccountInfo.nationalIdCard && (
                <span className="text-[#888]">{withdrawAccountInfo.nationalIdCard}</span>
              )}
              {withdrawAccountInfo.walletAddress && (
                <span>{withdrawAccountInfo.walletAddress}</span>
              )}
              {cryptoCurrencyCurrent && (
                <span>{`${cryptoCurrencyCurrent.acronym} (${cryptoCurrencyCurrent.name})`}</span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center px-4 my-4">
            <Image
              src={`${getStaticURL()}/assets/images/empty.svg`}
              alt="No Withdraw Account"
              width={100}
              height={100}
              className="h-80 w-80"
            />
            <span className="text-base text-[#888]">
              {t("withdrawAccount.noWithdrawalAccount")}
            </span>
          </div>
          <div className="fixed px-2 py-2 pt-3  w-full bottom-0 left-0">
            <Button
              sx={{ padding: 0, textTransform: "none" }}
              className="p-0 w-full overflow-hidden normal-case"
              variant="contained"
            >
              <Link
                href={"/m/setting/payment/create"}
                className=" flex justify-center w-full px-4 py-[6px]  bg-[#3d5afe]  text-white text-sm text-center text-medium rounded"
              >
                {t("withdrawAccount.withdrawAccountBtn")}
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
