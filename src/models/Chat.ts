export type Messages = {
  chatId: string;
  content: {
    images: Image[];
    text: string;
  };
  createdAt: string;
  position: number;
  senderId: string;
  type: string;
  updatedAt: string;
  _id: string;
};

type Image = {
  original: string;
}