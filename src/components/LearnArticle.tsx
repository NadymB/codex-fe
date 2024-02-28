import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import Image from "next/image";

interface ILearnArticle {
  bannerUrl: string;
  title: string;
  content: string;
}

export const LearnArticle = ({ bannerUrl, title, content }: ILearnArticle) => {
  return (
    <div className="bg-[#1c1c1e] rounded">
      <Image
        src={`${getStaticURL()}${bannerUrl}`}
        alt={title}
        height={100}
        width={100}
        className="w-full"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-xl text-white">{title}</h2>
        <span className="text-sm text-[#888] whitespace-nowrap text-ellipsis overflow-hidden">
          {content}
        </span>
      </div>
    </div>
  );
};
