"use client";

import { FormControlCustom } from "@/components/FormControlCustom";
import { GoBack } from "@/components/layouts/GoBack";
import { useAuth } from "@/hooks/useAuth";
import { paymentService } from "@/services/PaymentService";
import { getStaticURL } from "@/utils/constants";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const WithdrawPage = () => {
  const [userWithdrawalAccountInfo, setUserWithdrawalAccountInfo] =
    useState<any>();
  const account = userWithdrawalAccountInfo?.bankNumber ? `${userWithdrawalAccountInfo?.bankNumber?.slice(0, 1)}*******${userWithdrawalAccountInfo?.bankNumber?.slice(userWithdrawalAccountInfo?.bankNumber?.length - 1, userWithdrawalAccountInfo?.bankNumber?.length)} (${userWithdrawalAccountInfo?.bankName})` : "";
  const { fetchUserBalance, currentBalance, currentUser } = useAuth();

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

  const validationSchema = Yup.object({
    account: Yup.string().required(t("withdraw.msgAccountError")),
    amount: Yup.string().required(t("withdraw.msgAmountError")),
  });
  const formik = useFormik({
    initialValues: {
      account: "",
      amount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("xin chào bạn");
    },
  });
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("withdraw.title")} />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-4 p-4 bg-black"
        autoComplete="off"
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
              <MenuItem value={account}>
                {account}
              </MenuItem>
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
                formik.setFieldValue("amount", 0);
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
            {t("withdraw.currentBalance")} &nbsp; {currentBalance} USDT
          </div>
          <div
            className="text-[#3d5afe] cursor-pointer"
            onClick={() => formik.setFieldValue("amount", currentBalance)}
          >
            {t("withdraw.allBalance")}
          </div>
        </div>
        <Link
          href={"/m/setting/payment"}
          className="w-full py-[6px] px-4 border border-[#3d5afe80] hover:border-[#3d5afe] text-sm font-medium text-[#3d5afe] text-center rounded"
        >
          {t("withdraw.managementOfWithdrawal")}
        </Link>
        <div className="flex flex-col gap-2 w-full pb-10 pt-20">
          <div className="w-full flex justify-between text-base text-white">
            <span className="text-[#888]">{t("withdraw.fees")}</span>
            <span>0.00 USDT</span>
          </div>
          <div className="w-full flex justify-between text-sm text-white">
            <span className="text-[#888]">{t("withdraw.amountReceived")}</span>
            <span>0.00 USDT</span>
          </div>
          <button
            type="submit"
            className="w-full text-[#676769] py-[6px] px-4 rounded"
            style={{ backgroundColor: "#343338" }}
          >
            {t("withdraw.confirm")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithdrawPage;
