/* eslint-disable @next/next/no-img-element */
"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

const PaymentPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={i18next.t("withdrawAccount.title")} />
      <div className="flex flex-col items-center px-4 my-4">
        <Image
          src={`${getStaticURL()}/assets/images/empty.svg`}
          alt="No Withdraw Account"
          width={100}
          height={100}
          className="h-80 w-80"
        />
        <span className="text-base text-[#888]">
          {i18next.t("withdrawAccount.noWithdrawalAccount")}
        </span>
      </div>
      <div className="fixed px-2 py-2 pt-3  w-full bottom-0 left-0">
        <Button
          sx={{ padding: 0, textTransform: "none" }}
          className="p-0 w-full overflow-hidden normal-case"
          variant="contained"
        >
          <Link
            href={"/m/setting/payment/create"}
            className=" flex justify-center w-full px-4 py-[6px]  bg-[#3d5afe]  text-white text-sm text-center text-medium rounded"
          >
            {i18next.t("withdrawAccount.withdrawAccountBtn")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PaymentPage;
