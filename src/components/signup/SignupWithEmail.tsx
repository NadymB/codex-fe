"use client";
import { useAuth } from "@/hooks/useAuth";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { authService } from "@/services/AuthServices";
import { LOGIN_MODE } from "@/utils/constants";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { InputCustom } from "../InputCustom";
import { CheckIcon } from "@/assets/icons/CheckIcon";

const SignupWithEmail = () => {
  const router = useRouter();
  const [messageFail, setMassageFail] = useState<string>("");
  const [focusPassword, setFocusPassword] = useState<boolean>(false);

  const { webSocket, register } = useContext(WebSocketCtx);
  const { setCurrentUser, login, currentUser } = useAuth();
  const refCode = useSearchParams().get("c");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("authenticationPage.emailIsInvalid"))
      .matches(/@[^.]*\./, t("authenticationPage.emailIsInvalid"))
      .required(t("authenticationPage.emailIsInvalid"))
      .max(255, "Email too long"),
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
      email: "",
      username: "",
      password: "",
      managerRefCode: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        if (!values.managerRefCode) delete values.managerRefCode;
        const response = await authService.signup(values);
        if (response.success) {
          handleLogin(values.password, values.email);
        } else {
          setMassageFail(response.message);
        }
      } catch (error) {}
    },
  });

  const handleLogin = async (password: string, email: string) => {
    try {
      const user = await login({
        password,
        email,
        mode: LOGIN_MODE.MAIL,
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
  }, []);

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
      <div className="bg-[#1D1C22]">
        <InputCustom
          error={formik.touched.email && formik.errors.email ? true : false}
          className=" bg-transparent w-full text-[16px]"
          label={t("authenticationPage.email")}
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
      <div className="relative bg-[#1D1C22]">
        <div
          className={`appear-item ${focusPassword ? "block" : "hidden"} absolute right-0 -top-32`}
        >
          <div className="relative py-1 px-2 bg-white rounded-[4px] mb-2">
            <span className="w-[14px] h-[14px] bg-white absolute left-[7px] -bottom-[5px] rotate-45" />
            <div className="flex gap-[10px] items-center py-1 px-2">
              <div
                className={`flex items-center justify-center w-[18px] h-[18px] rounded-full ${formik.values.password.length > 8 ? "bg-[#2f7c31] border-[#2f7c31]" : "bg-white border-[2px] border-[#0000008a]"}`}
              >
                <CheckIcon color="#fff" />
              </div>
              <label className="text-xs text-black">
                8-20 các kí tự riêng lẻ
              </label>
            </div>
            <div className="flex gap-[10px] items-center py-1 px-2">
              <div
                className={`flex items-center justify-center w-[18px] h-[18px] rounded-full border-[2px] ${/[A-Z]/.test(formik.values.password) ? "bg-[#2f7c31] border-[#2f7c31]" : "bg-white border-[#0000008a]"}`}
              >
                <CheckIcon color="#fff" />
              </div>
              <label className="text-xs text-black">
                Tối thiểu một chữ hoa
              </label>
            </div>
            <div className="flex gap-[10px] items-center py-1 px-2">
              <div
                className={`flex items-center justify-center w-[18px] h-[18px] rounded-full border-[2px] ${/[a-z]/.test(formik.values.password) ? "bg-[#2f7c31] border-[#2f7c31]" : "bg-white border-[#0000008a]"}`}
              >
                <CheckIcon color="#fff" />
              </div>
              <label className="text-xs text-black">
                Tối thiểu một chữ thường
              </label>
            </div>
            <div className="flex gap-[10px] items-center py-1 px-2">
              <div
                className={`flex items-center justify-center w-[18px] h-[18px] rounded-full border-[2px] ${/[0-9]/.test(formik.values.password) ? "bg-[#2f7c31] border-[#2f7c31]" : "bg-white border-[#0000008a]"}`}
              >
                <CheckIcon color="#fff" />
              </div>
              <label className="text-xs text-black">Ít nhất một số</label>
            </div>
          </div>
        </div>
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
          onBlur={() => setFocusPassword(false)}
          onFocus={() => setFocusPassword(true)}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-[#FF4444] text-[14px] px-4 py-1">
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
  );
};

export default SignupWithEmail;
