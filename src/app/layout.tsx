import { ToastContainer } from "react-toastify";

import { AuthProvider } from "@/components/authentication/AuthProvider";
import { ChatProvider } from "@/providers/ChatProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { WebSocketProvider } from "@/providers/WebSocketProvider";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { Metadata } from "next";
import { getStaticURL } from "@/utils/constants";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MultiLanguageLayout } from "@/components/layouts/MultiLanguageLayout";

export const metadata: Metadata = {
  title: "Futures & Options Trading for Risk Management - CME Group",
  description: "Futures & Options Trading for Risk Management - CME Group",
  openGraph: {
    title: "Futures & Options Trading for Risk Management - CME Group",
    description: "Futures & Options Trading for Risk Management - CME Group",
    url: `${getStaticURL()}/assets/images/Cme.svg`,
    // siteName: "Next.js",
    images: [
      {
        url: `${getStaticURL()}/assets/images/Cme.svg`, // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Logo CME Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <NextSeo
          title="Futures & Options Trading for Risk Management - CME Group"
          description="Futures & Options Trading for Risk Management - CME Group"
          canonical={`${getStaticURL()}/assets/images/cme.svg`}
          openGraph={{
            url: `${getStaticURL()}/assets/images/cme.svg`,
            title: "Futures & Options Trading for Risk Management - CME Group",
            description:
              "Futures & Options Trading for Risk Management - CME Group",
            images: [
              {
                url: `${getStaticURL()}/assets/images/cme.svg`,
                width: 800,
                height: 600,
                alt: "CME Group",
              },
            ],
            siteName:
              "Futures & Options Trading for Risk Management - CME Group",
          }}
        />
      </Head>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <WebSocketProvider>
            <AuthProvider>
              <ChatProvider>
                <ThemeProvider>
                  <ToastContainer theme="dark" />
                  <MultiLanguageLayout>
                    <main>{children}</main>
                  </MultiLanguageLayout>
                </ThemeProvider>
              </ChatProvider>
            </AuthProvider>
          </WebSocketProvider>
        </body>
      </html>
    </>
  );
}
