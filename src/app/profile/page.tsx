"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { AuthenticatedProfile } from "@/components/profile/AuthenticatedProfile";
import { PublicProfile } from "@/components/profile/PublicProfile";
import { UnauthenticatedProfile } from "@/components/profile/UnauthenticatedProfile";

const MarketPage = () => {
  const userInfo = true;

  return (
    <div className="bg-black min-h-screen">
      <GoBack title="Personal center" />
      {userInfo ? <AuthenticatedProfile /> : <UnauthenticatedProfile />}
      <PublicProfile />
      {userInfo && (
        <div className="p-5">
          <button className="py-2 w-full text-white bg-red-600 rounded-md text-[13px] font-semibold">
            Quit
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketPage;
