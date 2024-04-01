/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { Metadata } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import LandingPage from "./landing/page";

export const metadata: Metadata = {
  title: "Futures & Options Trading for Risk Management - CME Group",
  description: "Futures & Options Trading for Risk Management - CME Group",
  openGraph: {
    title: "Futures & Options Trading for Risk Management - CME Group",
    description: "Futures & Options Trading for Risk Management - CME Group",
    url: `${getStaticURL()}/assets/images/cme.svg`,
    // siteName: "Next.js",
    images: [
      {
        url: `${getStaticURL()}/assets/images/cme.svg`, // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Logo CME Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
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
      <LandingPage />
    </>
  );
}
