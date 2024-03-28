"use client";
import { authService } from "@/services/AuthServices";
import { geolocationService } from "@/services/GeolocationService";
import { COUNTRIES } from "@/utils/constants";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [messageFail, setMassageFail] = useState<string>("");
  const [currentCountry, setCurrentCountry] = useState<any>();
  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required(
      t("authenticationPage.phoneNumberIsInvalid")
    ),
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
      inviteCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await authService.signupWithPhoneNumber({
          ...values,
          phoneNumber: currentCountry.phone + values.phoneNumber,
        });
        if (response.success) {
          router.push("/m/login");
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
  useEffect(() => {
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
            label={t("authenticationPage.loginPassword")}
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
            label="Invite code"
            name="inviteCode"
            autoComplete="new-email"
            value={formik.values.inviteCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="(Optional)"
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
