"use client";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "@/components/authentication/AuthProvider";
import { ChatProvider } from "@/providers/ChatProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { WebSocketProvider } from "@/providers/WebSocketProvider";
import i18next from "i18next";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "../../i18n";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRerender, setIsRerender] = React.useState(false);
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
