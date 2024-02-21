"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import LoginWithEmail from "@/components/Login/LoginWithEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen overflow-auto bg-[#000000]">
      <div className="sticky top-0 left-0 w-full px-6 py-6  flex items-center justify-between gap-2">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <BackIcon />
        </div>
        <Link href={"/"}>
          <span className="text-[#3D5AFE]">Đăng ký</span>
        </Link>
      </div>
      <div className="p-4">
        <h4 className="text-[32px] text-[#fff]">Vui lòng đăng nhập!</h4>
        <div>Tab</div>

        <LoginWithEmail />
      </div>
    </div>
  );
};

export default LoginPage;
