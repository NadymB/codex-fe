"use client";
import { GoBack } from "@/components/layouts/GoBack";
import { t } from "i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

const PasswordPage = () => {
  const validationSchema = Yup.object({
    newPassword: Yup.string().required(
      t("password.oldPasswordInvalidError"),
    ),
  });
  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("xin chào bạn");
    },
  });

  return (
    <div className="min-h-screen overflow-auto bg-[#000000] text-white">
      <GoBack title={t("securityCode.title")} />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6 p-4"
        autoComplete="off"
      >
        <div className="bg-[#1D1C22] my-4">
          <input
            className="p-4 text-[#fff] bg-transparent outline-none border border-transparent rounded hover:border-[#fff] w-full text-sm placeholder:text-[#848485]"
            type="password"
            placeholder={t("password.newPassword")}
            name="newPassword"
          />
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <div className="text-[#FF4444]  text-[14px] px-4 py-1">
              {formik.errors.newPassword}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          style={{ background: "#3D5AFE" }}
          className="p-4 mt-6 flex items-center justify-center text-[18px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
        >
          {t("password.confirmBtn")}
        </button>
      </form>
    </div>
  );
};

export default PasswordPage;
