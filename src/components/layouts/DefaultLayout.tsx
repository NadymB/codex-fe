"use client";

import { useContext, useEffect, useRef, useState } from "react";

import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { MenuBar } from "./MenuBar";

import { useRouter } from "next/navigation";

export const DefaultLayout = ({
  children,
  containerStyle,
  isShowMenubar = true,
  childrenMenuBar,
}: {
  children: React.ReactNode;
  containerStyle: string;
  isShowMenubar?: boolean;
  childrenMenuBar?: React.ReactNode;
}) => {
  const router = useRouter();
  const menuBarRef = useRef<any>(null);
  const { webSocket, register } = useContext(WebSocketCtx);
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
      <div className="w-full h-full">
        <div
          className="relative w-full mx-auto overflow-auto "
          style={{ height: `calc(100% - ${heightMenuBar}px)` }}
          id="box"
        >
          {children}
        </div>
        {isShowMenubar && (
          <div id="menu-bar" ref={menuBarRef} className="fixed w-full bottom-0 left-0 z-50">
            {childrenMenuBar}
            <MenuBar />
          </div>
        )}
      </div>
    </main>
  );
};
