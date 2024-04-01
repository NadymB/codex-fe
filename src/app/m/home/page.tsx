/* eslint-disable @next/next/no-img-element */
"use client";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useContext, useEffect, useState } from "react";
import Header from "@/components/layouts/Header";
import { WS_TOPIC, getStaticURL } from "@/utils/constants";
import { NextIcon } from "@/assets/icons/NextIcon";
import { DepositIcon } from "@/assets/icons/DepositIcon";
import { TelesaleIcon } from "@/assets/icons/TelesaleIcon";
import { LoudspeakerIcon } from "@/assets/icons/LoudspeakerIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import Link from "next/link";
import { t } from "i18next";
import { priceFeedService } from "@/services/PriceFeedService";
import FeatureSection from "@/components/Home/FeatureSection";
import { chatService } from "@/services/ChatService";
import { PopularTransactionPair } from "@/components/Home/PopularTransactionPair";
import { ChatCtx } from "@/providers/ChatProvider";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { countNewMessage, setCountNewMessage } = useContext(ChatCtx);
  const { currentUser } = useAuth();

  const { webSocket } = useContext(WebSocketCtx);

  const handleGetUnreadMessage = async () => {
    try {
      if (currentUser) {
        const response = await chatService.getUnreadMessage();
        if (response.success) {
          setCountNewMessage(response.data.total);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetUnreadMessage();
  }, [currentUser]);
  useEffect(() => {
    if (webSocket) {
      webSocket.on(WS_TOPIC.SEND_MESSAGE, (data) => {
        setCountNewMessage((prev) => prev + 1);
      });
    }
    return () => {
      webSocket?.off(WS_TOPIC.SEND_MESSAGE);
    };
  }, [webSocket]);

  return (
    <DefaultLayout containerStyle="bg-[#000000] dark:bg-[#000000]">
      <Header />
      <div>
        <div className="w-full">
          <img
            className="w-full"
            src={`${getStaticURL()}/assets/images/home_banner.png`}
            alt=""
          />
        </div>
        <div className="flex gap-4 p-4">
          <Link
            href={"/m/deposit"}
            className=" flex-1 flex items-center justify-between px-4 py-2 rounded bg-[#202125] hover:bg-[#121212] duration-200 ease-in-out"
          >
            <div className="flex items-center gap-3">
              <DepositIcon />
              <span className="text-[#fff]">{t("homePage.deposit")}</span>
            </div>
            <NextIcon />
          </Link>
          <Link
            href={"/m/service"}
            className=" flex-1 flex items-center justify-between px-4 py-2 rounded bg-[#3D5AFE] hover:bg-[#2a3eb1] duration-200 ease-in-out"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <TelesaleIcon />
                {countNewMessage > 0 && (
                  <div className="absolute top-0 right-0 w-5 h-5 bg-[red] text-[#fff] rounded-full flex items-center justify-center ">
                    {countNewMessage}
                  </div>
                )}
              </div>
              <span className="text-[#fff]">{t("homePage.service")}</span>
            </div>
            <NextIcon />
          </Link>
        </div>
        <PopularTransactionPair />
        <div className="flex justify-between items-center px-4 ">
          <LoudspeakerIcon />
          <Link href={"/m/announcement"}>
            <MenuIcon />
          </Link>
        </div>
        <FeatureSection />
      </div>
    </DefaultLayout>
  );
}
