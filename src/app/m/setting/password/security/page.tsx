"use client";
import { GoBack } from "@/components/layouts/GoBack";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import { userService } from "@/services/UserService";
import { errorMsg } from "@/utils/errorMsg";
import { useFormik } from "formik";
import { t } from "i18next";
import * as Yup from "yup";

const PasswordPage = () => {
  const { currentUser, fetchCurrentUser } = useAuth();

  const createSecurityCode = async (pinCode: string) => {
    try {
      const response = await userService.createPIN(pinCode);
      if (response.data && response.success) {
        onToast(t("securityCode.createdPinSuccessfully"), "success");
      }
      fetchCurrentUser()
    } catch (error) {
      console.log(error);
    }
  };

  const updateSecurityCode = async (oldPin: string, newPin: string) => {
    try {
      const response = await userService.changePIN(oldPin, newPin);
      if (response.data && response.success) {
        onToast(t("securityCode.changedPinSuccessfully"), "success");
      } else {
        onToast(t(`errorMessages.${errorMsg(response.code)}`), "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const newPinValidationSchema = Yup.object({
    newPassword: Yup.string()
      .required(t("securityCode.newPasswordRequiredError"))
      .matches(/^[0-9]+$/, t("securityCode.pinIsNumberError"))
      .min(6, t("securityCode.newPasswordInvalidError"))
      .max(10, t("securityCode.newPasswordInvalidError")),
  });
  const newPinFormik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: newPinValidationSchema,
    onSubmit: async (values) => {
      createSecurityCode(values.newPassword);
    },
  });

  const changePinValidationSchema = Yup.object({
    oldPassword: Yup.string()
      .required(t("securityCode.oldPasswordRequiredError"))
      .matches(/^[0-9]+$/, t("securityCode.pinIsNumberError"))
      .min(6, t("securityCode.newPasswordInvalidError"))
      .max(10, t("securityCode.newPasswordInvalidError")),
    newPassword: Yup.string()
      .required(t("securityCode.newPasswordRequiredError"))
      .matches(/^[0-9]+$/, t("securityCode.pinIsNumberError"))
      .min(6, t("securityCode.newPasswordInvalidError"))
      .max(10, t("securityCode.newPasswordInvalidError")),
  });
  const changePinFormik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: changePinValidationSchema,
    onSubmit: async (values) => {
      updateSecurityCode(values.oldPassword, values.newPassword);
    },
  });

  return (
    <div className="min-h-screen overflow-auto bg-[#000000] text-white">
      <GoBack title={t("securityCode.title")} />
      {!currentUser?.isPinSet ? (
        <form
          onSubmit={newPinFormik.handleSubmit}
          className="flex flex-col gap-6 p-4"
          autoComplete="off"
        >
          <div className="bg-[#1D1C22] my-4">
            <input
              className="p-4 text-[#fff] bg-transparent outline-none border border-transparent rounded hover:border-[#fff] w-full text-sm placeholder:text-[#848485]"
              type="password"
              placeholder={t("password.newPassword")}
              onChange={newPinFormik.handleChange}
              id="newPassword"
              name="newPassword"
            />
            {newPinFormik.touched.newPassword &&
            newPinFormik.errors.newPassword ? (
              <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                {newPinFormik.errors.newPassword}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            style={{ background: "#3D5AFE" }}
            className="p-2 mt-6 flex items-center justify-center text-[#fff] font-medium rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
          >
            {t("password.confirmBtn")}
          </button>
        </form>
      ) : (
        <form
          onSubmit={changePinFormik.handleSubmit}
          className="flex flex-col gap-6 p-4 mt-4"
          autoComplete="off"
        >
          <div className="bg-[#1D1C22]">
            <input
              className="p-4 text-[#fff] bg-transparent outline-none border border-transparent rounded hover:border-[#fff] w-full text-sm placeholder:text-[#848485]"
              type="password"
              onChange={changePinFormik.handleChange}
              placeholder={t("password.oldPassword")}
              name="oldPassword"
              id="oldPassword"
            />
            {changePinFormik.touched.oldPassword &&
            changePinFormik.errors.oldPassword ? (
              <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                {changePinFormik.errors.oldPassword}
              </div>
            ) : null}
          </div>
          <div className="bg-[#1D1C22]">
            <input
              className="p-4 text-[#fff] bg-transparent outline-none border border-transparent rounded hover:border-[#fff] w-full text-sm placeholder:text-[#848485]"
              type="password"
              onChange={changePinFormik.handleChange}
              placeholder={t("password.newPassword")}
              name="newPassword"
              id="newPassword"
            />
            {changePinFormik.touched.newPassword &&
            changePinFormik.errors.newPassword ? (
              <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                {changePinFormik.errors.newPassword}
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
      )}
    </div>
  );
};

export default PasswordPage;
