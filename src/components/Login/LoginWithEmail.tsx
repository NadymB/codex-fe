"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField, styled } from "@mui/material";
import i18next from "i18next";
import { InputCustom } from "../InputCustom";
import { authService } from "@/services/AuthServices";
import { useAuth } from "@/hooks/useAuth";
import { LOGIN_MODE } from "@/utils/constants";
import { WebSocketCtx } from "@/providers/WebSocketProvider";

const LoginWithEmail = () => {
  const { webSocket, register } = useContext(WebSocketCtx);

  const { login } = useAuth();
  const [messageLoginFail, setMassageLoginFail] = useState("");
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(i18next.t("authenticationPage.emailIsInvalid"))
      .matches(/@[^.]*\./, i18next.t("authenticationPage.emailIsInvalid"))
      .required(i18next.t("authenticationPage.emailIsInvalid"))
      .max(255, "Email too long"),
    password: Yup.string().required(
      i18next.t("authenticationPage.passwordIsInvalid")
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      mode: LOGIN_MODE.MAIL,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const data = await login(values);
        if(data){
          register(data.access_token)
          router.push('/m')
        }
      } catch (error) {
        setMassageLoginFail("Incorrect email or password");
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
      {messageLoginFail !== "" && (
        <div className="text-[red] text-[14px] mt-4 p-2 px-3 rounded bg-red-300">
          {messageLoginFail}
        </div>
      )}
      <Button
        type="submit"
        style={{ background: "#3D5AFE", color: "#fff" }}
        className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
      >
        {i18next.t("authenticationPage.login")}
      </Button>
    </form>
  );
};

export default LoginWithEmail;
