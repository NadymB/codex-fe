import { AvatarIcon } from "@/assets/icons/AvatarIcon";
import { FeatureIAIcon } from "@/assets/icons/FeatureIAIcon";
import { FeatureMCSIcon } from "@/assets/icons/FeatureMCSIcon";
import { FeatureRAIcon } from "@/assets/icons/FeatureRAIcon";
import { FeatureRTIIcon } from "@/assets/icons/FeatureRTIIcon";
import { FeatureWalletIcon } from "@/assets/icons/FeatureWalletIcon";
import { SafeIcon } from "@/assets/icons/SafeIcon";
import { StartIcon } from "@/assets/icons/StartIcon";
import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import React from "react";

export const TestimonialSection = () => {
  const features = [
    {
      avatar: getStaticURL() + "/assets/images/author1.webp",
      position: "Founder @ Company",
      username: "Karen Lynn",
      comment:
        "“I found EUREX very professional and trustworthy during my assets trading duration of 147 days. They are very honest and trusted.”",
      icon: <SafeIcon />,
      start: 5,
    },
    {
      avatar: getStaticURL() + "/assets/images/author2.webp",
      position: "Subash Rajendran",
      username: "Software engineer",
      comment:
        "“100% Trusted. Very legit in digital world. So far I&aposm satisfied with EUREX. I just wish this will continue at this way.”",
      icon: <FeatureWalletIcon />,
      start: 5,
    },
    {
      avatar: getStaticURL() + "/assets/images/author3.webp",
      position: "Businessman",
      username: "Milan Milenkovic",
      comment:
        "“The best place to start your trading path, thank you for support. Its a safe passive income strategy and will be multiply over time 😍.”",
      icon: <FeatureRAIcon />,
      start: 5,
    },
    {
      avatar: getStaticURL() + "/assets/images/author4.webp",
      position: "UI/UX Designer",
      username: "Francois Malan",
      comment:
        "“Best digital scam investigator. It took less than 24h and gave all the details about the scammer and guided me. My heartfull thanks 💗 ”",
      icon: <FeatureIAIcon />,
      start: 5,
    },
    {
      avatar: getStaticURL() + "/assets/images/author5.webp",
      position: "Manager @ Company",
      username: "UI/UX Designer",
      comment:
        "“Trustable ☺️ Best way to earn passive income. Everything was well explained and it was easy to follow their clear. Very legit in digital world.”",
      icon: <FeatureRTIIcon />,
      start: 5,
    },
    {
      avatar: getStaticURL() + "/assets/images/author6.webp",
      position: "WP Developer",
      username: "Abdul Wadud",
      comment:
        "“More than just satisfied.Trustable site and the owner is very friendly & calm. And it’s great! The 0,5-1% daily on average is the target.”",
      icon: <FeatureMCSIcon />,
      start: 5,
    },
  ];

  return (
    <div className=" relative pb-[55px] pt-[70px]  lg:pb-[95px] lg:pt-[110px]    mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate">
      <div className="flex flex-col text-center max-w-[708px] mb-[50px] lg:mb-[75px] mx-auto">
        <h2 className="text-[#fff] text-[32px] mt-0 mb-2 leading-[1.2] font-[500]">
          Users around the world have a great experience with CME
        </h2>
        <div className="text-[#fff]">
          CME is a place of trust for millions of people. Our customer reviews
          overall and is rated just 4.5 out of 5 stars on Trustpilot. It is the
          right place for you.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((comment, idx) => {
          return (
            <div
              key={idx}
              className="p-10  flex flex-col justify-center rounded bg-[#26242c] group "
            >
              <div className="flex items-center  pl-8 mb-6 ">
                {Array(comment.start)
                  .fill(1)
                  .map(() => {
                    return (
                      <div key={idx}>
                        <StartIcon />
                      </div>
                    );
                  })}
              </div>
              <span className="text-[#fff]">{comment.comment}</span>
              <div className="flex gap-5 mt-6">
                <Image src={comment.avatar} alt="avatar" className="rounded-full" height={60} width={60} />
                <div className="flex flex-col">
                  <span className="text-[#fff] text-[20px] font-semibold">
                    - {comment.username}
                  </span>
                  <span className="text-[#fff] text-[14px] opacity-70">
                    {comment.position}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-14">
        <div className="relative group  w-fit flex items-center justify-center cursor-pointer ">
          <div className="absolute top-0 left-0 group-hover:top-[5px] group-hover:left-[5px] bg-[#fff] duration-300 ease-in-out w-full h-full rounded-[4px]"></div>
          <div className="relative text-[#000] bg-[#f7a600] px-[36px] py-4 font-bold  rounded-[4px]">
            View All Reviews
          </div>
        </div>
      </div>
    </div>
  );
};
