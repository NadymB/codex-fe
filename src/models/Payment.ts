export enum WITHDRAW_TYPE {
  FIAT_CURRENCY = "fiat_currency",
  CRYPTO_CURRENCY = "crypto_currency",
}

export interface TPaymentInfo {
  type: WITHDRAW_TYPE;
  country?: string;
  bankName?: string;
  bankAccount?: string;
  address?: string;
  phoneNumber?: string;
  bankNumber?: string;
  nationalIdCard?: string;
  cryptoCurrency?: string;
  walletAddress?: string;
}

export enum WITHDRAWAL_ACCOUNT_STATUS {
  APPROVED = "approved",
  PENDING = "pending",
  REJECTED = "rejected",
}
