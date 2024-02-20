import { HomeIcon } from "@/assets/icons/HomeIcon";
import { MarketIcon } from "@/assets/icons/MarketIcon";
import { TransactionIcon } from "@/assets/icons/TransactionIcon";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { PATH } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex items-center bg-[#1B1C21]">
        <Link
          href={PATH.HOME}
          className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${pathname === PATH.HOME ? "border-b-[#3D5AFE]" : "border-b-transparent"}`}
        >
          <HomeIcon
            color={`${pathname === PATH.HOME ? "#3D5AFE" : "#888888"}`}
          />
          <span
            className={`text-[14px] font-semibold ${pathname === PATH.HOME ? "text-[#3D5AFE]" : "text-[#888888]"} `}
          >
            Home
          </span>
        </Link>
        <Link
          href={PATH.MARKET}
          className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${pathname === PATH.MARKET || pathname === "/markets/crypto" || pathname === "/markets/forex" ? "border-b-[#3D5AFE]" : "border-b-transparent"}`}
        >
          <MarketIcon
            color={`${pathname === PATH.MARKET || pathname === "/markets/crypto" || pathname === "/markets/forex" ? "#3D5AFE" : "#888888"}`}
          />
          <span
            className={`text-[14px] font-semibold ${pathname === PATH.MARKET || pathname === "/markets/crypto" || pathname === "/markets/forex" ? "text-[#3D5AFE]" : "text-[#888888]"} `}
          >
            Thị trường
          </span>
        </Link>
        <Link
          href={PATH.TRANSACTION}
          className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${pathname === PATH.TRANSACTION ? "border-b-[#3D5AFE]" : "border-b-transparent"}`}
        >
          <TransactionIcon
            color={`${pathname === PATH.TRANSACTION ? "#3D5AFE" : "#888888"}`}
          />
          <span
            className={`text-[14px] font-semibold ${pathname === PATH.TRANSACTION ? "text-[#3D5AFE]" : "text-[#888888]"} `}
          >
            Giao dịch
          </span>
        </Link>
        <Link
          href={PATH.ASSET}
          className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${pathname === PATH.ASSET ? "border-b-[#3D5AFE]" : "border-b-transparent"}`}
        >
          <WalletIcon
            color={`${pathname === PATH.ASSET ? "#3D5AFE" : "#888888"}`}
          />
          <span
            className={`text-[14px] font-semibold ${pathname === PATH.ASSET ? "text-[#3D5AFE]" : "text-[#888888]"} `}
          >
            Tài sản
          </span>
        </Link>
      </div>
    </>
  );
};
