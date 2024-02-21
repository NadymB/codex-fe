import Link from "next/link";
import React, { ReactNode } from "react";
import Icon from "./Icon";

interface AssetItemProps {
    pathIcon?: {d: string; fill: string}[];
    label: string;
    url: string;
    widthIcon: number;
    heightIcon: number;
    viewBox: string;
}

export const AssetItem = ({pathIcon, label, url, widthIcon, heightIcon, viewBox}: AssetItemProps) => {
    return (
        <Link href={url} className="bg-[#1c1c1e] flex-1 flex flex-col items-center p-2 rounded">
            <Icon
              d={pathIcon}
              width={widthIcon}
              height={heightIcon}
              viewBox={viewBox}
            />
            <span className="text-sm text-white">{label}</span>
        </Link>
    )
}