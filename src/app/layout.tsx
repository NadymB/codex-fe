import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/providers/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { Metadata } from "next";
import { getStaticURL } from "@/utils/constants";
import Head from "next/head";
import { NextSeo } from "next-seo";

export const metadata: Metadata = {
  title: "Green Software",
  description: `At Green Software, we appreciate passion, enthusiasm, creativeness and encourage every individuals to develop step by step, from good to great.`,
  openGraph: {
    title: "Green Software",
    description: ` At Green Software, we appreciate passion, enthusiasm, creativeness and encourage every individuals to develop step by step, from good to great.`,
    url: `${getStaticURL()}`,
    siteName: "Green Software",
    images: [
      {
        url: `${getStaticURL()}/assets/images/seo_logo.png`, // Must be an absolute URL
        width: 600,
        height: 400,
        alt: "Logo Green Software",
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
          title="Green Software"
          description=" At Green Software, we appreciate passion, enthusiasm, creativeness and encourage every individuals to develop step by step, from good to great."
          canonical={`${getStaticURL()}`}
          openGraph={{
            url: `${getStaticURL()}`,
            title: "Green Software",
            description: ` At Green Software, we appreciate passion, enthusiasm, creativeness and encourage every individuals to develop step by step, from good to great.`,
            images: [
              {
                url: `${getStaticURL()}/assets/images/seo_logo.png`,
                width: 600,
                height: 400,
                alt: "Banner Green Software",
                type: "image/png",
              },
            ],
            siteName: "Green Software",
          }}
        />
      </Head>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <ThemeProvider>
            <ToastContainer theme="dark" />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
