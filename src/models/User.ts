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
};
export type DataLogin = {
  access_token: string;
  user: Account;
};
