import { TRADE_CURRENCY } from "@/utils/constants";
import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";

export class UserService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public getUserBalance = async (token: TRADE_CURRENCY) => {
    const { data } = await this.restConnector.get(
      `/users/balances?currency=${token}`
    );

    return data;
  };

  public getBalanceHistory = async (token: TRADE_CURRENCY,
    pagination: { limit: number; offset: number }
  ) => {
    const { data } = await this.restConnector.get(
      `/users/balances/history?currency=${token}`,
      {
        params: {
          limit: pagination?.limit,
          offset: pagination?.offset,
        },
      }
    );

    return data;
  };
}

export const userService = new UserService({ restConnector });
