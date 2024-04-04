"use client";

import { FormControlCustom } from "@/components/FormControlCustom";
import { GoBack } from "@/components/layouts/GoBack";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import { WITHDRAW_TYPE } from "@/models/Payment";
import { TWithdrawalRequest } from "@/models/Transaction";
import { paymentService } from "@/services/PaymentService";
import { transactionService } from "@/services/TransactionService";
import {
  TRADE_CURRENCY,
  WithdrawalProfit,
  getStaticURL,
} from "@/utils/constants";
import { errorMsg } from "@/utils/errorMsg";
import { formatNumberToCurrency } from "@/utils/formatNumber";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";

const WithdrawPage = () => {
  const [userWithdrawalAccountInfo, setUserWithdrawalAccountInfo] =
    useState<any>();
  const walletAddressEncrytion =
    userWithdrawalAccountInfo?.walletAddress?.length > 8
      ? `${userWithdrawalAccountInfo?.walletAddress?.slice(0, 4)}*${userWithdrawalAccountInfo?.walletAddress?.slice(userWithdrawalAccountInfo?.walletAddress?.length - 4, userWithdrawalAccountInfo?.walletAddress?.length)}`
      : userWithdrawalAccountInfo?.walletAddress;
  const bankNameEncrytion = `${userWithdrawalAccountInfo?.bankNumber?.slice(0, 1)}*******${userWithdrawalAccountInfo?.bankNumber?.slice(userWithdrawalAccountInfo?.bankNumber?.length - 1, userWithdrawalAccountInfo?.bankNumber?.length)} (${userWithdrawalAccountInfo?.bankName})`;
  const account =
    userWithdrawalAccountInfo?.type === WITHDRAW_TYPE.CRYPTO_CURRENCY
      ? walletAddressEncrytion
      : userWithdrawalAccountInfo?.type === WITHDRAW_TYPE.FIAT_CURRENCY
        ? bankNameEncrytion
        : "";
  const { fetchUserBalance, currentBalance, currentUser } = useAuth();
  const confirmRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      fetchUserBalance();
    }
  }, [currentUser]);

  const handleChangeType = (e: any) => {};

  const getUserWithdrawalAccountInfo = async () => {
    try {
      const response = await paymentService.getPaymentInfo();
      if (response.data && response.success) {
        setUserWithdrawalAccountInfo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserWithdrawalAccountInfo();
  }, []);

  const createdWithdrawalResquest = async (values: TWithdrawalRequest) => {
    try {
      const response = await transactionService.createWithdrawalRequest(values);
      if (response.success && response.data) {
        onToast("Withdrawal Successfully", "success");
        router.push("/m/billing");
      } else {
        onToast(t(`errorMessages.${errorMsg(response.code)}`), "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    account: Yup.string().required(t("withdraw.msgAccountError")),
    amount: Yup.string()
      .required(t("withdraw.msgAmountError"))
      .matches(/^[0-9]+$/, t("withdraw.msgAmountError"))
      .min(1, t("withdraw.msgAmountError")),
  });
  const formik = useFormik({
    initialValues: {
      account: "",
      amount: "",
      pin: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });

  const handleConfirm = () => {
    createdWithdrawalResquest({
      amount: Number(formik.values.amount),
      currency: TRADE_CURRENCY.USD,
      pin: formik.values.pin,
      userAccountId: userWithdrawalAccountInfo?.id,
    });
  };

  useEffect(() => {
    const withdraw = document.getElementById("confirm-withdraw");
    const ref = confirmRef.current as any;
    if (withdraw && ref) {
      ref.style.marginBottom = `${withdraw.offsetHeight}px`;
    }
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("withdraw.title")} />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-4 p-4 bg-black"
        autoComplete="off"
      >
        <div
          ref={confirmRef}
          className="flex flex-col items-center gap-4 w-full"
        >
          <img
            src={`${getStaticURL()}/assets/images/atm.svg`}
            alt="ATM"
            width={100}
            height={100}
            className="h-40 w-40 mt-4"
          />
          <div className="w-full">
            <FormControlCustom fullWidth>
              <InputLabel id="select-method">
                {t("withdraw.account")}
              </InputLabel>
              <Select
                labelId="select-method"
                id="demo-simple-select"
                value={account}
                label="Kiểu"
                onChange={(e) => handleChangeType(e)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#1B1B1D",
                      color: "#fff",
                    },
                  },
                }}
              >
                {userWithdrawalAccountInfo && (
                  <MenuItem value={account}>{account}</MenuItem>
                )}
              </Select>
            </FormControlCustom>
          </div>
          <div className="w-full">
            <input
              id="amount"
              name="amount"
              type="number"
              className="w-full bg-[#1d1c22] rounded p-4 text-base text-white placeholder:text-[#888]"
              value={formik.values.amount}
              onChange={(e) => {
                if (Number(e.target.value) > 0) {
                  formik.setFieldValue("amount", e.target.value);
                } else {
                  formik.setFieldValue("amount", "");
                }
              }}
              placeholder={t("withdraw.amount")}
              min={0}
              max={currentBalance}
              step={0.001}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <div className="text-[#d32f2f] text-xs px-4 py-1">
                {formik.errors.amount}
              </div>
            ) : null}
          </div>
          <div className="w-full flex justify-between text-sm">
            <div className="text-white">
              {t("withdraw.currentBalance")} &nbsp;{" "}
              {formatNumberToCurrency(currentBalance)} USDT
            </div>
            <div
              className="text-[#3d5afe] cursor-pointer"
              onClick={() => formik.setFieldValue("amount", currentBalance)}
            >
              {t("withdraw.allBalance")}
            </div>
          </div>
          {userWithdrawalAccountInfo && (
            <div className="w-full">
              <input
                id="pin"
                name="pin"
                type="password"
                className="w-full bg-[#1d1c22] rounded p-4 text-base text-white placeholder:text-[#888]"
                value={formik.values.pin}
                onChange={formik.handleChange}
                placeholder={t("withdraw.securityCode")}
                min={0}
                max={currentBalance}
                step={0.001}
              />
              {formik.touched.pin && formik.errors.pin ? (
                <div className="text-[#d32f2f] text-xs px-4 py-1">
                  {formik.errors.pin}
                </div>
              ) : null}
            </div>
          )}
          {userWithdrawalAccountInfo && (
            <Link
              href={"/m/setting/password/security"}
              className="w-full py-[6px] px-4 bg-[#3d5afe] hover:bg-[#2a3eb1] text-sm font-medium text-white text-center rounded"
            >
              {t("withdraw.manageTheWithdrawalPassword")}
            </Link>
          )}
          <Link
            href={"/m/setting/payment"}
            className="w-full py-[6px] px-4 border border-[#3d5afe80] hover:border-[#3d5afe] text-sm font-medium text-[#3d5afe] text-center rounded"
          >
            {t("withdraw.managementOfWithdrawal")}
          </Link>
        </div>
        <div
          id="confirm-withdraw"
          className="fixed bottom-0 left-0 flex flex-col gap-2 w-full pb-10 p-4 bg-black"
        >
          <div className="w-full flex justify-between text-base text-white">
            <span className="text-[#888]">{t("withdraw.fees")}</span>
            <span>
              {formatNumberToCurrency(
                Number(formik.values.amount) * WithdrawalProfit
              )}{" "}
              USDT
            </span>
          </div>
          <div className="w-full flex justify-between text-sm text-white">
            <span className="text-[#888]">{t("withdraw.amountReceived")}</span>
            <span>
              {formatNumberToCurrency(
                Number(formik.values.amount) * (1 - WithdrawalProfit)
              )}{" "}
              USDT
            </span>
          </div>
          <button
            type="submit"
            className={`w-full py-[6px] px-4 rounded ${formik.values.amount ? "bg-[#3d5afe] hover:bg-[#2a3eb1] text-white" : "bg-[#343338] text-[#676769]"}`}
            style={{
              backgroundColor: formik.values.amount ? "#3d5afe" : "#343338",
            }}
            onClick={handleConfirm}
          >
            {t("withdraw.confirm")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithdrawPage;
