import { TRADE_CURRENCY } from "@/utils/constants";
import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";

export class UserService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public getUserBalance = async (
    userId: string,
    token: TRADE_CURRENCY,
  ) => {
    const { data } = await this.restConnector.get(
      `/users/${userId}/balances?currency=${token}`,
    );

    return data;
  };
}

export const userService = new UserService({ restConnector });
