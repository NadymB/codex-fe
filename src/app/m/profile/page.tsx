"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { AuthenticatedProfile } from "@/components/profile/AuthenticatedProfile";
import { PublicProfile } from "@/components/profile/PublicProfile";
import { UnauthenticatedProfile } from "@/components/profile/UnauthenticatedProfile";
import { useAuth } from "@/hooks/useAuth";
import i18next from "i18next";
import "../../../../i18n";
import { useEffect } from "react";

const MarketPage = () => {
  const { currentUser, logout, fetchCurrentUser } = useAuth();
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <GoBack title={i18next.t("profilePage.title")} />
      {currentUser ? <AuthenticatedProfile /> : <UnauthenticatedProfile />}
      <PublicProfile />
      {currentUser && (
        <div className="p-5 bg-black">
          <button
            onClick={logout}
            className="py-2 w-full text-white bg-red-600 rounded-md text-[13px] font-semibold"
          >
            {i18next.t("profilePage.quit")}
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketPage;
