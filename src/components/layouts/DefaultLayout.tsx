"use client";

import { useContext, useEffect, useRef, useState } from "react";

import "../../../i18n";
import { MenuBar } from "./MenuBar";
import { WebSocketCtx } from "@/providers/WebSocketProvider";

// import { useAuth } from "../../hooks/useAuth";
import restConnector from "@/connectors/axiosRestConnector";
import { authService } from "@/services/AuthServices";
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
  
  const router = useRouter()
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

  useEffect(() => {
    (async () => {
      // const admin = await getCurrentAdmin();
      const admin = window?.sessionStorage.getItem("admin");
      if (!admin || admin !== "true") {
        router.replace("/m/login");
      }
    })();
  }, []);
  restConnector.interceptors.response.use(
    (response) => {
      if (!response.data.success && response.data.httpCode === 403) {
        authService.logout();
        router.replace("/m/login");
      }
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        authService.logout();
        router.replace("/m/login");
      }
      return error;
    }
  );
  
  return (
    <main
      className={`ease-soft-in-out relative h-screen transition-all duration-200 ${containerStyle}`}
    >
      <div className="w-full h-full" >
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
