import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  title: string;
}

export const GoBack: FC<Props> = ({ title }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 bg-[#110F15] p-4">
      <div className="cursor-pointer" onClick={() => router.back()}>
        <ArrowLeftIcon />
      </div>
      <div className="text-white text-xl font-semibold">{title}</div>
    </div>
  );
};
