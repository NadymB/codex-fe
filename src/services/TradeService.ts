import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";
import { PRICE_TYPE } from "@/utils/constants";

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

  public placeOrders = async (
    amount: number,
    pairType: PRICE_TYPE,
    pairName: string,
    profitPercentage: number,
    betPercentage: number,
    timeoutInMinutes: number,
    position: "long" | "short"
  ) => {
    const { data } = await this.restConnector.post(`/trades/orders/place`, {
      amount,
      betPercentage,
      timeoutInMinutes,
      profitPercentage,
      pairType,
      pairName,
      position,
    });
    return data;
  };
}

export const tradeService = new TradeService({ restConnector });
