import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";

const TransactionPage = () => {
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <div className="text-white">TransactionPage</div>
    </DefaultLayout>
  );
};
export default TransactionPage;
