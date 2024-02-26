"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { AuthenticatedProfile } from "@/components/profile/AuthenticatedProfile";
import { PublicProfile } from "@/components/profile/PublicProfile";
import { UnauthenticatedProfile } from "@/components/profile/UnauthenticatedProfile";
import i18next from "i18next";
import "../../../../i18n";

const MarketPage = () => {
  const userInfo = true;

  return (
    <div className="bg-black min-h-screen">
      <GoBack title={i18next.t("profilePage.title")} />
      {userInfo ? <AuthenticatedProfile /> : <UnauthenticatedProfile />}
      <PublicProfile />
      {userInfo && (
        <div className="p-5 bg-black">
          <button className="py-2 w-full text-white bg-red-600 rounded-md text-[13px] font-semibold">
            {i18next.t("profilePage.quit")}
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketPage;
