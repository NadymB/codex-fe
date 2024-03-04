"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField, styled } from "@mui/material";
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
const LoginWithUserName = () => {
  const router = useRouter();
  const validationSchema = Yup.object({
    userName: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid"),
    ),
    password: Yup.string().required(
      i18next.t("authenticationPage.passwordIsInvalid"),
    ),
  });
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
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
      <Button
        type="submit"
        style={{ background: "#3D5AFE" }}
        className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
      >
        {i18next.t("authenticationPage.login")}
      </Button>
    </form>
  );
};

export default LoginWithUserName;
