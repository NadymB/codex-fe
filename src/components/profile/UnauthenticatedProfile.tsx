import { AvatarIcon } from "@/assets/icons/AvatarIcon";
import i18next from "i18next";
import { useRouter } from "next/navigation";

export const UnauthenticatedProfile = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm p-4">
        <div className="flex items-center gap-4">
          <AvatarIcon />
          <div className="text-white">
            <div className="text-[32px]">
              {i18next.t("profilePage.welcome")}
            </div>
            <div className="text-gray-500">
              {i18next.t("profilePage.messageLogin")}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center mt-8">
          <button
            onClick={() => router.push("/m/login")}
            className="border border-[#3D5AFE] text-[#3D5AFE] w-1/2 rounded-md py-1.5 text-sm"
          >
            {i18next.t("profilePage.login")}
          </button>
          <button
            onClick={() => router.push("/m/signup")}
            className="text-white bg-[#3D5AFE] w-1/2 rounded-md py-1.5 text-sm"
          >
            {i18next.t("profilePage.signup")}
          </button>
        </div>
      </div>
    </div>
  );
};
