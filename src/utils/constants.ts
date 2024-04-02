import { TabOptions } from "@/components/layouts/Tab";
import { t } from "i18next";

export const getStaticURL = () => process.env.NEXT_PUBLIC_STATIC_URL;
export const OptionsLanguage = [
  {
    label: "English",
    International: "English",
    value: "en",
    flag: "/assets/images/flags/us.svg",
  },
  {
    label: "Français",
    International: "French",
    value: "fr",
    flag: "/assets/images/flags/fr.svg",
  },
  {
    label: "español",
    International: "Spanish",
    value: "es",
    flag: "/assets/images/flags/es.svg",
  },
  {
    label: "Deutsch",
    International: "German",
    value: "de",
    flag: "/assets/images/flags/de.svg",
  },
  {
    label: "Italiano",
    International: "Italian",
    value: "it",
    flag: "/assets/images/flags/it.svg",
  },
  {
    label: "India",
    International: "India",
    value: "in",
    flag: "/assets/images/flags/in.svg",
  },
  {
    label: "简体中文",
    International: "Simplified Chinese",
    value: "cn",
    flag: "/assets/images/flags/cn.svg",
  },
  {
    label: "日本語",
    International: "Japanese",
    value: "jp",
    flag: "/assets/images/flags/jp.svg",
  },
  {
    label: "Tiếng Việt",
    International: "Vietnamese",
    value: "vi",
    flag: "/assets/images/flags/vn.svg",
  },
  {
    label: "한국인",
    International: "Korean",
    value: "kr",
    flag: "/assets/images/flags/kr.svg",
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
  HOME = "/m/home",
  MARKET = "/m/markets/commodity",
  TRADE = "/m/trade",
  ASSET = "/m/asset",
  COMING_SOON = "/coming-soon",
  LOGIN = "/m/login",
  SIGNUP = "/m/sign-up",
  PROFILE = "/m/profile",
  ANNOUNCEMENT = "/m/announcement",
  HELP_CENTER = "/m/help-center",
  LEARN = "/m/learn",
  SETTING_LOCALE = "/m/setting/locale",
  SETTING_CURRENCY = "/m/setting/currency",
  VIP = "/m/vip",
}

export const marketTabOption: TabOptions = [
  {
    label: `${t("marketPage.commodity")}`,
    link: "/markets/commodity",
  },
  {
    label: t("marketPage.cryptoCurrency"),
    link: "/markets/crypto",
  },
  {
    label: t("marketPage.foreignExchange"),
    link: "/markets/forex",
  },
];

export const ASSET_LIST = [
  {
    label: "deposit",
    link: "/m/deposit",
    path: [
      {
        d: "M41 9.2h-3V7.7c0-2.4-2-4.4-4.4-4.4H8.5c-2.4 0-4.4 2-4.4 4.4v28.1c0 2.4 2 4.4 4.4 4.4H10c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H8.5c-.8 0-1.5-.7-1.5-1.5V11.9c.5.2 1 .3 1.5.3H41c.8 0 1.5.7 1.5 1.5v1.5H32.3c-2-.1-3.8 1.1-4.4 3-.8 2.3.4 4.8 2.7 5.7.5.2 1 .3 1.6.3h10.3V36c0 .8-.7 1.5-1.5 1.5H24.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H41c2.4 0 4.4-2 4.4-4.4V13.7c.1-2.5-1.9-4.5-4.4-4.5zM7 7.7c0-.8.7-1.5 1.5-1.5h25.1c.8 0 1.5.7 1.5 1.5v1.5H8.5C7.7 9.2 7 8.6 7 7.7zM32.2 21c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.3v3H32.2z",
        fill: "#fff",
      },
      {
        d: "M23.2 32.1c-.6.6-1.5.6-2.1 0l-1.9-1.9v14.2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V30.2l-1.9 1.9c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l4.4-4.4c.1-.1.3-.2.4-.3h.6c.2 0 .3 0 .5.1s.3.2.4.3l4.4 4.4c.8.6.8 1.4.3 2z",
        fill: "#3d5afe",
      },
    ],
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
  },
  {
    label: "withdraw",
    link: "/m/withdrawal",
    path: [
      {
        d: "M46 9.7c0-4.3-3.5-7.8-7.8-7.8H9.7C5.5 1.9 2 5.4 2 9.7c0 3.8 2.8 7 6.4 7.7v22.1c0 1.8.7 3.4 1.9 4.7s2.9 1.9 4.7 1.9h18c3.7 0 6.6-3 6.6-6.6V17.4c3.7-.7 6.4-3.9 6.4-7.7zm-9.7 29.8c0 1.8-1.5 3.3-3.3 3.3H15c-.9 0-1.7-.4-2.3-1-.6-.6-1-1.5-1-2.4v-28h24.6v28.1zM39.6 14v-2.6h.2c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6H8.2c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h.2V14c-1.8-.6-3.1-2.3-3.1-4.3 0-2.5 2-4.5 4.5-4.5h28.5c2.5 0 4.5 2 4.5 4.5 0 2-1.4 3.7-3.2 4.3z",
        fill: "#fff",
      },
      {
        d: "m28.6 32.7-2.9 2.9V25.5c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v10.1l-2.9-2.9c-.6-.6-1.7-.6-2.3 0-.6.6-.6 1.7 0 2.3l5.7 5.7c.3.3.7.5 1.2.5s.9-.2 1.2-.5l5.7-5.7c.6-.6.6-1.7 0-2.3-.9-.6-1.9-.6-2.5 0zm-7.9-13.4h6.6c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-6.6c-.9 0-1.6.7-1.6 1.6-.1.8.7 1.6 1.6 1.6z",
        fill: "#3d5afe",
      },
    ],
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
  },
  {
    label: "order",
    link: "/m/order",
    path: [
      {
        d: "M 7.03125 10.835938 L 16.988281 10.835938 L 16.988281 11.960938 L 7.03125 11.960938 Z M 7.03125 15.789062 L 13.125 15.789062 L 13.125 16.914062 L 7.03125 16.914062 Z M 7.03125 15.789062 ",
        fill: "#3d5afe",
      },
      {
        d: "M 19.179688 23.007812 L 4.820312 23.007812 C 4.519531 23.007812 4.238281 22.949219 3.957031 22.835938 C 3.695312 22.726562 3.449219 22.574219 3.261719 22.367188 C 3.054688 22.164062 2.90625 21.9375 2.792969 21.675781 C 2.679688 21.394531 2.625 21.113281 2.625 20.8125 L 2.625 5.867188 C 2.625 5.570312 2.679688 5.289062 2.792969 5.007812 C 2.90625 4.742188 3.054688 4.5 3.261719 4.3125 C 3.46875 4.105469 3.695312 3.957031 3.957031 3.84375 C 4.238281 3.730469 4.519531 3.675781 4.820312 3.675781 L 6.992188 3.675781 L 6.992188 4.78125 L 4.820312 4.78125 C 4.21875 4.78125 3.710938 5.269531 3.710938 5.886719 L 3.710938 20.832031 C 3.710938 21.429688 4.199219 21.9375 4.820312 21.9375 L 19.164062 21.9375 C 19.761719 21.9375 20.269531 21.449219 20.269531 20.832031 L 20.269531 5.867188 C 20.269531 5.269531 19.78125 4.761719 19.164062 4.761719 L 17.007812 4.761719 L 17.007812 3.65625 L 19.179688 3.65625 C 19.480469 3.65625 19.761719 3.710938 20.042969 3.824219 C 20.304688 3.9375 20.550781 4.085938 20.738281 4.292969 C 20.945312 4.5 21.09375 4.726562 21.207031 4.988281 C 21.320312 5.269531 21.375 5.550781 21.375 5.851562 L 21.375 20.792969 C 21.375 21.09375 21.320312 21.375 21.207031 21.65625 C 21.09375 21.917969 20.945312 22.164062 20.738281 22.351562 C 20.53125 22.554688 20.304688 22.707031 20.042969 22.820312 C 19.761719 22.949219 19.480469 23.007812 19.179688 23.007812 Z M 19.179688 23.007812 ",
        fill: "#fff",
      },
      {
        d: "M 17.511719 6.976562 L 6.488281 6.976562 L 6.488281 3.375 C 6.488281 2.605469 7.105469 1.988281 7.875 1.988281 L 9.300781 1.988281 C 9.804688 0.976562 10.855469 0.320312 12.019531 0.320312 C 13.179688 0.320312 14.230469 0.976562 14.738281 1.988281 L 16.164062 1.988281 C 16.929688 1.988281 17.550781 2.605469 17.550781 3.375 Z M 7.59375 5.867188 L 16.425781 5.867188 L 16.425781 3.375 C 16.425781 3.226562 16.292969 3.09375 16.144531 3.09375 L 13.949219 3.09375 L 13.820312 2.71875 C 13.554688 1.949219 12.824219 1.425781 12 1.425781 C 11.175781 1.425781 10.445312 1.949219 10.179688 2.71875 L 10.050781 3.09375 L 7.855469 3.09375 C 7.707031 3.09375 7.574219 3.226562 7.574219 3.375 L 7.574219 5.867188 Z M 7.59375 5.867188 ",
        fill: "#fff",
      },
    ],
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
  },
  {
    label: "bill",
    link: "/m/billing",
    path: [
      {
        d: "M2.6,2v19.5h12V20H4.1V3.5h7.5V8h4.5v1.5h1.5V6.9l-0.2-0.2l-4.5-4.5L12.7,2H2.6z M13.1,4.5l1.9,1.9h-1.9V4.5z M5.6,9.5V11h9  V9.5H5.6z M5.6,13.2v1.5h5.2v-1.5H5.6z M12.4,13.2v1.5h2.2v-1.5H12.4z M5.6,16.2v1.5h5.2v-1.5H5.6z M12.4,16.2v1.5h2.2v-1.5H12.4z",
        fill: "#fff",
      },
      {
        d: "M18.4,11v1.5c-1.3,0.2-2.2,1.3-2.2,2.6c0,1.5,1.1,2.6,2.6,2.6h0.8c0.6,0,1.1,0.5,1.1,1.1S20.1,20,19.5,20h-2.6v1.5h1.5V23  h1.5v-1.5c1.3-0.2,2.2-1.3,2.2-2.6c0-1.5-1.1-2.6-2.6-2.6h-0.8c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h2.6v-1.5h-1.5V11H18.4z",
        fill: "#3d5afe",
      },
    ],
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
  },
];

export const ACCOUNT_LIST = [
  {
    label: "financialManagement",
    amount: "0.00",
  },
  {
    label: "tradingRobot",
    amount: "0.00",
  },
  {
    label: "healing",
    amount: "0.00",
  },
];

export const DEFAULT_CURRENCY = {
  label: "≈ 0.00 USD",
  value: "usd",
};

export const OPTIONS_CURRENCY = [
  {
    label: "≈ 0.00 AED",
    value: "AED",
  },
  {
    label: "≈ 0.00 AFN",
    value: "AFN",
  },
  {
    label: "≈ 0.00 ALL",
    value: "ALL",
  },
  {
    label: "≈ 0.00 AMD",
    value: "AMD",
  },
  {
    label: "≈ 0.00 ANG",
    value: "ANG",
  },
  {
    label: "≈ 0.00 AOA",
    value: "AOA",
  },
  {
    label: "≈ 0.00 ARS",
    value: "ARS",
  },
  {
    label: "≈ 0.00 AUD",
    value: "AUD",
  },
  {
    label: "≈ 0.00 AWG",
    value: "AWG",
  },
  {
    label: "≈ 0.00 AZN",
    value: "AZN",
  },
  {
    label: "≈ 0.00 BAM",
    value: "BAM",
  },
  {
    label: "≈ 0.00 BBD",
    value: "BBD",
  },
  {
    label: "≈ 0.00 BDT",
    value: "BDT",
  },
  {
    label: "≈ 0.00 BGN",
    value: "BGN",
  },
  {
    label: "≈ 0.00 BHD",
    value: "BHD",
  },
  {
    label: "≈ 0.00 BIF",
    value: "BIF",
  },
  {
    label: "≈ 0.00 BMD",
    value: "BMD",
  },
  {
    label: "≈ 0.00 BND",
    value: "BND",
  },
  {
    label: "≈ 0.00 BOB",
    value: "BOB",
  },
  {
    label: "≈ 0.00 BRL",
    value: "BRL",
  },
  {
    label: "≈ 0.00 BSD",
    value: "BSD",
  },
  {
    label: "≈ 0.00 BTN",
    value: "BTN",
  },
  {
    label: "≈ 0.00 BWP",
    value: "BWP",
  },
  {
    label: "≈ 0.00 BYN",
    value: "BYN",
  },
  {
    label: "≈ 0.00 BZD",
    value: "BZD",
  },
  {
    label: "≈ 0.00 CAD",
    value: "CAD",
  },
  {
    label: "≈ 0.00 CDF",
    value: "CDF",
  },
  {
    label: "≈ 0.00 CHF",
    value: "CHF",
  },
  {
    label: "≈ 0.00 CLP",
    value: "CLP",
  },
  {
    label: "≈ 0.00 CYN",
    value: "CYN",
  },
  {
    label: "≈ 0.00 COP",
    value: "COP",
  },
  {
    label: "≈ 0.00 CRC",
    value: "CRC",
  },

  {
    label: "≈ 0.00 CUP",
    value: "CUP",
  },
  {
    label: "≈ 0.00 CVE",
    value: "CVE",
  },
  {
    label: "≈ 0.00 CZK",
    value: "CZK",
  },
  {
    label: "≈ 0.00 DJF",
    value: "DJF",
  },
  {
    label: "≈ 0.00 DKK",
    value: "DKK",
  },
  {
    label: "≈ 0.00 DOP",
    value: "DOP",
  },
  {
    label: "≈ 0.00 DZD",
    value: "DZD",
  },
  {
    label: "≈ 0.00 EGP",
    value: "EGP",
  },
  {
    label: "≈ 0.00 ERN",
    value: "ERN",
  },
  {
    label: "≈ 0.00 AZN",
    value: "AZN",
  },
  {
    label: "≈ 0.00 ETB",
    value: "ETB",
  },
  {
    label: "≈ 0.00 EUG",
    value: "EUG",
  },
  {
    label: "≈ 0.00 FJD",
    value: "FJD",
  },
  {
    label: "≈ 0.00 FKP",
    value: "FKP",
  },
  {
    label: "≈ 0.00 FOK",
    value: "FOK",
  },
  {
    label: "≈ 0.00 GBP",
    value: "GBP",
  },
  {
    label: "≈ 0.00 GEL",
    value: "GEL",
  },
  {
    label: "≈ 0.00 GGP",
    value: "GGP",
  },
  {
    label: "≈ 0.00 GSH",
    value: "GSH",
  },
  {
    label: "≈ 0.00 GIP",
    value: "GIP",
  },
  {
    label: "≈ 0.00 GMD",
    value: "GMD",
  },
  {
    label: "≈ 0.00 GFN",
    value: "GFN",
  },
  {
    label: "≈ 0.00 GTQ",
    value: "GTQ",
  },
  {
    label: "≈ 0.00 GYD",
    value: "GYD",
  },
  {
    label: "≈ 0.00 HKD",
    value: "HKD",
  },
  {
    label: "≈ 0.00 HNL",
    value: "HNL",
  },
  {
    label: "≈ 0.00 HRK",
    value: "HRK",
  },
  {
    label: "≈ 0.00 HTG",
    value: "HTG",
  },
  {
    label: "≈ 0.00 HUF",
    value: "HUF",
  },
  {
    label: "≈ 0.00 IDR",
    value: "IDR",
  },
  {
    label: "≈ 0.00 ILS",
    value: "ILS",
  },
  {
    label: "≈ 0.00 IMP",
    value: "INR",
  },
];

export enum COMMODITY_CODE {
  GOLD = "Gold Futures",
  ALUMINIUM = "Aluminium Futures",
  SILVER = "Silver Futures",
  SUGAR = "Sugar Futures",
  COFFEE = "Coffee",
  COPPER = "Copper",
  OIL = "Crude Oil",
  RICE = "Rough Rice Futures",
  PLATINUM = "Platinum",
}

export enum FOREX_CODE {
  CNYUSDT = "CNY_USD",
  GBPUSDT = "GBP_USD",
  JPYUSDT = "JPY_USD",
}

export enum CRYPTOCURRENCY_CODE {
  DOGEUSDT = "DOGEUSDT",
  XRPUSDT = "XRPUSDT",
  ETHUSDT = "ETHUSDT",
  MATICUSDT = "MATICUSDT",
  BNBUSDT = "BNBUSDT",
  BTCUSDT = "BTCUSDT",
}

export enum CHART_CODE {
  CNY = "CNY_USD",
  GBP = "GBP_USD",
  JPY = "JPY_USD",
  DOGE = "DOGEUSDT",
  XRP = "XRPUSDT",
  ETH = "ETHUSDT",
  MATIC = "MATICUSDT",
  BNB = "BNBUSDT",
  BTC = "BTCUSDT",
  GOLD = "Gold Futures",
  ALUMINIUM = "Aluminium Futures",
  SILVER = "Silver Futures",
  SUGAR = "Sugar Futures",
  COFFEE = "Coffee",
  COPPER = "Copper",
  CRUDE = "Crude Oil",
  ROUGH = "Rough Rice Futures",
  PLATINUM = "Platinum",
}

export enum TRADE_TYPE_CODE {
  CNY_USD = "CNY",
  GBP_USD = "GBP",
  JPY_USD = "JPY",
  DOGEUSDT = "DOGE",
  XRPUSDT = "XRP",
  ETHUSDT = "ETH",
  MATICUSDT = "MATIC",
  BNBUSDT = "BNB",
  BTCUSDT = "BTC",
  GOLD_FUTURES = "GOLD",
  ALUMINIUM_FUTURES = "ALUMINIUM",
  SILVER_FUTURES = "SILVER",
  SUGAR_FUTURES = "SUGAR",
  COFFEE = "COFFEE",
  COPPER = "COPPER",
  CRUDE_OIL = "OIL",
  ROUGH_RICE_FUTURES = "RICE",
  PLATINUM = "PLATINUM",
}

export const PAIR_TYPE = {
  gbp_usd: "foreign_exchange",
  jpy_usd: "foreign_exchange",
  cny_usd: "foreign_exchange",
  etcusdt: "crypto",
  dogeusdt: "crypto",
  ethusdt: "crypto",
  xrpusdt: "crypto",
  bnbusdt: "crypto",
  btcusdt: "crypto",
  maticusdt: "crypto",
  sugar_futures: "commodity",
  gold_futures: "commodity",
  crude_oil: "commodity",
  aluminium_futures: "commodity",
  rough_rice_futures: "commodity",
  coffee: "commodity",
  silver_futures: "commodity",
  copper: "commodity",
  platinum: "commodity",
};

export const SWIPER_SLIDER_DATA = [
  {
    url: `${getStaticURL()}/assets/images/welcome.svg`,
    title: "sliderTitleFirst",
    content: "sliderContentFirst",
  },
  {
    url: `${getStaticURL()}/assets/images/fee.svg`,
    title: "sliderTitleSecond",
    content: "sliderContentSecond",
  },
  {
    url: `${getStaticURL()}/assets/images/onekey.svg`,
    title: "sliderTitleThird",
    content: "sliderContentThird",
  },
  {
    url: `${getStaticURL()}/assets/images/full.svg`,
    title: "sliderTitleFourth",
    content: "sliderTitleFourth",
  },
];
export const LEARN_ARTICLE_DATA = [
  {
    url: `${getStaticURL()}/assets/images/howaretheydifferent.png`,
    articleQuery: "usdt-vs-usdc-vs-busd-differences",
    title: "howAreTheyDifferentTitle",
    content: "howAreTheyDifferentContent",
  },
  {
    url: `${getStaticURL()}/assets/images/whichoneisrightforyou.png`,
    articleQuery: "traditional-debit-card-vs-crypto-debit-card",
    title: "whichOneIsRightForYouTitle",
    content: "whichOneIsRightForYouContent",
  },
  {
    url: `${getStaticURL()}/assets/images/coticrypto.png`,
    articleQuery: "what-is-coti-crypto",
    title: "cotiCryptoTitle",
    content: "cotiCryptoContent",
  },
  {
    url: `${getStaticURL()}/assets/images/whatisPoWinblockchain.png`,
    articleQuery: "what-is-proof-of-work-in-blockchain",
    title: "whatIsPoWInBlockchainTitle",
    content: "whatIsPoWInBlockchainContent",
  },
];

export const HELP_CENTER_DATA = [
  {
    url: "/assets/images/how_are_they_different.png",
    articleQuery: "how-to-make-a-deposit",
    title: "howToMakeADepositTitle",
    content: "howToMakeADepositContent",
  },
];

export const AUTHENTICATION_DATA = [
  {
    level: "lv1",
    rightInterests: [
      {
        title: "fiatCurrencyDeposit",
        content: "unlimited",
      },
      {
        title: "withdrawalAmount",
        content: "unlimited",
      },
      {
        title: "other",
        content: "moreRewards",
      },
    ],
    method: [
      {
        title: "id",
        path: [
          {
            d: "M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z",
            fill: "#fff",
          },
          {
            d: "M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z",
            fill: "#fff",
          },
          {
            d: "M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z",
            fill: "#3d5afe",
          },
        ],
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
      },
      {
        title: "selfie",
        path: [
          {
            d: "M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z",
            fill: "#fff",
          },
          {
            d: "M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            fill: "#3d5afe",
          },
        ],
        width: 20,
        height: 20,
        viewBox: "0 0 16 16",
      },
    ],
    textBtn: "certifyBtnLv1",
    link: "/coming-soon",
  },
  {
    level: "lv2",
    rightInterests: [
      {
        title: "fiatCurrencyDeposit",
        content: "unlimited",
      },
      {
        title: "withdrawalAmount",
        content: "unlimited",
      },
      {
        title: "other",
        content: "moreTradingProducts",
      },
    ],
    method: [
      {
        title: "proofOfAddress",
        path: [
          {
            d: "M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z",
            fill: "#3d5afe",
          },
          {
            d: "M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z",
            fill: "#fff",
          },
        ],
        width: 20,
        height: 20,
        viewBox: "0 0 16 16",
      },
    ],
    textBtn: "certifyBtnLv2",
    link: "/coming-soon",
  },
];

export const TOKEN_IP_INFO = "296f12aacaa210";

export interface Country {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export const COUNTRIES: Country[] = [
  { code: "AD", label: "Andorra", phone: "+376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "+971",
  },
  { code: "AF", label: "Afghanistan", phone: "+93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "+1-268",
  },
  { code: "AI", label: "Anguilla", phone: "+1-264" },
  { code: "AL", label: "Albania", phone: "+355" },
  { code: "AM", label: "Armenia", phone: "+374" },
  { code: "AO", label: "Angola", phone: "+244" },
  { code: "AQ", label: "Antarctica", phone: "+672" },
  { code: "AR", label: "Argentina", phone: "+54" },
  { code: "AS", label: "American Samoa", phone: "+1-684" },
  { code: "AT", label: "Austria", phone: "+43" },
  {
    code: "AU",
    label: "Australia",
    phone: "+61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "+297" },
  { code: "AX", label: "Alland Islands", phone: "+358" },
  { code: "AZ", label: "Azerbaijan", phone: "+994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "+387",
  },
  { code: "BB", label: "Barbados", phone: "+1-246" },
  { code: "BD", label: "Bangladesh", phone: "+880" },
  { code: "BE", label: "Belgium", phone: "+32" },
  { code: "BF", label: "Burkina Faso", phone: "+226" },
  { code: "BG", label: "Bulgaria", phone: "+359" },
  { code: "BH", label: "Bahrain", phone: "+973" },
  { code: "BI", label: "Burundi", phone: "+257" },
  { code: "BJ", label: "Benin", phone: "+229" },
  { code: "BL", label: "Saint Barthelemy", phone: "+590" },
  { code: "BM", label: "Bermuda", phone: "+1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "+673" },
  { code: "BO", label: "Bolivia", phone: "+591" },
  { code: "BR", label: "Brazil", phone: "+55" },
  { code: "BS", label: "Bahamas", phone: "+1-242" },
  { code: "BT", label: "Bhutan", phone: "+975" },
  { code: "BV", label: "Bouvet Island", phone: "+47" },
  { code: "BW", label: "Botswana", phone: "+267" },
  { code: "BY", label: "Belarus", phone: "+375" },
  { code: "BZ", label: "Belize", phone: "+501" },
  {
    code: "CA",
    label: "Canada",
    phone: "+1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "+61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "+243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "+236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "+242",
  },
  { code: "CH", label: "Switzerland", phone: "+41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "+225" },
  { code: "CK", label: "Cook Islands", phone: "+682" },
  { code: "CL", label: "Chile", phone: "+56" },
  { code: "CM", label: "Cameroon", phone: "+237" },
  { code: "CN", label: "China", phone: "+86" },
  { code: "CO", label: "Colombia", phone: "+57" },
  { code: "CR", label: "Costa Rica", phone: "+506" },
  { code: "CU", label: "Cuba", phone: "+53" },
  { code: "CV", label: "Cape Verde", phone: "+238" },
  { code: "CW", label: "Curacao", phone: "+599" },
  { code: "CX", label: "Christmas Island", phone: "+61" },
  { code: "CY", label: "Cyprus", phone: "+357" },
  { code: "CZ", label: "Czech Republic", phone: "+420" },
  {
    code: "DE",
    label: "Germany",
    phone: "+49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "+253" },
  { code: "DK", label: "Denmark", phone: "+45" },
  { code: "DM", label: "Dominica", phone: "+1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "+1-809",
  },
  { code: "DZ", label: "Algeria", phone: "+213" },
  { code: "EC", label: "Ecuador", phone: "+593" },
  { code: "EE", label: "Estonia", phone: "+372" },
  { code: "EG", label: "Egypt", phone: "+20" },
  { code: "EH", label: "Western Sahara", phone: "+212" },
  { code: "ER", label: "Eritrea", phone: "+291" },
  { code: "ES", label: "Spain", phone: "+34" },
  { code: "ET", label: "Ethiopia", phone: "+251" },
  { code: "FI", label: "Finland", phone: "+358" },
  { code: "FJ", label: "Fiji", phone: "+679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "+500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "+691",
  },
  { code: "FO", label: "Faroe Islands", phone: "+298" },
  {
    code: "FR",
    label: "France",
    phone: "+33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "+241" },
  { code: "GB", label: "United Kingdom", phone: "+44" },
  { code: "GD", label: "Grenada", phone: "+1-473" },
  { code: "GE", label: "Georgia", phone: "+995" },
  { code: "GF", label: "French Guiana", phone: "+594" },
  { code: "GG", label: "Guernsey", phone: "+44" },
  { code: "GH", label: "Ghana", phone: "+233" },
  { code: "GI", label: "Gibraltar", phone: "+350" },
  { code: "GL", label: "Greenland", phone: "+299" },
  { code: "GM", label: "Gambia", phone: "+220" },
  { code: "GN", label: "Guinea", phone: "+224" },
  { code: "GP", label: "Guadeloupe", phone: "+590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "+240" },
  { code: "GR", label: "Greece", phone: "+30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "+500",
  },
  { code: "GT", label: "Guatemala", phone: "+502" },
  { code: "GU", label: "Guam", phone: "+1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "+245" },
  { code: "GY", label: "Guyana", phone: "+592" },
  { code: "HK", label: "Hong Kong", phone: "+852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "+672",
  },
  { code: "HN", label: "Honduras", phone: "+504" },
  { code: "HR", label: "Croatia", phone: "+385" },
  { code: "HT", label: "Haiti", phone: "+509" },
  { code: "HU", label: "Hungary", phone: "+36" },
  { code: "ID", label: "Indonesia", phone: "+62" },
  { code: "IE", label: "Ireland", phone: "+353" },
  { code: "IL", label: "Israel", phone: "+972" },
  { code: "IM", label: "Isle of Man", phone: "+44" },
  { code: "IN", label: "India", phone: "+91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "+246",
  },
  { code: "IQ", label: "Iraq", phone: "+964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "+98",
  },
  { code: "IS", label: "Iceland", phone: "+354" },
  { code: "IT", label: "Italy", phone: "+39" },
  { code: "JE", label: "Jersey", phone: "+44" },
  { code: "JM", label: "Jamaica", phone: "+1-876" },
  { code: "JO", label: "Jordan", phone: "+962" },
  {
    code: "JP",
    label: "Japan",
    phone: "+81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "+254" },
  { code: "KG", label: "Kyrgyzstan", phone: "+996" },
  { code: "KH", label: "Cambodia", phone: "+855" },
  { code: "KI", label: "Kiribati", phone: "+686" },
  { code: "KM", label: "Comoros", phone: "+269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "+1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "+850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "+82" },
  { code: "KW", label: "Kuwait", phone: "+965" },
  { code: "KY", label: "Cayman Islands", phone: "+1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "+7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "+856",
  },
  { code: "LB", label: "Lebanon", phone: "+961" },
  { code: "LC", label: "Saint Lucia", phone: "+1-758" },
  { code: "LI", label: "Liechtenstein", phone: "+423" },
  { code: "LK", label: "Sri Lanka", phone: "+94" },
  { code: "LR", label: "Liberia", phone: "+231" },
  { code: "LS", label: "Lesotho", phone: "+266" },
  { code: "LT", label: "Lithuania", phone: "+370" },
  { code: "LU", label: "Luxembourg", phone: "+352" },
  { code: "LV", label: "Latvia", phone: "+371" },
  { code: "LY", label: "Libya", phone: "+218" },
  { code: "MA", label: "Morocco", phone: "+212" },
  { code: "MC", label: "Monaco", phone: "+377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "+373",
  },
  { code: "ME", label: "Montenegro", phone: "+382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "+590",
  },
  { code: "MG", label: "Madagascar", phone: "+261" },
  { code: "MH", label: "Marshall Islands", phone: "+692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "+389",
  },
  { code: "ML", label: "Mali", phone: "+223" },
  { code: "MM", label: "Myanmar", phone: "+95" },
  { code: "MN", label: "Mongolia", phone: "+976" },
  { code: "MO", label: "Macao", phone: "+853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "+1-670",
  },
  { code: "MQ", label: "Martinique", phone: "+596" },
  { code: "MR", label: "Mauritania", phone: "+222" },
  { code: "MS", label: "Montserrat", phone: "+1-664" },
  { code: "MT", label: "Malta", phone: "+356" },
  { code: "MU", label: "Mauritius", phone: "+230" },
  { code: "MV", label: "Maldives", phone: "+960" },
  { code: "MW", label: "Malawi", phone: "+265" },
  { code: "MX", label: "Mexico", phone: "+52" },
  { code: "MY", label: "Malaysia", phone: "+60" },
  { code: "MZ", label: "Mozambique", phone: "+258" },
  { code: "NA", label: "Namibia", phone: "+264" },
  { code: "NC", label: "New Caledonia", phone: "+687" },
  { code: "NE", label: "Niger", phone: "+227" },
  { code: "NF", label: "Norfolk Island", phone: "+672" },
  { code: "NG", label: "Nigeria", phone: "+234" },
  { code: "NI", label: "Nicaragua", phone: "+505" },
  { code: "NL", label: "Netherlands", phone: "+31" },
  { code: "NO", label: "Norway", phone: "+47" },
  { code: "NP", label: "Nepal", phone: "+977" },
  { code: "NR", label: "Nauru", phone: "+674" },
  { code: "NU", label: "Niue", phone: "+683" },
  { code: "NZ", label: "New Zealand", phone: "+64" },
  { code: "OM", label: "Oman", phone: "+968" },
  { code: "PA", label: "Panama", phone: "+507" },
  { code: "PE", label: "Peru", phone: "+51" },
  { code: "PF", label: "French Polynesia", phone: "+689" },
  { code: "PG", label: "Papua New Guinea", phone: "+675" },
  { code: "PH", label: "Philippines", phone: "+63" },
  { code: "PK", label: "Pakistan", phone: "+92" },
  { code: "PL", label: "Poland", phone: "+48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "+508",
  },
  { code: "PN", label: "Pitcairn", phone: "+870" },
  { code: "PR", label: "Puerto Rico", phone: "+1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "+970",
  },
  { code: "PT", label: "Portugal", phone: "+351" },
  { code: "PW", label: "Palau", phone: "+680" },
  { code: "PY", label: "Paraguay", phone: "+595" },
  { code: "QA", label: "Qatar", phone: "+974" },
  { code: "RE", label: "Reunion", phone: "+262" },
  { code: "RO", label: "Romania", phone: "+40" },
  { code: "RS", label: "Serbia", phone: "+381" },
  { code: "RU", label: "Russian Federation", phone: "+7" },
  { code: "RW", label: "Rwanda", phone: "+250" },
  { code: "SA", label: "Saudi Arabia", phone: "+966" },
  { code: "SB", label: "Solomon Islands", phone: "+677" },
  { code: "SC", label: "Seychelles", phone: "+248" },
  { code: "SD", label: "Sudan", phone: "+249" },
  { code: "SE", label: "Sweden", phone: "+46" },
  { code: "SG", label: "Singapore", phone: "+65" },
  { code: "SH", label: "Saint Helena", phone: "+290" },
  { code: "SI", label: "Slovenia", phone: "+386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "+47",
  },
  { code: "SK", label: "Slovakia", phone: "+421" },
  { code: "SL", label: "Sierra Leone", phone: "+232" },
  { code: "SM", label: "San Marino", phone: "+378" },
  { code: "SN", label: "Senegal", phone: "+221" },
  { code: "SO", label: "Somalia", phone: "+252" },
  { code: "SR", label: "Suriname", phone: "+597" },
  { code: "SS", label: "South Sudan", phone: "+211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "+239",
  },
  { code: "SV", label: "El Salvador", phone: "+503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "+1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "+963",
  },
  { code: "SZ", label: "Swaziland", phone: "+268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "+1-649",
  },
  { code: "TD", label: "Chad", phone: "+235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "+262",
  },
  { code: "TG", label: "Togo", phone: "+228" },
  { code: "TH", label: "Thailand", phone: "+66" },
  { code: "TJ", label: "Tajikistan", phone: "+992" },
  { code: "TK", label: "Tokelau", phone: "+690" },
  { code: "TL", label: "Timor-Leste", phone: "+670" },
  { code: "TM", label: "Turkmenistan", phone: "+993" },
  { code: "TN", label: "Tunisia", phone: "+216" },
  { code: "TO", label: "Tonga", phone: "+676" },
  { code: "TR", label: "Turkey", phone: "+90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "+1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "+688" },
  {
    code: "TW",
    label: "Taiwan",
    phone: "+886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "+255",
  },
  { code: "UA", label: "Ukraine", phone: "+380" },
  { code: "UG", label: "Uganda", phone: "+256" },
  {
    code: "US",
    label: "United States",
    phone: "+1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "+598" },
  { code: "UZ", label: "Uzbekistan", phone: "+998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "+379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "+1-784",
  },
  { code: "VE", label: "Venezuela", phone: "+58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "+1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "+1-340",
  },
  { code: "VN", label: "Vietnam", phone: "+84" },
  { code: "VU", label: "Vanuatu", phone: "+678" },
  { code: "WF", label: "Wallis and Futuna", phone: "+681" },
  { code: "WS", label: "Samoa", phone: "+685" },
  { code: "XK", label: "Kosovo", phone: "+383" },
  { code: "YE", label: "Yemen", phone: "+967" },
  { code: "YT", label: "Mayotte", phone: "+262" },
  { code: "ZA", label: "South Africa", phone: "+27" },
  { code: "ZM", label: "Zambia", phone: "+260" },
  { code: "ZW", label: "Zimbabwe", phone: "+263" },
];
export enum LOGIN_MODE {
  MAIL = "email",
  PHONE_NUMBER = "phone_number",
  USERNAME = "username",
}
export const WS_TOPIC = {
  SEND_MESSAGE: "send_message",
  READ_MESSAGE: "read_message",
  NOTIFICATION: "notification",
  REPLY_MESSAGE: "reply_message",
  DELETE_MESSAGE: "delete_message",
  USER_ONLINE: "user_online",
  USER_OFFLINE: "user_offline",
  USER_VERIFIED: "user_verified",
  TRADE_PROGRESS: "trade_progress",
  BET_RESULT: "bet_result",
  TRADING: "trading",
};

export const MAX_SIZE_IMAGE = 5 * 1024 * 1000;

export enum CERTIFICATE_TYPE {
  ID_CARD = "id_card",
  PASSPORT = "passport",
  DRIVING_LICENSE = "driving_license",
  RESIDENCE_PERMIT = "residence_permit",
}
export enum CERTIFICATE_STATUS {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}
export const ORDERS_DATA = [
  {
    long: false,
    paymentPrice: "10.544(-0.104)",
    amount: "25,125.00",
    profit: "1,256.25",
  },
  {
    long: true,
    paymentPrice: "9.996(+0.002)",
    amount: "50,000.00",
    profit: "2,500.00",
  },
];

export enum TRADE_CURRENCY {
  VND = "vnd",
  USD = "usd",
}

export const BET_PERCENTAGE = [
  { betPercentage: 5, timeoutInMinutes: 1 },
  { betPercentage: 10, timeoutInMinutes: 2 },
  { betPercentage: 20, timeoutInMinutes: 4 },
  { betPercentage: 30, timeoutInMinutes: 6 },
  { betPercentage: 40, timeoutInMinutes: 8 },
  { betPercentage: 100, timeoutInMinutes: 12 },
];

export const getRnd = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

export enum CRYPTO_CURRENCY {
  ETH = 'eth',
  BTC = 'btc',
  USDT_ERC20 = 'usdt_erc20',
  USDT_TRC20 = 'usdt_trc20',
}

export interface Currency {
  name: string;
  acronym: string;
  value: CRYPTO_CURRENCY;
}

export const CURRENCIES : Currency[] = [
  {
    name: "Ethereum",
    acronym: "ETH",
    value: CRYPTO_CURRENCY.ETH,
  },
  {
    name: "Bitcoin",
    acronym: "BTC",
    value: CRYPTO_CURRENCY.BTC,
  },
  {
    name: "ERC20",
    acronym: "Tether USDT",
    value: CRYPTO_CURRENCY.USDT_ERC20,
  },
  {
    name: "TRC20",
    acronym: "Tether USDT",
    value: CRYPTO_CURRENCY.USDT_TRC20,
  }
]
export enum BALANCE_ACTION {
  CREDIT = 'credit',
  DEBIT = 'debit',
  LOCK = 'lock',
  ROLLBACK = 'rollback',
}
export enum TRADE_TYPE {
  PLACE_ORDER = 'place_order',
  SETTLE_ORDER = 'settle_order',
  TOPUP = 'topup',
  DEDUCT = 'deduct',
  WITHDRAW = 'withdraw',
}

export enum USER_BALANCE_TYPE {
  TOPUP = 'topup',
  DEDUCT = 'deduct',
  WITHDRAW = 'withdraw',
};

export const ERR_CODE = {
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'.toLowerCase(),
  NOT_FOUND: 'NOT_FOUND'.toLowerCase(),
  INVALID_LOGIN_MODE: 'INVALID_LOGIN_MODE'.toLowerCase(),
  USER_NOT_FOUND: 'USER_NOT_FOUND'.toLowerCase(),
  NOT_TX_OWNER: 'NOT_TX_OWNER'.toLowerCase(),
  CONFIRMATION_TOO_LOW: 'CONFIRMATION_TOO_LOW'.toLowerCase(),
  INVALID_CURRENCY: 'INVALID_CURRENCY'.toLowerCase(),
  INVALID_TX_FUNCTION: 'INVALID_TX_FUNCTION'.toLowerCase(),
  INVALID_PURCHASE_PRICE: 'INVALID_PURCHASE_PRICE'.toLowerCase(),
  INVALID_DEPOSIT_ADDRESS: 'INVALID_DEPOSIT_ADDRESS'.toLowerCase(),
  INVALID_SIGNATURE: 'INVALID_SIGNATURE'.toLowerCase(),
  TX_HASH_USED: 'TX_HASH_USED'.toLowerCase(),
  USER_LOCKED: 'USER_LOCKED'.toLowerCase(),
  INVALID_CAPTCHA_TOKEN: 'INVALID_CAPTCHA_TOKEN'.toLowerCase(),
  TRADE_COMPLETED: 'TRADE_COMPLETED'.toLowerCase(),
  INVALID_EMAIL_FORMAT: 'INVALID_EMAIL_FORMAT'.toLowerCase(),
  REQUIRE_EMAIL_OR_PHONE_NUMBER: 'REQUIRE_EMAIL_OR_PHONE_NUMBER'.toLowerCase(),
  INVALID_REGISTER_METHOD: 'INVALID_REGISTER_METHOD'.toLowerCase(),
  INVALID_USERNAME_FORMAT: 'INVALID_USERNAME_FORMAT'.toLowerCase(),
  INVALID_PASSWORD_FORMAT: 'INVALID_PASSWORD_FORMAT'.toLowerCase(),
  EMAIL_ALREADY_EXISTS: 'EMAIL_ALREADY_EXISTS'.toLowerCase(),
  USERNAME_ALREADY_EXISTS: 'USERNAME_ALREADY_EXISTS'.toLowerCase(),
  PHONE_NUMBER_ALREADY_EXISTS: 'PHONE_NUMBER_ALREADY_EXISTS'.toLowerCase(),
  UNAUTHORIZED: 'UNAUTHORIZED'.toLowerCase(),
  TRADE_SETTLED: 'TRADE_SETTLED'.toLowerCase(),
  PROOF_OF_ADDRESS_IS_REQUIRED: 'PROOF_OF_ADDRESS_IS_REQUIRED'.toLowerCase(),
  NOT_ENOUGH_CERTIFICATE: 'NOT_ENOUGH_CERTIFICATE'.toLowerCase(),
  PREVIOUS_VERIFY_REQUEST_NOT_APPROVED:
    'PREVIOUS_VERIFY_REQUEST_NOT_APPROVED'.toLowerCase(),
  INVALID_WITHDRAW_TYPE: 'INVALID_WITHDRAW_TYPE'.toLowerCase(),
  NOT_ENOUGH_WITHDRAWAL_ACCOUNT_INFORMATION: 'NOT_ENOUGH_WITHDRAWAL_ACCOUNT_INFORMATION'.toLowerCase(),
  PERMISSION_DENIED: 'PERMISSION_DENIED'.toLowerCase(),
};
