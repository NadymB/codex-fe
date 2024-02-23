import React from "react";
import { TabOptions } from "@/components/layouts/Tab";
import i18next from "i18next";

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
  HOME = "/m/home",
  MARKET = "/m/markets/commodity",
  TRADE = "/m/trade",
  ASSET = "/m/asset",
  COMING_SOON = "/coming-soon",
  LOGIN="/m/login",
  SIGNUP="/m/sign-up",
  PROFILE="/m/profile",
  ANNOUNCEMENT="/m/announcement",
  HELP_CENTER="/m/help-center",
  LEARN="/m/learn",
  SETTING_LOCALE="/m/setting/locale",
  SETTING_CURRENCY="/m/setting/currency",
  VIP="/m/vip",
}

export const marketTabOption: TabOptions = [
  {
    label: `${i18next.t("marketPage.commodity")}`,
    link: "/markets/commodity",
  },
  {
    label: i18next.t("marketPage.cryptoCurrency"),
    link: "/markets/crypto",
  },
  {
    label: i18next.t("marketPage.foreignExchange"),
    link: "/markets/forex",
  },
];

export const ASSET_LIST = [
  {
    label: "deposit",
    link: "/coming-soon",
    path: [
      {
        d: "M41 9.2h-3V7.7c0-2.4-2-4.4-4.4-4.4H8.5c-2.4 0-4.4 2-4.4 4.4v28.1c0 2.4 2 4.4 4.4 4.4H10c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H8.5c-.8 0-1.5-.7-1.5-1.5V11.9c.5.2 1 .3 1.5.3H41c.8 0 1.5.7 1.5 1.5v1.5H32.3c-2-.1-3.8 1.1-4.4 3-.8 2.3.4 4.8 2.7 5.7.5.2 1 .3 1.6.3h10.3V36c0 .8-.7 1.5-1.5 1.5H24.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H41c2.4 0 4.4-2 4.4-4.4V13.7c.1-2.5-1.9-4.5-4.4-4.5zM7 7.7c0-.8.7-1.5 1.5-1.5h25.1c.8 0 1.5.7 1.5 1.5v1.5H8.5C7.7 9.2 7 8.6 7 7.7zM32.2 21c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.3v3H32.2z",
        fill: "#fff"
      },
      {
        d: "M23.2 32.1c-.6.6-1.5.6-2.1 0l-1.9-1.9v14.2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V30.2l-1.9 1.9c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l4.4-4.4c.1-.1.3-.2.4-.3h.6c.2 0 .3 0 .5.1s.3.2.4.3l4.4 4.4c.8.6.8 1.4.3 2z",
        fill: "#3d5afe"
      }
    ],
    width: 48,
    height: 48,
    viewBox: '0 0 48 48',
  },
  {
    label: "withdraw",
    link: "/coming-soon",
    path: [
      {
        d: "M46 9.7c0-4.3-3.5-7.8-7.8-7.8H9.7C5.5 1.9 2 5.4 2 9.7c0 3.8 2.8 7 6.4 7.7v22.1c0 1.8.7 3.4 1.9 4.7s2.9 1.9 4.7 1.9h18c3.7 0 6.6-3 6.6-6.6V17.4c3.7-.7 6.4-3.9 6.4-7.7zm-9.7 29.8c0 1.8-1.5 3.3-3.3 3.3H15c-.9 0-1.7-.4-2.3-1-.6-.6-1-1.5-1-2.4v-28h24.6v28.1zM39.6 14v-2.6h.2c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6H8.2c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h.2V14c-1.8-.6-3.1-2.3-3.1-4.3 0-2.5 2-4.5 4.5-4.5h28.5c2.5 0 4.5 2 4.5 4.5 0 2-1.4 3.7-3.2 4.3z",
        fill: "#fff"
      },
      {
        d: "m28.6 32.7-2.9 2.9V25.5c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v10.1l-2.9-2.9c-.6-.6-1.7-.6-2.3 0-.6.6-.6 1.7 0 2.3l5.7 5.7c.3.3.7.5 1.2.5s.9-.2 1.2-.5l5.7-5.7c.6-.6.6-1.7 0-2.3-.9-.6-1.9-.6-2.5 0zm-7.9-13.4h6.6c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-6.6c-.9 0-1.6.7-1.6 1.6-.1.8.7 1.6 1.6 1.6z",
        fill: "#3d5afe"
      }
    ],
    width: 48,
    height: 48,
    viewBox: '0 0 48 48',
  },
  {
    label: "order",
    link: "/coming-soon",
    path: [
      {
        d: "M 7.03125 10.835938 L 16.988281 10.835938 L 16.988281 11.960938 L 7.03125 11.960938 Z M 7.03125 15.789062 L 13.125 15.789062 L 13.125 16.914062 L 7.03125 16.914062 Z M 7.03125 15.789062 ",
        fill: "#3d5afe"
      }, 
      {
        d: "M 19.179688 23.007812 L 4.820312 23.007812 C 4.519531 23.007812 4.238281 22.949219 3.957031 22.835938 C 3.695312 22.726562 3.449219 22.574219 3.261719 22.367188 C 3.054688 22.164062 2.90625 21.9375 2.792969 21.675781 C 2.679688 21.394531 2.625 21.113281 2.625 20.8125 L 2.625 5.867188 C 2.625 5.570312 2.679688 5.289062 2.792969 5.007812 C 2.90625 4.742188 3.054688 4.5 3.261719 4.3125 C 3.46875 4.105469 3.695312 3.957031 3.957031 3.84375 C 4.238281 3.730469 4.519531 3.675781 4.820312 3.675781 L 6.992188 3.675781 L 6.992188 4.78125 L 4.820312 4.78125 C 4.21875 4.78125 3.710938 5.269531 3.710938 5.886719 L 3.710938 20.832031 C 3.710938 21.429688 4.199219 21.9375 4.820312 21.9375 L 19.164062 21.9375 C 19.761719 21.9375 20.269531 21.449219 20.269531 20.832031 L 20.269531 5.867188 C 20.269531 5.269531 19.78125 4.761719 19.164062 4.761719 L 17.007812 4.761719 L 17.007812 3.65625 L 19.179688 3.65625 C 19.480469 3.65625 19.761719 3.710938 20.042969 3.824219 C 20.304688 3.9375 20.550781 4.085938 20.738281 4.292969 C 20.945312 4.5 21.09375 4.726562 21.207031 4.988281 C 21.320312 5.269531 21.375 5.550781 21.375 5.851562 L 21.375 20.792969 C 21.375 21.09375 21.320312 21.375 21.207031 21.65625 C 21.09375 21.917969 20.945312 22.164062 20.738281 22.351562 C 20.53125 22.554688 20.304688 22.707031 20.042969 22.820312 C 19.761719 22.949219 19.480469 23.007812 19.179688 23.007812 Z M 19.179688 23.007812 ",
        fill: "#fff",
      },
      {
        d: "M 17.511719 6.976562 L 6.488281 6.976562 L 6.488281 3.375 C 6.488281 2.605469 7.105469 1.988281 7.875 1.988281 L 9.300781 1.988281 C 9.804688 0.976562 10.855469 0.320312 12.019531 0.320312 C 13.179688 0.320312 14.230469 0.976562 14.738281 1.988281 L 16.164062 1.988281 C 16.929688 1.988281 17.550781 2.605469 17.550781 3.375 Z M 7.59375 5.867188 L 16.425781 5.867188 L 16.425781 3.375 C 16.425781 3.226562 16.292969 3.09375 16.144531 3.09375 L 13.949219 3.09375 L 13.820312 2.71875 C 13.554688 1.949219 12.824219 1.425781 12 1.425781 C 11.175781 1.425781 10.445312 1.949219 10.179688 2.71875 L 10.050781 3.09375 L 7.855469 3.09375 C 7.707031 3.09375 7.574219 3.226562 7.574219 3.375 L 7.574219 5.867188 Z M 7.59375 5.867188 ",
        fill: "#fff",
      }
    ],
    width: 48,
    height: 48,
    viewBox: '0 0 24 24',
  },
  {
    label: "bill",
    link: "/coming-soon",
    path: [
      {
        d: "M2.6,2v19.5h12V20H4.1V3.5h7.5V8h4.5v1.5h1.5V6.9l-0.2-0.2l-4.5-4.5L12.7,2H2.6z M13.1,4.5l1.9,1.9h-1.9V4.5z M5.6,9.5V11h9  V9.5H5.6z M5.6,13.2v1.5h5.2v-1.5H5.6z M12.4,13.2v1.5h2.2v-1.5H12.4z M5.6,16.2v1.5h5.2v-1.5H5.6z M12.4,16.2v1.5h2.2v-1.5H12.4z",
        fill: "#fff"
      },
      {
        d: "M18.4,11v1.5c-1.3,0.2-2.2,1.3-2.2,2.6c0,1.5,1.1,2.6,2.6,2.6h0.8c0.6,0,1.1,0.5,1.1,1.1S20.1,20,19.5,20h-2.6v1.5h1.5V23  h1.5v-1.5c1.3-0.2,2.2-1.3,2.2-2.6c0-1.5-1.1-2.6-2.6-2.6h-0.8c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h2.6v-1.5h-1.5V11H18.4z",
        fill: "#3d5afe"
      }
    ],
    width: 48,
    height: 48,
    viewBox: '0 0 24 24',
  }
];

export const ACCOUNT_LIST = [
  {
    label: "funds",
    amount: "0.00"
  },
  {
    label: "financialManagement",
    amount: "0.00"
  },
  {
    label: "tradingRobot",
    amount: "0.00"
  },
  {
    label: "healing",
    amount: "0.00"
  }
];

export const DEFAULT_CURRENCY = {
  label: "≈ 0.00 USD",
  value: "usd",
};

export const OPTIONS_CURRENCY = [
  {
    label: "≈ 0.00 USD",
    value: "usd",
  },
  {
    label: "≈ 0.00 VND",
    value: "vnd",
  },
];

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
]
export const LEARN_ARTICLE_DATA = [
  {
    url: "/assets/images/how_are_they_different.png",
    title: "howAreTheyDifferentTitle",
    content: "howAreTheyDifferentContent"
  },
  {
    url: "/assets/images/which_one_is_right_for_you.png",
    title: "whichOneIsRightForYouTitle",
    content: "whichOneIsRightForYouContent"
  },
  {
    url: "/assets/images/coti_crypto.png",
    title: "cotiCryptoTitle",
    content: "cotiCryptoContent"
  },
  {
    url: "/assets/images/what_is_PoW_in_blockchain.png",
    title: "whatIsPoWInBlockchainTitle",
    content: "whatIsPoWInBlockchainContent"
  },
];

export const HELP_CENTER_DATA = [
  {
    url: "/assets/images/how_are_they_different.png",
    title: "howToMakeADepositTitle",
    content: "howToMakeADepositContent"
  }
];

export const AUTHENTICATION_DATA = [
  {
    level: "lv1",
    rightInterests: [
      {
        title: "fiatCurrencyDeposit",
        content: "unlimited"
      },
      {
        title: "withdrawalAmount",
        content: "unlimited"
      },
      {
        title: "other",
        content: "moreRewards"
      }
    ],
    method: [
      {
        title: "id",
        path: [
          {
            d: "M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z",
            fill: "#fff"
          },
          {
            d: "M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z",
            fill: "#fff"
          },
          {
            d: "M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z",
            fill: "#3d5afe"
          }
        ],
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
      },
      {
        title: "selfie",
        path: [
          {
            d: "M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z",
            fill: "#fff"
          },
          {
            d: "M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            fill: "#3d5afe"
          },
        ],
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
      }
    ],
    textBtn: "certifyBtnLv1",
    link: "/coming-soon",
  },
  {
    level: "lv2",
    rightInterests: [
      {
        title: "fiatCurrencyDeposit",
        content: "unlimited"
      },
      {
        title: "withdrawalAmount",
        content: "unlimited"
      },
      {
        title: "other",
        content: "moreTradingProducts"
      }
    ],
    method: [
      {
        title: "proofOfAddress",
        path: [
          {
            d: "M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z",
            fill: "#3d5afe"
          },
          {
            d: "M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z",
            fill: "#fff"
          }
        ],
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
      }
    ],
    textBtn: "certifyBtnLv2",
    link: "/coming-soon",
  },
];