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
}

export const tradeService = new TradeService({ restConnector });
