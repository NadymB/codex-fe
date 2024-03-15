"use client";

import { LearnArticle } from "@/components/LearnArticle";
import { GoBack } from "@/components/layouts/GoBack";
import { HELP_CENTER_DATA } from "@/utils/constants";
import { t } from "i18next";

const HelpCenterPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("helpCenter.title")} />
      <div className="flex flex-col gap-4 p-2 bg-black">
        {HELP_CENTER_DATA.map((item, index) => (
          <LearnArticle
            key={index}
            bannerUrl={item.url}
            title={t(`helpCenter.${item.title}`)}
            content={t(`helpCenter.${item.content}`)}
            articleUrl={`/m/help-center/docs/en/${item.articleQuery}/`}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpCenterPage;
