import restConnector from "@/connectors/axiosRestConnector";

class ChatService {
  async getChat() {
    const { data } = await restConnector.get(`/chats`);
    return data;
  }

  async getListMessage(
    chatRoomId: string,
    pagination?: { limit: number; offset: number },
    position?: number
  ) {
    const { data } = await restConnector.get(`/chats/${chatRoomId}/messages`, {
      params: {
        pagination,
        position,
      },
    });
    return data;
  }

  async readMessages(chatRoomId: string) {
    const { data } = await restConnector.post(
      `/chats/${chatRoomId}/messages/read`
    );
    return data;
  }

  async sendMessage(chatRoomId?: string, payload?: any) {
    const { data } = await restConnector.post(
      `/chats/${chatRoomId}/messages`,
      payload
    );
    return data;
  }
}

export const chatService = new ChatService();
