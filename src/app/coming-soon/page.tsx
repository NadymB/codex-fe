/* eslint-disable @next/next/no-img-element */
"use client";

import { BackIcon } from "@/assets/icons/BackIcon";
import { getStaticURL } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div className="min-h-screen overflow-auto bg-[#000000]">
      <div className="sticky top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <BackIcon />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          className="max-w-[80%] w-96"
          src={`${getStaticURL()}/assets/images/coming-soon.svg`}
          alt=""
        />
      </div>
    </div>
  );
}
