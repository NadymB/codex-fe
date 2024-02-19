import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";

const AssetPage = () => {
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <div className="text-white">AssetPage</div>
    </DefaultLayout>
  );
};
export default AssetPage;
