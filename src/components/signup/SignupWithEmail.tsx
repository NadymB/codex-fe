"use client";
import { Button, TextField, styled } from "@mui/material";
import { useFormik } from "formik";
import i18next from "i18next";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";
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
const SignupWithEmail = () => {
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(i18next.t("authenticationPage.emailIsInvalid"))
      .matches(/@[^.]*\./, i18next.t("authenticationPage.emailIsInvalid"))
      .required(i18next.t("authenticationPage.emailIsInvalid"))
      .max(255, "Email too long"),
    userName: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid"),
    ),
    password: Yup.string().required(
      i18next.t("authenticationPage.passwordIsInvalid"),
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      inviteCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });

  return (
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
      <div className="bg-[#1D1C22]">
        <CssTextField
          error={formik.touched.email && formik.errors.email ? true : false}
          className=" bg-transparent w-full text-[16px]"
          label={i18next.t("authenticationPage.email")}
          name="email"
          autoComplete="new-email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-[#FF4444] text-[14px] px-4 py-1">
            {formik.errors.email}
          </div>
        ) : null}
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
          label={i18next.t("authenticationPage.invitationCode")}
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
  );
};

export default SignupWithEmail;
