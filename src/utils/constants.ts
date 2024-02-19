export const getStaticURL = () =>"http://localhost:3000"
export const OptionsLanguage = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "VietNam",
    value: "vi",
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

