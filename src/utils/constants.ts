import { TabOptions } from "@/components/layouts/Tab";

export const getStaticURL = () => "http://localhost:3000";
export const OptionsLanguage = [
  {
    label: "English",
    International: "English",
    value: "en",
    flag: "/assets/images/flags/us.svg",
  },
  {
    label: "Việt Nam",
    International: "Vietnamese",
    value: "vi",
    flag: "/assets/images/flags/vn.svg",
  },
];
export const FooterData = [
  {
    page: "about",
    title: "title",
    itemFooter: [
      {
        label: "whitePaperEN",
        link: "/coming-soon",
      },
      {
        label: "whitePaperTaiwan",
        link: "/coming-soon",
      },
      {
        label: "contact",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "fAQ",
    title: "title",
    itemFooter: [
      {
        label: "feedback",
        link: "/coming-soon",
      },
      {
        label: "termsAndConditions",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "social",
    title: "title",
    itemFooter: [],
  },
];
export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}
export const DEFAULT_AUTOCLOSE_TOAST = 2000;

export const optionFilterScan = [
  {
    label: "All filter",
    value: "all",
  },
  {
    label: "Address",
    value: "address",
  },
  {
    label: "Tokens",
    value: "tokens",
  },
  {
    label: "Name tags",
    value: "name-tags",
  },
  {
    label: "Labels",
    value: "labels",
  },
  {
    label: "Websites",
    value: "websites",
  },
];

export enum PRICE_TYPE {
  COMMODITY = "commodity",
  FOREIGN_EXCHANGE = "foreign_exchange",
  CRYPTO = "crypto",
}

export enum PATH {
  HOME = "/",
  MARKET = "/markets/commodity",
  TRANSACTION = "/transaction",
  ASSET = "/asset",
}

export const marketTabOption: TabOptions = [
  {
    label: "Commodity",
    link: "/markets/commodity",
  },
  {
    label: "Cryptocurrency",
    link: "/markets/crypto",
  },
  {
    label: "Foreign Exchange",
    link: "/markets/forex",
  },
];
