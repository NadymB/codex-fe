"use client";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import { PERMISSION_REQUIRED } from "@/models/User";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { LOGIN_MODE } from "@/utils/constants";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { InputCustom } from "../InputCustom";

const LoginWithEmail = () => {
  const { webSocket, register } = useContext(WebSocketCtx);

  const { login, currentUser} = useAuth();
  const [messageLoginFail, setMassageLoginFail] = useState("");
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("authenticationPage.emailIsInvalid"))
      .matches(/@[^.]*\./, t("authenticationPage.emailIsInvalid"))
      .required(t("authenticationPage.emailIsInvalid"))
      .max(255, "Email too long"),
    password: Yup.string().required(
      t("authenticationPage.passwordIsInvalid"),
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
        const checkPermissions = currentUser?.configMetadata?.permissions?.find((item: string) => item === PERMISSION_REQUIRED.LOGIN);
        if(checkPermissions === undefined) {
          onToast(t("permissionDenied.login"), "error")
        } else {
          const data = await login(values);
          if (data) {
            register(data.access_token);
            router.push("/m");
          } else {
            setMassageLoginFail(t("authenticationPage.loginWrongWithEmailPassword"));
          }
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

export default LoginWithEmail;
