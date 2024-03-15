"use client";

import { LearnArticle } from "@/components/LearnArticle";
import { GoBack } from "@/components/layouts/GoBack";
import { LEARN_ARTICLE_DATA } from "@/utils/constants";
import i18next from "i18next";

const LearnPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={i18next.t("learn.title")} />
      <div className="flex flex-col gap-4 bg-black p-2">
        {LEARN_ARTICLE_DATA.map((item, index) => (
          <LearnArticle
            key={index}
            bannerUrl={item.url}
            title={i18next.t(`learn.${item.title}`)}
            content={i18next.t(`learn.${item.content}`)}
            articleUrl={`/m/learn/docs/en/${item.articleQuery}/`}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
