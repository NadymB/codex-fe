"use client";

import { useContext, useEffect, useRef, useState } from "react";

import "../../../i18n";
import { MenuBar } from "./MenuBar";
import { WebSocketCtx } from "@/providers/WebSocketProvider";

export const DefaultLayout = ({
  children,
  pageTitle,
  containerStyle,
  headerStyle,
  isShowMenubar = true,
  childrenMenuBar,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  containerStyle: string;
  headerStyle?: string;
  isShowMenubar?: boolean;
  childrenMenuBar?: React.ReactNode;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      document.getElementById("input-search")?.focus();
    }
  };
  const menuBarRef = useRef<any>(null);
  const { webSocket, register } = useContext(WebSocketCtx);
  const [heightMenuBar, setHeightMenuBar] = useState(0);

  useEffect(() => {
    if (menuBarRef.current) {
      const height = menuBarRef.current.offsetHeight;
      setHeightMenuBar(height);
    }
    register("abc");
  }, []);
  console.log({ webSocket });
  webSocket?.on("send_message", (payload) => {
    console.log(payload);
  });
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
        {isShowMenubar && (
          <div ref={menuBarRef} className="fixed w-full bottom-0 left-0 z-50">
            {childrenMenuBar}
            <MenuBar />
          </div>
        )}
      </div>
    </main>
  );
};
