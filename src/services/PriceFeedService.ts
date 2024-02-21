import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";
import { PRICE_TYPE } from "@/utils/constants";

export class PriceFeedService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public getCommonPriceFeed = async () => {
    const { data } = await this.restConnector.get("/price-histories/common");

    return data;
  };

  public getPriceFeed = async (type: PRICE_TYPE) => {
    const { data } = await this.restConnector.get(
      `/price-histories/feed?type=${type}`,
    );

    return data;
  };
}

export const priceFeedService = new PriceFeedService({ restConnector });
