/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const ClientSection = () => {
  return (
    <div className=" relative  pb-20  lg:pb-32  mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate">
      <div className="text-center text-[24px] text-[#fff] font-semibold mb-[60px]">
        Trusted Over 80k+ Companies in the World
      </div>
      <div className="relative w-full overflow-hidden">
        <div className=" relative flex items-center">
          <div className="scroll-partner flex items-center ">
            <div className="flex items-center">
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client1.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client2.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client3.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client4.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client5.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client1.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client2.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client3.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client4.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client5.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client1.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client2.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client3.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client4.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client5.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client1.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client2.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client3.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client4.png`}
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  src={`${getStaticURL()}/assets/images/client5.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
