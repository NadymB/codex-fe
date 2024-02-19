"use client";

import { useEffect, useRef, useState } from "react";

import Header from "./Header";
import "../../../i18n";
import { Footer } from "./Footer";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { MenuBar } from "./MenuBar";

export const DefaultLayout = ({
  children,
  pageTitle,
  containerStyle,
  headerStyle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  containerStyle: string;
  headerStyle?: string;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      document.getElementById("input-search")?.focus();
    }
  };
  const menuBarRef = useRef<any>(null);
  const [heightMenuBar, setHeightMenuBar] = useState(0);

  useEffect(() => {
    if (menuBarRef.current) {
      const height = menuBarRef.current.offsetHeight;
      setHeightMenuBar(height);
    }
  }, []);
  return (
    <main
      className={`ease-soft-in-out relative h-screen transition-all duration-200 ${containerStyle}`}
    >
      <div className="w-full h-full" onKeyDown={handleKeyPress} tabIndex={50}>
        <div
          className="relative w-full mx-auto overflow-auto "
          style={{ height: `calc(100% - ${heightMenuBar}px)` }}
          id="box"
        >
          {children}
        </div>
        <div ref={menuBarRef} className="fixed w-full  bottom-0 left-0">
          <MenuBar />
        </div>
      </div>
    </main>
  );
};
