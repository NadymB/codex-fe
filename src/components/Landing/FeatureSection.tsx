import { FeatureIAIcon } from "@/assets/icons/FeatureIAIcon";
import { FeatureMCSIcon } from "@/assets/icons/FeatureMCSIcon";
import { FeatureRAIcon } from "@/assets/icons/FeatureRAIcon";
import { FeatureRTIIcon } from "@/assets/icons/FeatureRTIIcon";
import { FeatureWalletIcon } from "@/assets/icons/FeatureWalletIcon";
import { SafeIcon } from "@/assets/icons/SafeIcon";
import React from "react";

export const FeatureSection = () => {
  const features = [
    {
      title: "Safe and secure",
      content:
        "Digital exchange is a digital assets using to secure transactions so there are generally fewer safeguards.",
      icon: <SafeIcon />,
    },
    {
      title: "Easy to create wallet",
      content:
        "Create your account. Hosted wallet, you don&apost need to share any personal info to create a custodial wallet.",
      icon: <FeatureWalletIcon />,
    },
    {
      title: "Reports & analytics",
      content:
        "Crypto fund report published by a cointelegraph research investigates provides benefits to its users.",
      icon: <FeatureRAIcon />,
    },
    {
      title: "Integrated application",
      content:
        "An integrated application is a stand-alone application that can seamlessly integrate into any Fugu project.",
      icon: <FeatureIAIcon />,
    },
    {
      title: "Real-time interest",
      content:
        "A real interest rate is the interest rate that takes inflation into account. This means it adjusts for inflation.",
      icon: <FeatureRTIIcon />,
    },
    {
      title: "Multi curency support",
      content:
        "Multi-currency support means that shoppers can pay for your products or services using the currency.",
      icon: <FeatureMCSIcon />,
    },
  ];

  return (
    <div className=" relative pb-[55px] pt-[70px]  lg:pb-[95px] lg:pt-[110px]    mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate">
      <div className="flex flex-col text-center max-w-[708px] mb-[50px] lg:mb-[75px] mx-auto">
        <h2 className="text-[#fff] text-[32px] mt-0 mb-2 leading-[1.2] font-[500]">
          Innovative features to buy, trade and invest in digital
        </h2>
        <div className="text-[#fff]">
          A digital exchange is a digital & virtual currency that is secured by
          CME which makes it nearly impossible to counterfeit or double-spend.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          return (
            <div
              key={idx}
              className="p-10  flex flex-col items-center justify-center text-center rounded feature-box-bg group "
            >
              <div className="w-[80px] h-[80px] rounded-[50%] flex items-center justify-center duration-300 ease-in-out bg-[#f7a600] fill-[#fff] mb-[30px] group-hover:bg-[#fff] group-hover:fill-[#f7a600] ">
                {feature.icon}
              </div>
              <h4 className="text-[#fff] mb-[15px] text-[24px] font-semibold">
                {feature.title}
              </h4>
              <span className="text-[#fff]">{feature.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
