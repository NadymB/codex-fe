import { AxiosInstance } from "axios";
import restConnector from "../connectors/axiosRestConnector";
import { PaginationQuery, TWithdrawalRequest } from "@/models/Transaction";

export class TransactionService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public createWithdrawalRequest = async (values: TWithdrawalRequest) => {
    const { data } = await this.restConnector.post(`/transactions/withdraw`, {
      ...values,
    });

    return data;
  };

  public getListTransactions = async (paginate: PaginationQuery) => {
    const params = { ...paginate };
    const { data } = await this.restConnector.get(`/transactions`, {
      params,
    });

    return data;
  };
}

export const transactionService = new TransactionService({ restConnector });
