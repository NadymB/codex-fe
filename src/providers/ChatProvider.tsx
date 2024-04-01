"use client";
import { FC, createContext, useState, ReactNode, useEffect } from "react";

interface ChatContextType {
  countNewMessage: number;
  setCountNewMessage: React.Dispatch<React.SetStateAction<number>>;
}

const defaultCtxVal: ChatContextType = {
  countNewMessage: 0,
  setCountNewMessage: () => {},
};

export const ChatCtx = createContext<ChatContextType>(defaultCtxVal);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: FC<ChatProviderProps> = ({
  children,
}: ChatProviderProps) => {
  const [countNewMessage, setCountNewMessage] = useState<number>(0);
  return (
    <ChatCtx.Provider value={{ countNewMessage, setCountNewMessage }}>
      {children}
    </ChatCtx.Provider>
  );
};
