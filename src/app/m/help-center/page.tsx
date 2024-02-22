"use client";

import { LearnArticle } from "@/components/LearnArticle";
import { GoBack } from "@/components/layouts/GoBack";
import { HELP_CENTER_DATA } from "@/utils/constants";
import i18next from "i18next";

const HelpCenterPage = () => {

  return (
    <div className="bg-black min-h-screen">
        <GoBack title={i18next.t("helpCenter.title")} />
        <div className="flex flex-col gap-4 p-2">
            {HELP_CENTER_DATA.map((item, index) => (
                <LearnArticle 
                    key={index}
                    bannerUrl={item.url}
                    title={i18next.t(`helpCenter.${item.title}`)}
                    content={i18next.t(`helpCenter.${item.content}`)}
                />
            ))}
        </div>
    </div>
  );
};

export default HelpCenterPage;
