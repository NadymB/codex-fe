"use client";
import { useTranslation } from "react-i18next";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useEffect, useState } from "react";
import Header from "@/components/layouts/Header";

export default function Home() {
  const { t } = useTranslation();

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <Header />
      <div>home</div>
    </DefaultLayout>
  );
}
