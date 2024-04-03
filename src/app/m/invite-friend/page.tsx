/* eslint-disable @next/next/no-img-element */
"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { getStaticURL } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { t } from "i18next";


const InviteFriendPage = () => {
  const router = useRouter();
  return (
      <div
        className="min-h-screen overflow-auto bg-[#000000]"
        style={{
          backgroundImage: `url(${getStaticURL()}/assets/images/offer-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sticky top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => router.back()}>
            <BackIcon />
          </div>
          <span className="text-[#fff]">{t("invitePage.title")}</span>
        </div>
        <div className="flex flex-col text-[#fff] max-w-[1200px] mx-auto px-5">
          <div>
            <div className="pt-[60px] pb-[60px] grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col">
                <h1 className="pb-4 text-[40px] text-[#fff] flex flex-col">
                  <span>{t("invitePage.title")}.</span>
                  <span>{t("invitePage.content")}</span>
                </h1>
                <div className="text-[16px] text-[#fff]">
                  {t("invitePage.sub-content")}
                </div>
              </div>
              <div className="hidden lg:block" >
                <img
                  className="w-full"
                  src={`${getStaticURL()}/assets/images/banner-offer.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-[10px] bg-[#1E2329] pb-10 px-5">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="my-12 text-[32px] text-[#fff]">
              {t("invitePage.howToInvite")}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-[#fff] ">
              <div>
                <img
                  className="w-full pb-4"
                  src={`${getStaticURL()}/assets/images/tutorial-step1.png`}
                  alt=""
                />
                <span className="text-[20px] ">{t("invitePage.step1")}</span>
              </div>
              <div>
                <img
                  className="w-full pb-4"
                  src={`${getStaticURL()}/assets/images/tutorial-step2.png`}
                  alt=""
                />
                <span className="text-[20px] ">{t("invitePage.step2")}</span>
              </div>
              <div>
                <img
                  className="w-full pb-4"
                  src={`${getStaticURL()}/assets/images/tutorial-step3.png`}
                  alt=""
                />
                <span className="text-[20px] ">{t("invitePage.step3")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default InviteFriendPage;
