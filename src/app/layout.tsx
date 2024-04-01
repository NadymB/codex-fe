"use client";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "@/components/authentication/AuthProvider";
import { ChatProvider } from "@/providers/ChatProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { WebSocketProvider } from "@/providers/WebSocketProvider";
import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../../i18n";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRerender, setIsRerender] = useState(false);
  if (typeof window !== "undefined" && window.localStorage) {
    const locale = window.localStorage.getItem("locale");
    if (locale && i18next.language && locale !== i18next.language) {
      i18next.changeLanguage(locale);
      setIsRerender(!isRerender);
    }
  }

  return (
    <>
      <html lang="en">
        <Head>
          <title>
            Futures & Options Trading for Risk Management - CME Group
          </title>
          <meta
            name="description"
            content="Futures & Options Trading for Risk Management - CME Group"
          />
          <meta
            property="og:image"
            content={`${getStaticURL()}/assets/images/cme.svg`}
          />
        </Head>
        <body suppressHydrationWarning={true}>
          <WebSocketProvider>
            <AuthProvider>
              <ChatProvider>
                <ThemeProvider>
                  <ToastContainer theme="dark" />
                  <main>{children}</main>
                </ThemeProvider>
              </ChatProvider>
            </AuthProvider>
          </WebSocketProvider>
        </body>
      </html>
    </>
  );
}
