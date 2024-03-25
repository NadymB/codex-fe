import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";
import { PRICE_TYPE } from "@/utils/constants";
import { BetType } from "@/utils/type";

export class TradeService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public getChartData = async (
    type: PRICE_TYPE,
    token: string,
    currentTradingSessionTime: number
  ) => {
    const { data } = await this.restConnector.get(
      `/price-feed/chart-data?type=${type}&itemName=${token}&intervalInMinutes=${currentTradingSessionTime}`
    );

    return data;
  };

  public placeOrders = async (value: BetType) => {
    const { data } = await this.restConnector.post(`/trades/orders/place`, {
      ...value,
    });
    return data;
  };

  public getOrders = async (pagination: { limit: number; offset: number }) => {
    const { data } = await this.restConnector.get(`/trades/orders`, {
      params: {
        limit: pagination?.limit,
        offset: pagination?.offset,
      },
    });
    return data;
  };
}

export const tradeService = new TradeService({ restConnector });
