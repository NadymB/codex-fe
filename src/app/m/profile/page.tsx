"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { AuthenticatedProfile } from "@/components/profile/AuthenticatedProfile";
import { PublicProfile } from "@/components/profile/PublicProfile";
import { UnauthenticatedProfile } from "@/components/profile/UnauthenticatedProfile";
import i18next from "i18next";
import "../../../../i18n";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/AuthServices";
import { useRouter } from "next/navigation";

const MarketPage = () => {
  const [isAuthentication, setIsAuthentication] = useState(false);
  const { getCurrentUser, setCurrentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      if (user) {
        setIsAuthentication(true);
      }
    })();
  }, []);
  const handleLogout = async () => {
    try {
      const result = await authService.logout();
      setCurrentUser(null)
      router.push("/m/login");
    } catch (error) {}
  };
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={i18next.t("profilePage.title")} />
      {isAuthentication ? <AuthenticatedProfile /> : <UnauthenticatedProfile />}
      <PublicProfile />
      {isAuthentication && (
        <div className="p-5 bg-black">
          <button onClick={handleLogout} className="py-2 w-full text-white bg-red-600 rounded-md text-[13px] font-semibold">
            {i18next.t("profilePage.quit")}
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketPage;
