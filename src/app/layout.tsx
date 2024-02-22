"use client";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/providers/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { useEffect } from "react";
import i18next from "i18next";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof localStorage !== "undefined") {
    const locale = localStorage.getItem("locale");
    if (locale && i18next.language && locale !== i18next.language) {
      i18next.changeLanguage(locale);
    }
  }
  return (
    <>
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
