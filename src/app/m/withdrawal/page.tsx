"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import { useFormik } from "formik";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";

const WithdrawPage = () => {
  const validationSchema = Yup.object({
    account: Yup.string().required(t("withdraw.msgAccountError")),
    amount: Yup.string().required(t("withdraw.msgAmountError")),
  });
  const formik = useFormik({
    initialValues: {
      account: "",
      amount: "",
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
        <Image
          src={`${getStaticURL()}/assets/images/atm.svg`}
          alt="ATM"
          width={100}
          height={100}
          className="h-40 w-40 mt-4"
        />
        <div className="w-full">
          <input
            type="text"
            placeholder={t("withdraw.account")}
            className="w-full bg-[#1d1c22] rounded p-4 text-base text-white placeholder:text-[#888]"
          />
          {formik.touched.account && formik.errors.account ? (
            <div className="text-[#d32f2f]text-xs px-4 py-1">
              {formik.errors.account}
            </div>
          ) : null}
        </div>
        <div className="w-full">
          <input
            type="number"
            placeholder={t("withdraw.amount")}
            className="w-full bg-[#1d1c22] rounded p-4 text-base text-white placeholder:text-[#888]"
          />
          {formik.touched.amount && formik.errors.amount ? (
            <div className="text-[#d32f2f] text-xs px-4 py-1">
              {formik.errors.amount}
            </div>
          ) : null}
        </div>
        <div className="w-full flex justify-between text-sm">
          <div className="text-white">
            {t("withdraw.currentBalance")} &nbsp; 0.00 USDT
          </div>
          <span className="text-[#3d5afe]">{t("withdraw.allBalance")}</span>
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
