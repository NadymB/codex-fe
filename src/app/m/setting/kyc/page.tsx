"use client";

import { AuthenticationCard } from "@/components/authentication/AuthenticationCard";
import { GoBack } from "@/components/layouts/GoBack";
import { authService } from "@/services/AuthServices";
import { AUTHENTICATION_DATA } from "@/utils/constants";
import { t } from "i18next";
import { useEffect } from "react";

const KycPage = () => {
  const handleGetKyc =  async () =>{
    try {
      const response = authService.getKyc()
      console.log("response", response);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    handleGetKyc()
  },[])
  return (
    <div className="min-h-screen overflow-auto bg-[#000000] text-white">
      <GoBack title={t("authentication.title")} />
      <div className="flex flex-col gap-6 p-4">
        {AUTHENTICATION_DATA.map((item, index) => (
          <AuthenticationCard
            key={index}
            textLevel={t(`authentication.${item.level}`)}
            rightInterstData={item.rightInterests}
            methods={item.method}
            authenticationBtn={t(`authentication.${item.textBtn}`)}
            link={item.link}
            level={item.level}
          />
        ))}
      </div>
    </div>
  );
};

export default KycPage;
