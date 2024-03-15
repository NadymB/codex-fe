/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { GoBack } from "@/components/layouts/GoBack";
import { HELP_CENTER_DATA } from "@/utils/constants";
import { useParams } from "next/navigation";
import { t } from "i18next";
import { HelpCenterDetail } from "@/components/help/HelpCenterDetail";

export default function HelpCenterDetailPage() {
  const params = useParams();
  const helpTitle = HELP_CENTER_DATA.filter(
    (item) => item.articleQuery === params.article[1],
  );

  return (
    <div>
      <GoBack title={t(`helpCenter.${helpTitle[0]?.title}`)} />
      <HelpCenterDetail />
    </div>
  );
}
