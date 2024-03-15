"use client";

import { LearnArticle } from "@/components/LearnArticle";
import { GoBack } from "@/components/layouts/GoBack";
import { LEARN_ARTICLE_DATA } from "@/utils/constants";
import { t } from "i18next";

const LearnPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("learn.title")} />
      <div className="flex flex-col gap-4 bg-black p-2">
        {LEARN_ARTICLE_DATA.map((item, index) => (
          <LearnArticle
            key={index}
            bannerUrl={item.url}
            title={t(`learn.${item.title}`)}
            content={t(`learn.${item.content}`)}
            articleUrl={`/m/learn/docs/en/${item.articleQuery}/`}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
