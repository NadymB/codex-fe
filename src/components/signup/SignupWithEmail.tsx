"use client";
import { Button, TextField, styled } from "@mui/material";
import { useFormik } from "formik";
import i18next from "i18next";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";
import { InputCustom } from "../InputCustom";
import { authService } from "@/services/AuthServices";

const SignupWithEmail = () => {
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(i18next.t("authenticationPage.emailIsInvalid"))
      .matches(/@[^.]*\./, i18next.t("authenticationPage.emailIsInvalid"))
      .required(i18next.t("authenticationPage.emailIsInvalid"))
      .max(255, "Email too long"),
    username: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid"),
    ),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9.]/,
        "Password must contain at least one special character"
      )
      .required(i18next.t("authenticationPage.passwordIsInvalid")),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      inviteCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await authService.signupEmail(values)
        
      } catch (error) {
        
      }
    },
  });

  return (
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
          label={i18next.t("authenticationPage.username")}
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
      <div className="bg-[#1D1C22]">
        <InputCustom
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
        <InputCustom
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
        <InputCustom
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
        style={{ background: "#3D5AFE", color:'#fff'  }}
        className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
      >
        {i18next.t("authenticationPage.register")}
      </Button>
    </form>
  );
};

export default SignupWithEmail;
