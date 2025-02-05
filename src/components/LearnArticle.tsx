/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface ILearnArticle {
  bannerUrl: string;
  title: string;
  content: string;
  articleUrl: string;
}

export const LearnArticle = ({
  bannerUrl,
  title,
  content,
  articleUrl,
}: ILearnArticle) => {
  return (
    <Link href={articleUrl} className="bg-[#1c1c1e] rounded">
      <img
        src={bannerUrl}
        alt={"banner"}
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
    </Link>
  );
};
