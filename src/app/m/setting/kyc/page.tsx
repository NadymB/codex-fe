/* eslint-disable @next/next/no-img-element */
"use client";

import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import Image from "next/image";
import Link from "next/link";
import "../../../../../i18n";
import { Button } from "@mui/material";

const KycPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={"Xác thực"} />
      <div className="flex flex-col  px-4 my-4">
        <div className="py-[6px] px-4 flex items-center bg-[#fff4e5] rounded mb-4">
          <div className="py-2 text-[#663c00] ">
            Tài liệu chỉ có thể chứng nhận một tài khoản. Vui lòng xác minh
            trước khi bạn gửi nó.
          </div>
        </div>
        <div>
          <div className="text-[#fff]">Yêu cầu tải lên chứng chỉ nhận dạng</div>
          <div className="pl-[40px] my-4">
            <li className="text-[#888888]">
              <span>
                Không nhận được các bộ phận sao chép hoặc quét, vui lòng cung
                cấp ảnh gốc.
              </span>
            </li>
            <li className="text-[#888888]">
              <span>Phải là ID hợp lệ do chính phủ ban hành.</span>
            </li>
          </div>
          <img className="w-full" src={`${getStaticURL()}/assets/images/id.png`} alt="" />
        </div>
        {/*  */}
        <div>
          <div className="text-[#fff]">Hướng dẫn</div>
          <div className="pl-[40px] my-4">
            <li className="text-[#888888]">
              <span>
              Hãy chắc chắn rằng ánh sáng là tốt khi chụp, và chỉ bạn xuất hiện trong hình.
              </span>
            </li>
            <li className="text-[#888888]">
              <span>Vui lòng điều chỉnh vị trí của khuôn mặt càng nhiều càng tốt trong khu vực thu thập càng nhiều càng tốt.</span>
            </li>
          </div>
          <img className="w-full" src={`${getStaticURL()}/assets/images/selfie.webp`} alt="" />
        </div>
       <div className="w-full mt-6">
       <Button
          sx={{ padding: 0, textTransform: "none" }}
          className="p-0 w-full overflow-hidden normal-case"
          variant="contained"
        >
          <Link
            href={"/m/setting/payment/create"}
            className=" flex justify-center w-full px-6 py-2  bg-[#3d5afe]  text-white text-sm text-center text-medium rounded"
          >
            Bước tiếp theo
          </Link>
        </Button>
       </div>
      </div>
    </div>
  );
};

export default KycPage;
