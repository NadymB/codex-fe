import React, { createContext, useState, ReactNode, useEffect } from "react";

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

export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
}: ChatProviderProps) => {
  const [countNewMessage, setCountNewMessage] = useState<number>(0);
  return (
    <ChatCtx.Provider value={{ countNewMessage, setCountNewMessage }}>
      {children}
    </ChatCtx.Provider>
  );
};
