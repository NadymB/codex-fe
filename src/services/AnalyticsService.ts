import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";

export class AnalyticsService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public getDailyProfit = async () => {
    const { data } = await this.restConnector.get(
      `/analytics/daily-profit`
    );

    return data;
  };

}

export const analyticsService = new AnalyticsService({ restConnector });
