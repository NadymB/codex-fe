/* eslint-disable @next/next/no-img-element */
"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import Image from "next/image";
import Link from "next/link";
import "../../../../../i18n";

const WithdrawAccountPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={i18next.t("withdrawAccount.title")} />
      <div className="flex flex-col items-center px-4 pt-4 pb-40 my-4">
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
      <div className="flex-1 flex px-2 pt-2 pb-4">
        <Link
          href={"/coming-soon"}
          className="self-end w-full py-[6px] px-4 bg-[#3d5afe] hover:bg-[#2a3db0] text-white text-sm text-center text-medium rounded"
        >
          {i18next.t("withdrawAccount.withdrawAccountBtn")}
        </Link>
      </div>
    </div>
  );
};

export default WithdrawAccountPage;
