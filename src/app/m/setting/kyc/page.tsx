"use client";

import { KycCardLv1 } from "@/components/kyc/KycCardLv1";
import { KycCardLv2 } from "@/components/kyc/KycCardLv2";
import { GoBack } from "@/components/layouts/GoBack";
import { authService } from "@/services/AuthServices";
import { CERTIFICATE_STATUS } from "@/utils/constants";
import { t } from "i18next";
import { useEffect, useState } from "react";

const KycPage = () => {
  const [dataKycLv1, setDataKycLv1] = useState<any>();
  const [dataKycLv2, setDataKycLv2] = useState<any>();
  const handleGetKyc = async () => {
    try {
      const response = await authService.getKyc();
      if (response.success) {
        const kycLv1 = response.data.find((item: any) => item.level == 1);
        const kycLv2 = response.data.find((item: any) => item.level == 2);
        setDataKycLv1(kycLv1);
        setDataKycLv2(kycLv2)
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleGetKyc();
  }, []);
  return (
    <div className="min-h-screen overflow-auto bg-[#000000] text-white">
      <GoBack title={t("authentication.title")} />
      <div className="flex flex-col gap-6 p-4">
        <KycCardLv1 kyc={dataKycLv1} />
        <KycCardLv2 kyc={dataKycLv2} disabled={!dataKycLv1||dataKycLv1.status!==CERTIFICATE_STATUS.APPROVED} />
      </div>
    </div>
  );
};

export default KycPage;
