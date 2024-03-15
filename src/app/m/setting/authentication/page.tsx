"use client";

import { AuthenticationCard } from "@/components/authentication/AuthenticationCard";
import { GoBack } from "@/components/layouts/GoBack";
import { AUTHENTICATION_DATA } from "@/utils/constants";
import { t } from "i18next";

const Authentication = () => {
  return (
    <div className="min-h-screen overflow-auto bg-[#000000] text-white">
      <GoBack title={t("authentication.title")} />
      <div className="flex flex-col gap-6 p-4">
        {AUTHENTICATION_DATA.map((item, index) => (
          <AuthenticationCard
            key={index}
            textLevel={t(`authentication.${item.level}`)}
            rightInterstData={item.rightInterests}
            methods={item.method}
            authenticationBtn={t(`authentication.${item.textBtn}`)}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Authentication;
