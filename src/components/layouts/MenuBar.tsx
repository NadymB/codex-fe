import { HomeIcon } from "@/assets/icons/HomeIcon";
import { MarketIcon } from "@/assets/icons/MarketIcon";
import { TransactionIcon } from "@/assets/icons/TransactionIcon";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex items-center bg-[#1B1C21]">
        <Link href={"/"} className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${ pathname === "/"?"border-b-[#3D5AFE]":"border-b-transparent"}`}>
          <HomeIcon color={`${ pathname === "/"?"#3D5AFE":"#888888"}`} />
          <span  className={`text-[16px] font-semibold ${ pathname === "/"?"text-[#3D5AFE]":"text-[#888888]"} `}>Home</span>
        </Link>
        <Link href={"/market"} className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${ pathname === "/market"?"border-b-[#3D5AFE]":"border-b-transparent"}`}>
          <MarketIcon color={`${ pathname === "/market"?"#3D5AFE":"#888888"}`} />
          <span  className={`text-[16px] font-semibold ${ pathname === "/market"?"text-[#3D5AFE]":"text-[#888888]"} `}>Thị trường</span>
        </Link>
        <Link href={"/transaction"} className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${ pathname === "/transaction"?"border-b-[#3D5AFE]":"border-b-transparent"}`}>
          <TransactionIcon color={`${ pathname === "/transaction"?"#3D5AFE":"#888888"}`} />
          <span  className={`text-[16px] font-semibold ${ pathname === "/transaction"?"text-[#3D5AFE]":"text-[#888888]"} `}>Giao dịch</span>
        </Link>
        <Link href={"/asset"} className={`flex-1 flex flex-col items-center justify-center  text-center px-4 py-2 cursor-pointer border-b-2 ${ pathname === "/asset"?"border-b-[#3D5AFE]":"border-b-transparent"}`}>
          <WalletIcon color={`${ pathname === "/asset"?"#3D5AFE":"#888888"}`} />
          <span  className={`text-[16px] font-semibold ${ pathname === "/asset"?"text-[#3D5AFE]":"text-[#888888]"} `}>Tài sản</span>
        </Link>
      </div>
    </>
  );
};
