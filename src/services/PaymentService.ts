import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";
import { TPaymentInfo } from "@/models/Payment";

export class PaymentService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public getPaymentInfo = async () => {
    const { data } = await this.restConnector.get(
      `/users/withdrawal-account`
    );

    return data;
  };

  public createPaymentInfo = async (values: TPaymentInfo) => {
    const { data } = await this.restConnector.post(
      `/users/withdrawal-account`, values
    );

    return data;
  };
}

export const paymentService = new PaymentService({ restConnector });
