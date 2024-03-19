import { t } from "i18next";
import { IRightInterests, RightInterestItem } from "./RightInterestsItem";
import Link from "next/link";
import Icon from "../Icon";
import KycPage from "@/app/m/setting/kyc/page";
import { useState } from "react";
import { KycIntroduceLv1 } from "../kyc/KycIntroduceLv1";
import { KycIntroduceLv2 } from "../kyc/KycIntroduceLv2";

interface IAuthenticationCard {
  level: string;
  textLevel: string;
  rightInterstData: IRightInterests[];
  methods: {
    title: string;
    path: { d: string; fill: string }[];
    width: number;
    height: number;
    viewBox: string;
  }[];
  authenticationBtn: string;
  link: string;
}

export const AuthenticationCard = ({
  level,
  textLevel,
  rightInterstData,
  methods,
  authenticationBtn,
  link,
}: IAuthenticationCard) => {
  const [opentIntroduce, setOpenIntroduce] = useState(false);
  return (
    <>
      <div className="p-4 bg-[#1c1c1e] rounded">
        <h2 className="text-xl text-white pb-8 border-b border-[#ffffff1a]">
          {textLevel}
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white">
              {t("authentication.rightsAndInterests")}
            </span>
            <div className="flex justify-between">
      <span className="text-sm text-[#888]"></span>
      <span className="text-sm text-white"></span>
    </div>
          </div>
          <div className="flex gap-4">
            {methods.map((method, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-base text-white"
              >
                <Icon
                  d={method.path}
                  width={method.width}
                  height={method.height}
                  viewBox={method.viewBox}
                />
                <span>{t(`authentication.${method.title}`)}</span>
              </div>
            ))}
          </div>
          <div
            onClick={() => setOpenIntroduce(true)}
            className="py-[6px] mt-2 px-4 bg-[#3d5afe] hover:bg-[#2a3db0] rounded text-center text-white text-sm font-medium"
          >
            {authenticationBtn}
          </div>
        </div>
      </div>
      <div
        className={`fixed ${opentIntroduce ? "top-0" : "top-[100%]"} left-0 z-40 w-full h-screen overflow-auto duration-200 ease-in-out`}
      >
        {level === "lv1" ? (
          <KycIntroduceLv1 onClose={() => setOpenIntroduce(false)} />
        ) : level === "lv2" ? (
          <KycIntroduceLv2 onClose={() => setOpenIntroduce(false)} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
