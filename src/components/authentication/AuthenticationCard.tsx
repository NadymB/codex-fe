import i18next from "i18next";
import { IRightInterests, RightInterestItem } from "./RightInterestsItem";
import Link from "next/link";
import Icon from "../Icon";

interface IAuthenticationCard {
  textLevel: string;
  rightInterstData: IRightInterests[];
  methods: {
    title: string;
    path: { d: string; fill: string }[];
    width: number;
    height: number;
    viewBox: string;
  }[];
  authenticationBtn: string;
  link: string;
}

export const AuthenticationCard = ({
  textLevel,
  rightInterstData,
  methods,
  authenticationBtn,
  link,
}: IAuthenticationCard) => {
  return (
    <div className="p-4 bg-[#1c1c1e] rounded">
      <h2 className="text-xl text-white pb-8 border-b border-[#ffffff1a]">
        {textLevel}
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-white">
            {i18next.t("authentication.rightsAndInterests")}
          </span>
          {rightInterstData.map((item, index) => (
            <RightInterestItem
              key={index}
              title={i18next.t(`authentication.${item.title}`)}
              content={i18next.t(`authentication.${item.content}`)}
            />
          ))}
        </div>
        <div className="flex gap-4">
          {methods.map((method, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-base text-white"
            >
              <Icon
                d={method.path}
                width={method.width}
                height={method.height}
                viewBox={method.viewBox}
              />
              <span>{i18next.t(`authentication.${method.title}`)}</span>
            </div>
          ))}
        </div>
        <Link
          href={link}
          className="py-[6px] mt-2 px-4 bg-[#3d5afe] hover:bg-[#2a3db0] rounded text-center text-white text-sm font-medium"
        >
          {authenticationBtn}
        </Link>
      </div>
    </div>
  );
};
