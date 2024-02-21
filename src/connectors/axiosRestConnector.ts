import axios from "axios";

const restConnector = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STATIC_API_URL,
});

export default restConnector;
