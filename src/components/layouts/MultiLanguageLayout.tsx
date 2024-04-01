"use client";

import i18next from "i18next";
import "../../../i18n";
import { useEffect } from "react";

export const MultiLanguageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const locale = window.localStorage.getItem("locale");
      if (locale && i18next.language && locale !== i18next.language) {
        i18next.changeLanguage(locale);
      }
    }
  }, []);
  return <>{children}</>;
};
