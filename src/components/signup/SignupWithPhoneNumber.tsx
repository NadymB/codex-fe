"use client";
import { geolocationService } from "@/services/GeolocationService";
import { COUNTRIES } from "@/utils/constants";
import { Button, TextField, styled } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import SelectCountries from "../SelectCountries";
import i18next from "i18next";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3D5AFE",
  },
  "& label": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3D5AFE",
    },
  },
});
interface country {
  code: string;
  label: string;
  phone: string;
  suggested?: undefined | boolean;
}
const SignupWithPhoneNumber = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<any>();
  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required(i18next.t("authenticationPage.phoneNumberIsInvalid")),
    userName: Yup.string().required(i18next.t("authenticationPage.userNameIsInvalid")),
    password: Yup.string().required(i18next.t("authenticationPage.passwordIsInvalid")),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      userName: "",
      inviteCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });
  const handleCheckUserLocation = async () => {
    console.log("Cin chào");
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
        className="flex flex-col gap-2"
        autoComplete="off"
      >
        <div className="bg-[#1D1C22]">
          <CssTextField
            error={
              formik.touched.userName && formik.errors.userName ? true : false
            }
            className=" bg-transparent w-full text-[16px]"
            label={i18next.t("authenticationPage.username")}
            name="userName"
            autoComplete="new-email"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-[#FF4444] text-[14px] px-4 py-1">
              {formik.errors.userName}
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
            +{currentCountry && currentCountry.phone}
          </Button>
          <div className="bg-[#1D1C22] w-full flex flex-col">
            <CssTextField
              error={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? true
                  : false
              }
              className=" bg-transparent w-full text-[16px]"
              label={i18next.t("authenticationPage.phoneNumber")}
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
          <CssTextField
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            className="text-[#fff] bg-transparent w-full text-[16px]"
            label={i18next.t("authenticationPage.loginPassword")}
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
          <CssTextField
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
        <Button
          type="submit"
          style={{ background: "#3D5AFE" }}
          className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
        >
          {i18next.t("authenticationPage.register")}
        </Button>
      </form>
      {isOpen && (
        <div className="fixed z-20 top-0 left-0 w-full h-full overflow-auto">
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
