export enum PERMISSION_REQUIRED {
  TRADE = 'trade',
  CHAT = 'chat',
  LOGIN = 'login',
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  NOTIFICATION = 'notification',
}

export type Account = {
  id?: string;
  email?: string;
  username: string;
  phoneNumber?: string;
  address: string;
  accounttype: string;
  staffId?: string;
  bankName?: string;
  bankSubName?: string;
  bankSubCode?: string;
  bankNumber?: string;
  status: string;
  isPinSet: boolean;
  configMetadata?: {
    permissions: PERMISSION_REQUIRED [];
  },
  vipLevel?: number;
  kycLevel?: number;
};
export type DataLogin = {
  access_token: string;
  user: Account;
};
