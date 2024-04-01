import { getStaticURL } from "@/utils/constants";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-black w-full h-full">
      <img
        src={`${getStaticURL()}/assets/images/logo_without_BG.svg`}
        alt="Logo"
        height={100}
        width={100}
        className="w-[200px] h-[200px]"
      />
    </div>
  );
};
