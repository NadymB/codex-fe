/* eslint-disable @next/next/no-img-element */
"use client";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import { useEffect, useState } from "react";
import {
  generateRandomEmail,
  generateRandomPhoneNumber,
  generateRandomString,
  hidePhoneNumber,
} from "@/utils";
import {
  convertNumberToFormattedString,
  removeTrailingZeros,
} from "@/utils/converter";

const LeaderBoardPage = () => {
  const [listLeaderBoard, setListLeaderBoard] = useState<any>([]);

  useEffect(() => {
    let response = Array(197)
      .fill("")
      .map(() => {
        let type = Math.floor(Math.random() * 2);
        return {
          email: "",
          title:
            type == 1 ? generateRandomPhoneNumber() : generateRandomEmail(),
          income: Math.random() * 3000 + 196000,
          profit: Math.random() * 50 + 40,
        };
      });
    setListLeaderBoard(response.sort((a, b) => b.income - a.income));
  }, []);
  return (
    <div className="bg-black min-h-screen">
      <GoBack title={t("homePage.leaderBoard")} />
      <div className="flex flex-col items-center gap-4 p-4 bg-black">
        <img
          src={`/assets/images/best.webp`}
          alt="Vip"
          className="w-[384px] max-w-[80%]"
        />

        <div className="flex flex-col w-full  rounded">
          {/* rank-1 */}
          <div className="flex mt-2 p-2 bg-[#1c1c1e] bg-gradient-to-r from-[#3f2909]  to-[#3f290900] rounded ">
            <div className="">
              <div className="w-12 h-12 text-center text-[#fff]">
                <img
                  className="w-12 h-12"
                  src={`${getStaticURL()}/assets/images/rank_1.webp`}
                  alt=""
                />
              </div>
            </div>
            <div className="ml-4 w-full">
              <div className="mb-4 text-[#fff]">
                {generateRandomPhoneNumber()}
              </div>
              <div className="w-full grid grid-cols-2">
                <div className="w-full flex flex-col text-[14px]">
                  <span className="text-[#9ca3af] ">
                    {t("leaderBoardPage.profit7day")}
                  </span>
                  <span className="text-[#55af72] text-[14px]">
                    {(Math.random() * 50 + 40).toFixed(2)}%
                  </span>
                </div>
                <div className="w-full flex flex-col text-[14px]">
                  <span className="text-[#9ca3af] ">
                    {t("leaderBoardPage.income7day")}
                  </span>
                  <span className="text-[#fff] text-[14px]">
                    {convertNumberToFormattedString(
                      removeTrailingZeros(
                        (Math.random() * 3000 + 196000).toFixed(2)
                      )
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* rank-2 */}
          <div className="flex mt-2 p-2 bg-[#1c1c1e] bg-gradient-to-r from-[#5e5c5c]  to-[#3f290900] rounded ">
            <div className="">
              <div className="w-12 h-12 text-center text-[#fff]">
                <img
                  className="w-12 h-12"
                  src={`${getStaticURL()}/assets/images/rank_2.webp`}
                  alt=""
                />
              </div>
            </div>
            <div className="ml-4 w-full">
              <div className="mb-4 text-[#fff]">
                {generateRandomPhoneNumber()}
              </div>
              <div className="w-full grid grid-cols-2">
                <div className="w-full flex flex-col text-[14px]">
                  <span className="text-[#9ca3af] ">
                    {t("leaderBoardPage.profit7day")}
                  </span>
                  <span className="text-[#55af72] text-[14px]">
                    {(Math.random() * 50 + 40).toFixed(0)}%
                  </span>
                </div>
                <div className="w-full flex flex-col text-[14px]">
                  <span className="text-[#9ca3af] ">
                    {t("leaderBoardPage.income7day")}
                  </span>
                  <span className="text-[#fff] text-[14px]">
                    {convertNumberToFormattedString(
                      removeTrailingZeros(
                        (Math.random() * 3000 + 196000).toFixed(2)
                      )
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* rank-3 */}
          <div className="flex mt-2 p-2 bg-[#1c1c1e] bg-gradient-to-r from-[#4e2618]  to-[#3f290900] rounded ">
            <div className="">
              <div className="w-12 h-12 text-center text-[#fff]">
                <img
                  className="w-12 h-12"
                  src={`${getStaticURL()}/assets/images/rank_3.webp`}
                  alt=""
                />
              </div>
            </div>
            <div className="ml-4 w-full">
              <div className="mb-4 text-[#fff]">
                {generateRandomPhoneNumber()}
              </div>
              <div className="w-full grid grid-cols-2">
                <div className="w-full flex flex-col text-[14px]">
                  <span className="text-[#9ca3af] ">
                    {t("leaderBoardPage.profit7day")}
                  </span>
                  <span className="text-[#55af72] text-[14px]">
                    {Math.random() * 50 + 40}%
                  </span>
                </div>
                <div className="w-full flex flex-col text-[14px]">
                  <span className="text-[#9ca3af] ">
                    {t("leaderBoardPage.income7day")}
                  </span>
                  <span className="text-[#fff] text-[14px]">
                    {convertNumberToFormattedString(
                      removeTrailingZeros(
                        (Math.random() * 3000 + 196000).toFixed(2)
                      )
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {listLeaderBoard.map((item: any, index: number) => {
            return (
              <div key={index} className="flex mt-2 p-2 bg-[#1c1c1e]  rounded ">
                <div className="">
                  <div className="w-12 h-12 text-center text-[#fff]">
                    <span>{index + 3}</span>
                  </div>
                </div>

                <div className="ml-4 w-full">
                  <div className="mb-4 text-[#fff]">{item.title}</div>
                  <div className="w-full grid grid-cols-2">
                    <div className="w-full flex flex-col text-[14px]">
                      <span className="text-[#9ca3af] ">
                        {t("leaderBoardPage.profit7day")}
                      </span>
                      <span className="text-[#55af72] text-[14px]">
                        {item.profit.toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full flex flex-col text-[14px]">
                      <span className="text-[#9ca3af] ">
                        {t("leaderBoardPage.income7day")}
                      </span>
                      <span className="text-[#fff] text-[14px]">
                        {convertNumberToFormattedString(
                          removeTrailingZeros(item.income.toFixed(2))
                        )}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
