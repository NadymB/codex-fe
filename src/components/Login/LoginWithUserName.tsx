"use client";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { LOGIN_MODE } from "@/utils/constants";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { InputCustom } from "../InputCustom";

const LoginWithUserName = () => {
  const { webSocket, register } = useContext(WebSocketCtx);

  const { login, currentUser } = useAuth();
  const [messageLoginFail, setMassageLoginFail] = useState("");

  const router = useRouter();
  const validationSchema = Yup.object({
    username: Yup.string().required(
      t("authenticationPage.userNameIsInvalid"),
    ),
    password: Yup.string().required(
      t("authenticationPage.passwordIsInvalid"),
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
          console.log("user", user);
          if (user) {
            register(user.access_token);
            router.push("/m");
          } else {
            setMassageLoginFail("Incorrect email or password");
          }
      } catch (error) {
        onToast(t(`errorMessages.permissionDenied`), "error")
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
          label={t("authenticationPage.username")}
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
        {t("authenticationPage.login")}
      </Button>
    </form>
  );
};

export default LoginWithUserName;
