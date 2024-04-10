/* eslint-disable @next/next/no-img-element */
"use client";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { BackIcon } from "@/assets/icons/BackIcon";
import { FormControlCustom } from "@/components/FormControlCustom";
import { InputCustom } from "@/components/InputCustom";
import SelectCountries from "@/components/SelectCountries";
import SelectCryptoCurrency from "@/components/SelectCryptocurrency";
import { onToast } from "@/hooks/useToast";
import { TPaymentInfo, WITHDRAW_TYPE } from "@/models/Payment";
import { paymentService } from "@/services/PaymentService";
import { CURRENCIES, Currency } from "@/utils/constants";
import { toCamelCase } from "@/utils/convertString";

import {
  Button,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const CreatePaymentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCryptoCurrency, setIsOpenCryptoCurrency] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<any>();
  const [currentCurrency, setCurrentCurrency] = useState<any>();
  const [type, setType] = useState<WITHDRAW_TYPE>(WITHDRAW_TYPE.FIAT_CURRENCY);
  const router = useRouter();
  useState<Currency>();

  const handleChangeType = (e: any) => {
    setType(e.target.value);
  };

  const createWithdrawalAccount = async (values: TPaymentInfo) => {
    try {
      const response = await paymentService.createPaymentInfo(values);
      if (response.data && response.success) {
        onToast(t("authenticationPage.withdrawalAccountCreatedSuccessfully"), "success");
        router.back()
      } else {
        onToast(t(`authenticationPage.${toCamelCase(response.response.message[0])}`), "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getWithdrawalAccount = async () => {
    try {
      const response = await paymentService.getPaymentInfo();
      if (response.data && response.success) {
        setType(response.data.type)
        if(response.data.type===WITHDRAW_TYPE.FIAT_CURRENCY){
            fiatCurrencyformik.setFieldValue("country", response.data.country)
            fiatCurrencyformik.setFieldValue("bankName", response.data.bankName)
            fiatCurrencyformik.setFieldValue("bankAccount", response.data.bankAccount)
            fiatCurrencyformik.setFieldValue("bankNumber", response.data.bankNumber)
            fiatCurrencyformik.setFieldValue("comment", response.data.comment)
            fiatCurrencyformik.setFieldValue("address", response.data.address)
            fiatCurrencyformik.setFieldValue("nationalIdCard", response.data.nationalIdCard)
            fiatCurrencyformik.setFieldValue("phoneNumber", response.data.phoneNumber)
        }
        else if (response.data.type===WITHDRAW_TYPE.CRYPTO_CURRENCY) {
           
            cryptoCurrencyformik.setFieldValue("walletAddress", response.data.walletAddress)
            cryptoCurrencyformik.setFieldValue("comment", response.data.comment)
        }
        if (response.data.cryptoCurrency) {
          
            setCurrentCurrency(CURRENCIES.find(
              (item) => item.value === response.data.cryptoCurrency
            ))
            cryptoCurrencyformik.setFieldValue("cryptoCurrency", response.data.cryptoCurrency)

          
        }
      }
      else{
        router.push('/m/setting/payment')
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWithdrawalAccount();
  }, []);
  const fiatCurrencyValidationSchema = Yup.object({
    country: Yup.string().required(t("authenticationPage.required")),
    bankName: Yup.string().required(t("authenticationPage.required")),
    bankNumber: Yup.string().required(t("authenticationPage.required")),
    bankAccount: Yup.string().required(
      t("authenticationPage.required")
    ),
    address: Yup.string().required(t("authenticationPage.required")),
    nationalIdCard: Yup.string().required(t("authenticationPage.required")),
    phoneNumber: Yup.string().required(
      t("authenticationPage.required")
    ),
  });

  const fiatCurrencyformik = useFormik({
    initialValues: {
      country: "",
      bankName: "",
      bankAccount: "",
      bankNumber: "",
      comment: "",
      address: "",
      nationalIdCard: "",
      phoneNumber: "",
    },
    validationSchema: fiatCurrencyValidationSchema,
    onSubmit: async (values) => {
      const {
        country,
        bankName,
        bankAccount,
        bankNumber,
        address,
        nationalIdCard,
        phoneNumber,
      } = values;

      const phoneNumberValid = `${currentCountry}${phoneNumber}`;

      createWithdrawalAccount({
        type,
        country,
        bankName,
        bankAccount,
        bankNumber,
        address,
        phoneNumber: phoneNumberValid,
        nationalIdCard,
      });
    },
  });

  const cryptoCurrencyValidationSchema = Yup.object({
    cryptoCurrency: Yup.string().required(
      t("authenticationPage.required")
    ),
    walletAddress: Yup.string().required(
      t("authenticationPage.required")
    ),
  });

  const cryptoCurrencyformik = useFormik({
    initialValues: {
      cryptoCurrency: "",
      walletAddress: "",
      comment: "",
    },
    validationSchema: cryptoCurrencyValidationSchema,
    onSubmit: async (values) => {
      const { comment, cryptoCurrency, walletAddress } = values;
      createWithdrawalAccount({
        type,
        cryptoCurrency,
        walletAddress,
      });
    },
  });

  return (
    <>
      <div className="min-h-screen overflow-auto bg-[#000000]">
        <div className="sticky z-20 top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => router.back()}>
            <BackIcon />
          </div>
          <span className="text-[#fff]">
            {t("withdrawAccount.updateWithdrawAccountBtn")}
          </span>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="p-4 my-2 flex items-center justify-center">
            <img
              className="w-[200px] h-[200px]"
              src={`/assets/images/create-account-withdraw.svg`}
              alt=""
            />
          </div>
          <div className="bg-[#1D1C22]">
            {/* KIỂU */}
            <FormControlCustom fullWidth>
              <InputLabel id="select-method">
                {t("withdrawAccount.type")}
              </InputLabel>
              <Select
                labelId="select-method"
                id="demo-simple-select"
                value={type}
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
                <MenuItem value={WITHDRAW_TYPE.FIAT_CURRENCY}>
                  {t("withdrawAccount.fiatCurrency")}
                </MenuItem>
                <MenuItem value={WITHDRAW_TYPE.CRYPTO_CURRENCY}>
                  {t("withdrawAccount.cryptocurrency")}
                </MenuItem>
              </Select>
            </FormControlCustom>
          </div>
          {/* QUỐC GIA */}
          {type === WITHDRAW_TYPE.FIAT_CURRENCY ? (
            <>
              <form
                onSubmit={fiatCurrencyformik.handleSubmit}
                className="flex flex-col gap-4"
                autoComplete="off"
              >
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    label={t("withdrawAccount.country")}
                    placeholder={t("withdrawAccount.clickToSelectCountry")}
                    className="w-full"
                    name="country"
                    value={fiatCurrencyformik.values.country}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ArrowRightIcon />
                        </InputAdornment>
                      ),
                    }}
                    aria-describedby="outlined-weight-helper-text"
                    onClick={() => setIsOpen(true)}
                  />
                </div>
                {/* NGÂN HÀNG */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    error={
                      fiatCurrencyformik.touched.bankName &&
                      fiatCurrencyformik.errors.bankName
                        ? true
                        : false
                    }
                    className=" bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.bank")}
                    name="bankName"
                    autoComplete="new-email"
                    value={fiatCurrencyformik.values.bankName}
                    onChange={fiatCurrencyformik.handleChange}
                    onBlur={fiatCurrencyformik.handleBlur}
                    placeholder={t("withdrawAccount.placeholderBank")}
                  />
                  {fiatCurrencyformik.touched.bankName &&
                  fiatCurrencyformik.errors.bankName ? (
                    <div className="text-[#FF4444] text-[14px] px-4 py-1">
                      {fiatCurrencyformik.errors.bankName}
                    </div>
                  ) : null}
                </div>
                {/* TÀI KHOẢN NGÂN HÀNG */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    error={
                      fiatCurrencyformik.touched.bankNumber &&
                      fiatCurrencyformik.errors.bankNumber
                        ? true
                        : false
                    }
                    className=" bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.bankAccount")}
                    name="bankNumber"
                    autoComplete="new-email"
                    value={fiatCurrencyformik.values.bankNumber}
                    onChange={fiatCurrencyformik.handleChange}
                    onBlur={fiatCurrencyformik.handleBlur}
                  />
                  {fiatCurrencyformik.touched.bankNumber &&
                  fiatCurrencyformik.errors.bankNumber ? (
                    <div className="text-[#FF4444] text-[14px] px-4 py-1">
                      {fiatCurrencyformik.errors.bankNumber}
                    </div>
                  ) : null}
                </div>
                {/* TÊN THỰC TẾ */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    error={
                      fiatCurrencyformik.touched.bankAccount &&
                      fiatCurrencyformik.errors.bankAccount
                        ? true
                        : false
                    }
                    className=" bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.realName")}
                    name="bankAccount"
                    autoComplete="new-real-name"
                    value={fiatCurrencyformik.values.bankAccount}
                    onChange={fiatCurrencyformik.handleChange}
                    onBlur={fiatCurrencyformik.handleBlur}
                    placeholder={t("withdrawAccount.placeholderRealName")}
                  />
                  {fiatCurrencyformik.touched.bankAccount &&
                  fiatCurrencyformik.errors.bankAccount ? (
                    <div className="text-[#FF4444] text-[14px] px-4 py-1">
                      {fiatCurrencyformik.errors.bankAccount}
                    </div>
                  ) : null}
                </div>
                {/* ĐỊA CHỈ LIÊN HỆ */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    error={
                      fiatCurrencyformik.touched.address &&
                      fiatCurrencyformik.errors.address
                        ? true
                        : false
                    }
                    className="text-[#fff] bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.contactAddress")}
                    name="address"
                    type="text"
                    value={fiatCurrencyformik.values.address}
                    onChange={fiatCurrencyformik.handleChange}
                    onBlur={fiatCurrencyformik.handleBlur}
                    placeholder={t("withdrawAccount.placeholderContactAddress")}
                  />
                  {fiatCurrencyformik.touched.address &&
                  fiatCurrencyformik.errors.address ? (
                    <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                      {fiatCurrencyformik.errors.address}
                    </div>
                  ) : null}
                </div>
                {/* SỐ LIÊN LẠC */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    error={
                      fiatCurrencyformik.touched.phoneNumber &&
                      fiatCurrencyformik.errors.phoneNumber
                        ? true
                        : false
                    }
                    className="text-[#fff] bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.contactPhone")}
                    name="phoneNumber"
                    type="text"
                    value={fiatCurrencyformik.values.phoneNumber}
                    onChange={fiatCurrencyformik.handleChange}
                    onBlur={fiatCurrencyformik.handleBlur}
                  />
                  {fiatCurrencyformik.touched.phoneNumber &&
                  fiatCurrencyformik.errors.phoneNumber ? (
                    <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                      {fiatCurrencyformik.errors.phoneNumber}
                    </div>
                  ) : null}
                </div>
                {/* THẺ ID */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    error={
                      fiatCurrencyformik.touched.nationalIdCard &&
                      fiatCurrencyformik.errors.nationalIdCard
                        ? true
                        : false
                    }
                    className="text-[#fff] bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.idNumber")}
                    name="nationalIdCard"
                    type="text"
                    value={fiatCurrencyformik.values.nationalIdCard}
                    onChange={fiatCurrencyformik.handleChange}
                    onBlur={fiatCurrencyformik.handleBlur}
                  />
                  {fiatCurrencyformik.touched.nationalIdCard &&
                  fiatCurrencyformik.errors.nationalIdCard ? (
                    <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                      {fiatCurrencyformik.errors.nationalIdCard}
                    </div>
                  ) : null}
                </div>
                {/* COMMNENT */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    className=" bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.remark")}
                    name="comment"
                    autoComplete="new-email"
                    value={fiatCurrencyformik.values.comment}
                    onChange={fiatCurrencyformik.handleChange}
                    onBlur={fiatCurrencyformik.handleBlur}
                    placeholder={t("withdrawAccount.placeholderRemark")}
                  />
                </div>
                <Button
                  type="submit"
                  style={{ background: "#3D5AFE", color: "#fff" }}
                  className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
                >
                  {t("withdrawAccount.confirm")}
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* CRYPTOCURRENCY */}
              <form className="flex flex-col gap-4" onSubmit={cryptoCurrencyformik.handleSubmit} autoComplete="off">
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    label={t("withdrawAccount.cryptocurrency")}
                    placeholder={t("withdrawAccount.cryptocurrencyPlaceholder")}
                    className="w-full"
                    name="cryptoCurrency"
                    value={`${currentCurrency?.acronym} (${currentCurrency?.name})`}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ArrowRightIcon color="#fff" />
                        </InputAdornment>
                      ),
                    }}
                    // onChange={cryptoCurrencyformik.handleChange}
                    aria-describedby="outlined-weight-helper-text"
                    onClick={() => setIsOpenCryptoCurrency(true)}
                  />
                </div>
                {/* WALLET ADDRESS */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    error={
                      cryptoCurrencyformik.touched.walletAddress &&
                      cryptoCurrencyformik.errors.walletAddress
                        ? true
                        : false
                    }
                    className=" bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.walletAddress")}
                    name="walletAddress"
                    autoComplete="new-email"
                    value={cryptoCurrencyformik.values.walletAddress}
                    onChange={cryptoCurrencyformik.handleChange}
                    onBlur={cryptoCurrencyformik.handleBlur}
                    placeholder={t("withdrawAccount.walletAddressPlaceholder")}
                  />
                  {cryptoCurrencyformik.touched.walletAddress &&
                  cryptoCurrencyformik.errors.walletAddress ? (
                    <div className="text-[#FF4444] text-[14px] px-4 py-1">
                      {cryptoCurrencyformik.errors.walletAddress}
                    </div>
                  ) : null}
                </div>
                {/* COMMNENT */}
                <div className="bg-[#1D1C22]">
                  <InputCustom
                    className=" bg-transparent w-full text-[16px]"
                    label={t("withdrawAccount.remark")}
                    name="comment"
                    autoComplete="new-email"
                    value={cryptoCurrencyformik.values.comment}
                    onChange={cryptoCurrencyformik.handleChange}
                    onBlur={cryptoCurrencyformik.handleBlur}
                    placeholder={t("withdrawAccount.placeholderRemark")}
                  />
                </div>
                <Button
                  type="submit"
                  style={{ background: "#3D5AFE", color: "#fff" }}
                  className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
                >
                  {t("withdrawAccount.confirm")}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed z-20 top-0 left-0 w-full h-full overflow-auto">
          <SelectCountries
            onBack={() => setIsOpen(false)}
            onChange={(value) => {
              setCurrentCountry(value.phone);
              fiatCurrencyformik.setFieldValue("country", value.label);
              setIsOpen(false);
            }}
          />
        </div>
      )}

      {isOpenCryptoCurrency && (
        <div className="fixed z-20 top-0 left-0 w-full h-full overflow-auto">
          <SelectCryptoCurrency
            onBack={() => setIsOpenCryptoCurrency(false)}
            onChange={(item) => {
              setCurrentCurrency(item);
              cryptoCurrencyformik.setFieldValue(
                "cryptoCurrency",
                item.value
              );
              setIsOpenCryptoCurrency(false);
            }}
          />
        </div>
      )}
    </>
  );
};
export default CreatePaymentPage;
