"use client";

import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { AuthenticatedProfile } from "@/components/profile/AuthenticatedProfile";
import { PublicProfile } from "@/components/profile/PublicProfile";
import { UnauthenticatedProfile } from "@/components/profile/UnauthenticatedProfile";
import { useRouter } from "next/navigation";

const MarketPage = () => {
  const router = useRouter();
  const userInfo = false;

  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center gap-2 bg-[#110F15] p-4">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </div>
        <div className="text-white text-xl font-semibold">Personal center</div>
      </div>
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
