"use client";
import { authService } from "@/services/AuthServices";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import i18next from "i18next";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { InputCustom } from "../InputCustom";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { LOGIN_MODE } from "@/utils/constants";

const LoginWithUserName = () => {
  const { login } = useAuth();
  const [messageLoginFail, setMassageLoginFail] = useState("");

  const router = useRouter();
  const validationSchema = Yup.object({
    username: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    password: Yup.string().required(
      i18next.t("authenticationPage.passwordIsInvalid")
    ),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      mode: LOGIN_MODE.USERNAME,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const user = await login(values);
        if (user) {
          router.push("/m");
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
          error={
            formik.touched.username && formik.errors.username ? true : false
          }
          className=" bg-transparent w-full text-[16px]"
          label={i18next.t("authenticationPage.username")}
          name="username"
          autoComplete="new-username"
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

export default LoginWithUserName;
