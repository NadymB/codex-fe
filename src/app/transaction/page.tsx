import { ComingSoon } from "@/components/ComingSoon";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";

const TransactionPage = () => {
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <ComingSoon />
    </DefaultLayout>
  );
};
export default TransactionPage;
