import { HomeIcon } from "@/assets/icons/HomeIcon";
import { MarketIcon } from "@/assets/icons/MarketIcon";
import { TransactionIcon } from "@/assets/icons/TransactionIcon";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { PATH } from "@/utils/constants";
import i18next from "i18next";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuBar = () => {
  const pathname = usePathname();

  const crypto = Cookies.get("crypto");
  const cookiesData = crypto
    ? JSON.parse(crypto)
    : { token: "GOLD", values: "USDT" };

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
            {i18next.t("menuBar.home")}
          </span>
        </Link>
        <Link
          href={PATH.MARKET}
          className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${pathname === PATH.MARKET || pathname === "/markets/crypto" || pathname === "/markets/forex" ? "border-b-[#3D5AFE]" : "border-b-transparent"}`}
        >
          <MarketIcon
            color={`${pathname.includes("/markets") ? "#3D5AFE" : "#888888"}`}
          />
          <span
            className={`text-[14px] font-semibold ${pathname.includes("/markets") ? "text-[#3D5AFE]" : "text-[#888888]"} `}
          >
            {i18next.t("menuBar.market")}
          </span>
        </Link>
        <Link
          href={`${PATH.TRADE}/${cookiesData.token}/${cookiesData.values}`}
          className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${pathname === PATH.TRADE ? "border-b-[#3D5AFE]" : "border-b-transparent"}`}
        >
          <TransactionIcon
            color={`${pathname.includes(PATH.TRADE) ? "#3D5AFE" : "#888888"}`}
          />
          <span
            className={`text-[14px] font-semibold ${pathname.includes(PATH.TRADE) ? "text-[#3D5AFE]" : "text-[#888888]"} `}
          >
            {i18next.t("menuBar.transaction")}
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
            {i18next.t("menuBar.asset")}
          </span>
        </Link>
      </div>
    </>
  );
};
