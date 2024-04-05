"use client";
import { useAuth } from "@/hooks/useAuth";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { authService } from "@/services/AuthServices";
import { geolocationService } from "@/services/GeolocationService";
import { COUNTRIES, LOGIN_MODE } from "@/utils/constants";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { InputCustom } from "../InputCustom";
import SelectCountries from "../SelectCountries";

interface country {
  code: string;
  label: string;
  phone: string;
  suggested?: undefined | boolean;
}
const SignupWithPhoneNumber = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { webSocket, register } = useContext(WebSocketCtx);
  const { setCurrentUser, login, currentUser } = useAuth();
  const [messageFail, setMassageFail] = useState<string>("");
  const [currentCountry, setCurrentCountry] = useState<any>();

  const refCode = useSearchParams().get("c");
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t("authenticationPage.phoneNumberIsInvalid")
      )
      .required(t("authenticationPage.phoneNumberIsReuired")),
    username: Yup.string()
      .required(t("authenticationPage.userNameIsInvalid"))
      .max(255, t("authenticationPage.usernameTooLong"))
      .matches(
        /^[a-zA-Z0-9]*$/,
        t("authenticationPage.allowLettersAndNumbers")
      ),
    password: Yup.string()
      .min(8, t("authenticationPage.passwordMinLength"))
      .matches(/[a-z]/, t("authenticationPage.passwordLowercase"))
      .matches(/[A-Z]/, t("authenticationPage.passwordUppercase"))
      .matches(/[0-9]/, t("authenticationPage.passwordNumber"))
      .matches(/[^a-zA-Z0-9.]/, t("authenticationPage.passwordSpecialChar"))
      .required(t("authenticationPage.passwordIsInvalid")),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      username: "",
      managerRefCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await authService.signup({
          ...values,
          phoneNumber: currentCountry.phone + values.phoneNumber,
        });
        if (response.success) {
          handleLogin(
            values.password,
            currentCountry.phone + values.phoneNumber
          );
        } else {
          setMassageFail(response.message);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  });
  const handleCheckUserLocation = async () => {
    const locationData = await geolocationService.getLocation();
    if (locationData) {
      const country = COUNTRIES.find(
        (item) => item.code.toLowerCase() === locationData.country.toLowerCase()
      );
      setCurrentCountry(country);
    }
  };
  const handleLogin = async (password: string, phoneNumber: string) => {
    try {
      const user = await login({
        password,
        phoneNumber,
        mode: LOGIN_MODE.PHONE_NUMBER,
      });
      if (user) {
        register(user.access_token);
        router.push("/m");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    formik.setFieldValue("managerRefCode", refCode);
    handleCheckUserLocation();
  }, []);
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-2 mt-6"
        autoComplete="off"
      >
        <div className="bg-[#1D1C22]">
          <InputCustom
            error={
              formik.touched.username && formik.errors.username ? true : false
            }
            className=" bg-transparent w-full text-[16px]"
            label={t("authenticationPage.username")}
            name="username"
            autoComplete="new-email"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-[#FF4444] text-[14px] px-4 py-1">
              {formik.errors.username}
            </div>
          ) : null}
        </div>
        <div className="flex items-stretch  gap-2">
          <Button
            type="button"
            style={{ background: "#1D1C22" }}
            className="text-[#fff] min-h-[56px] h-full flex items-end justify-center p-3"
            onClick={() => setIsOpen(true)}
          >
            {currentCountry && currentCountry.phone}
          </Button>
          <div className="bg-[#1D1C22] w-full flex flex-col">
            <InputCustom
              error={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? true
                  : false
              }
              className=" bg-transparent w-full text-[16px]"
              label={t("authenticationPage.phoneNumber")}
              name="phoneNumber"
              type="phone"
              autoComplete="new-phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-[#FF4444] text-[14px] px-4 py-1">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
        </div>
        <div className="bg-[#1D1C22]">
          <InputCustom
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            className="text-[#fff] bg-transparent w-full text-[16px]"
            label={t("authenticationPage.setPassword")}
            name="password"
            type="password"
            autoComplete="new-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-[#FF4444]  text-[14px] px-4 py-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="bg-[#1D1C22]">
          <InputCustom
            className=" bg-transparent w-full text-[16px]"
            label={t("authenticationPage.invitationCode")}
            name="managerRefCode"
            autoComplete="new-email"
            value={formik.values.managerRefCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={`(${t("authenticationPage.optional")})`}
          />
        </div>
        {messageFail !== "" && (
          <div className="text-[red] text-[14px] mt-4 p-2 px-3 rounded bg-red-300">
            {messageFail}
          </div>
        )}
        <Button
          type="submit"
          style={{ background: "#3D5AFE", color: "#fff" }}
          className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
        >
          {t("authenticationPage.register")}
        </Button>
      </form>
      {isOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full overflow-auto">
          <SelectCountries
            onBack={() => setIsOpen(false)}
            onChange={(value) => {
              setCurrentCountry(value);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
};

export default SignupWithPhoneNumber;
