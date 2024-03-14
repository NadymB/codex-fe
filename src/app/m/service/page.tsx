"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { ImageIcon } from "@/assets/icons/ImageIcon";
import { SendIcon } from "@/assets/icons/SendIcon";
import { Logo } from "@/components/Logo";
import { InComingMessage } from "@/components/chat/InComingMessage";
import { OutComingMessage } from "@/components/chat/OutComingMessage";
import { AuthenticationLayout } from "@/components/layouts/AuthenticationLayout";
import { useAuth } from "@/hooks/useAuth";
import { Messages } from "@/models/Chat";
import { Account } from "@/models/User";
import { WebSocketCtx } from "@/providers/WebSocketProvider";
import { chatService } from "@/services/ChatService";
import { WS_TOPIC } from "@/utils/constants";
import { CircularProgress, TextField, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { IncomingMessage } from "http";

import i18next from "i18next";
import { useRouter } from "next/navigation";
import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { UploadImage } from "./uploadImage";
import { useAliUpload } from "@/services/CloundService";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3D5AFE",
  },
  "& label": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
      borderWidth: 1,
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3D5AFE",
      borderWidth: 1,
    },
  },
});
const ServicePage = () => {
  const [isShouldScrollBottom, setIsShouldScrollBottom] = useState(true);
  const { currentUser } = useAuth();
  const { onAliUpload } = useAliUpload();
  const { webSocket } = useContext(WebSocketCtx);
  const [chatRoomId, setChatRoomId] = useState();
  const router = useRouter();
  const headerRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const messageListRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [heightHeader, setHeightHeader] = useState(0);
  const [heighInput, setHeighInput] = useState(0);
  const [listMessage, setListMessage] = useState<
    { message: Messages; sender: Account }[]
  >([]);
  const [totalMessage, setTotalMessages] = useState(0);
  const [{ offset, limit }, setPaginations] = useState({
    offset: 0,
    limit: 20,
  });
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeightHeader(height);
    }
    if (inputRef.current) {
      const height = inputRef.current.offsetHeight;
      setHeighInput(height);
    }
  }, []);

  const handleSendMessage = async ({
    content = "",
    images = [],
  }: {
    content?: string;
    images?: string[];
  }) => {

    if (content.trim() !== "" || (images.length > 0 && chatRoomId)) {
      const newMessage = {
        content,
        images,
      };

      const data = await chatService.sendMessage(chatRoomId, newMessage);

      setInputMessage("");
      setIsShouldScrollBottom(true);
    }
  };

  const scrollToBottom = () => {
    const lastMessage = messageListRef.current.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView({ block: "end" });
    }
  };
  const handleFileChange = async (event: any) => {
    const imgUpload = UploadImage(event);
    if (imgUpload.length !== 0) {
      const uploadedImages = await onAliUpload(
        imgUpload,
        "messageImage",
        `message-image`
      );
      let images = [];

      if (uploadedImages) {
        images = uploadedImages.map((image: any) => image.url);
        handleSendMessage({ images: images });
      } else {
        throw new Error("");
      }
    }
    if (imgUpload.length === 0) {
      return;
    }
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage({ content: inputMessage });
    }
  };
  //  HANDLE GET CHAT ROOM
  const handleGetChatRoomId = async () => {
    const chatRoom = await chatService.getChat();
    setChatRoomId(chatRoom.data._id);
  };
  const getListMessage = async (chatRoomId: string) => {
    try {
      const messages = await chatService.getListMessage(chatRoomId);
      setListMessage(messages.data.rows);
      console.log(messages.data.total);
      setTotalMessages(messages.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  // HANDLE FETCH MESSAGES ON SCROLL
  const fetchMessagesOnScroll = async (
    chatRoomId: string,
    pagination: { limit: number; offset: number }
  ) => {
    setLoadingMore(true);
    if (loadingMore || offset >= totalMessage) {
      setLoadingMore(false);
      return;
    }
    const position: number =
      listMessage[listMessage.length - 1].message.position;

    try {
      const response = await chatService.getListMessage(
        chatRoomId,
        pagination,
        position
      );
      if (response.success) {
        setListMessage((preMessages) => [
          ...preMessages,
          ...response.data.rows,
        ]);
        readMessages(chatRoomId);
        setLoadingMore(false);
        setPaginations({
          limit,
          offset: offset + limit,
        });
        setIsShouldScrollBottom(false);
      }
    } catch (error) {
      console.log(error);
      setLoadingMore(false);
    }
  };
  // HANDLE READ MESSAGE
  const readMessages = async (chatRoomId: string) => {
    await chatService.readMessages(chatRoomId);
  };

  useEffect(() => {
    if (isShouldScrollBottom) {
    scrollToBottom();
    }
  }, [listMessage]);

  useEffect(() => {
    handleGetChatRoomId();
  }, []);

  useEffect(() => {
    if (chatRoomId) {
      getListMessage(chatRoomId);
      readMessages(chatRoomId);
    }
  }, [chatRoomId]);

  useEffect(() => {
    if (webSocket) {
      webSocket.on(WS_TOPIC.SEND_MESSAGE, (data) => {
        if (data.chatId === chatRoomId) {
          setListMessage((prev) => [data.message, ...prev]);
          // readMessages();
        }
      });
    }
    return () => {
      webSocket?.off(WS_TOPIC.SEND_MESSAGE);
    };
  }, [webSocket, chatRoomId]);

  useEffect(() => {
    const messageContainer = messageListRef.current;
    if (chatRoomId && messageContainer) {
      const handleScroll = () => {
        console.log(messageContainer.scrollTop);
        if (messageContainer.scrollTop === 0) {
          fetchMessagesOnScroll(chatRoomId, { limit, offset:offset+limit });
          messageListRef.current.scrollTo({ top: '1px' });
        }
      };
      messageContainer.addEventListener("scroll", handleScroll);

      return () => {
        messageContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [chatRoomId, totalMessage , offset]);
  return (
    <AuthenticationLayout>
    <div className="h-screen overflow-hidden bg-[#1C1C1E]">
      <div
        ref={headerRef}
        className="fixed top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2"
      >
        <div className="cursor-pointer" onClick={() => router.back()}>
          <BackIcon />
        </div>
        <span className="text-[#fff]">{i18next.t("servicePage.title")}</span>
      </div>
      <div
        ref={messageListRef}
        className=" relative overflow-auto flex flex-col px-4 py-4"
        style={{
          height: `calc(100% - ${heightHeader + heighInput + 10}px)`,
          marginTop: `${heightHeader}px`,
          marginBottom: `${heighInput}px`,
          scrollBehavior: "smooth",
        }}
      >
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#22C55E]"></div>
        <div>
          <div className="flex flex-col justify-center items-center pt-4 mb-4">
            <div className="rounded-lg overflow-hidden mb-4">
              <Logo />
            </div>
          </div>
          <div className="text-[#fff] text-[18px] font-bold text-center my-2">
            {i18next.t("servicePage.onlineService")}
          </div>
          <div className="text-[#9CA3AF] text-center">
            {i18next.t("servicePage.onlineServiceContent")}
          </div>
          {loadingMore && (
            
            <div className="flex items-center justify-center"><CircularProgress size={18} /></div>
          )}
          <div className="flex flex-col mt-5">
            {[...listMessage].reverse().map((data, index) => {
              if (data?.sender?.id === currentUser?.id) {
                return (
                  <Fragment key={index}>
                    {" "}
                    <OutComingMessage
                      message={data.message}
                      sender={data.sender}
                    />
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={index}>
                    {" "}
                    <InComingMessage message={data.message} />
                  </Fragment>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div
        ref={inputRef}
        className="fixed bottom-0 left-0 w-full px-2 py-2  bg-[#000000] flex items-center h-auto"
      >
        <div className="relative  flex flex-col justify-center rounded-md w-full bg-[#1D1C22]  ">
          <CssTextField
            placeholder={i18next.t("servicePage.placeholderMessage")}
            id="outlined-multiline-flexible"
            multiline
            maxRows={4}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <input
          ref={imageRef}
          type="file"
          accept="image/*"
          name="image"
          id="imgUpload"
          onChange={handleFileChange}
          hidden
        />
        <IconButton
          size="large"
          onClick={() => {
            return imageRef.current && imageRef.current.click();
          }}
        >
          <ImageIcon />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => handleSendMessage({ content: inputMessage })}
        >
          <SendIcon />
        </IconButton>
      </div>
    </div>
    </AuthenticationLayout>
  );
};
export default ServicePage;
