"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginWithEmail = () => {
  const router = useRouter();
  const validationSchema = Yup.object({
    // email: Yup.string()
    //   .email("Email is invalid")
    //   .matches(/@[^.]*\./, "Email is invalid")
    //   .required("Email is invalid")
    //   .max(255, "Email too long"),
    // password: Yup.string().required("Password is invalid"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        console.log('xin chào bạn')
    },
  });
  return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6"  autoComplete="off">
          <div className="bg-[#1D1C22]">
            <input
              className="p-5 text-[#fff] bg-transparent outline-none border border-transparent rounded hover:border-[#fff] w-full text-[16px]"
              type="text"
              placeholder="E-mail"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-[#FF4444] text-[14px] px-4 py-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="bg-[#1D1C22]">
            <input
              className="p-5 text-[#fff] bg-transparent outline-none border border-transparent rounded hover:border-[#fff] w-full text-[16px]"
              type="password"
              autoComplete="new-password"
              placeholder="Nhập mật khẩu đăng nhập"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-[#FF4444]  text-[14px] px-4 py-1">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" style={{background:"#3D5AFE"}} className="p-4 mt-6 flex items-center justify-center text-[18px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]">Đăng nhập</button>
        </form>
  );
};

export default LoginWithEmail;
