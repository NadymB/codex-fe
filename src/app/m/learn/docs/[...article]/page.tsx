/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ArticleDetail } from "@/components/ArticleDetail";
import { GoBack } from "@/components/layouts/GoBack";
import { LEARN_ARTICLE_DATA } from "@/utils/constants";
import { useParams } from "next/navigation";
import i18next from "i18next";

export default function ArticleDetailPage() {
  const params = useParams();
  const articleTitle = LEARN_ARTICLE_DATA.filter(
    (item) => item.articleQuery === params.article[1],
  );

  return (
    <div>
      <GoBack title={i18next.t(`learn.${articleTitle[0].title}`)} />
      <ArticleDetail />
    </div>
  );
}
