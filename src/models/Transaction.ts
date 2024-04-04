export type TWithdrawalRequest = {
  amount: number;
  currency: string;
  pin: string;
  userAccountId: string;
};

export type PaginationQuery = {
  sort?: string;
  limit: number;
  offset: number;
};

export enum TRANSACTION_STATUS {
  FAILED = "failed",
  REJECTED = "rejected",
  PENDING = "pending",
  AUDITING_IN_PROGRESS = "auditing_in_progress",
  PAYMENT_PROCESSING = "payment_processing",
  COMPLETED = "completed",
}
