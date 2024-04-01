"use client";
import { FC, createContext, useState, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

interface WebSocketContextType {
  webSocket: Socket | null;
  register: (accessToken: string) => void;
}

const defaultCtxVal: WebSocketContextType = {
  webSocket: null,
  register: (accessToken: string) => {},
};

export const WebSocketCtx = createContext<WebSocketContextType>(defaultCtxVal);

interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: FC<WebSocketProviderProps> = ({
  children,
}: WebSocketProviderProps) => {
  const [webSocket, setWebSocket] = useState<Socket | null>(null);
  const URL = process.env.NEXT_PUBLIC_SOCKET_URL as string;

  const register = async (accessToken: string) => {
    setWebSocket(
      io(URL, {
        transports: ["websocket"],
        path: "/ws",
        auth: {
          authorization: `Bearer ${accessToken}`,
        },
        query: { role: "user" },
      }),
    );
  };

  return (
    <WebSocketCtx.Provider value={{ webSocket, register }}>
      {children}
    </WebSocketCtx.Provider>
  );
};
