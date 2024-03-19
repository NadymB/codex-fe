import { AuditNotPassedIcon } from "@/assets/icons/AuditNotPassedIcon";
import { KycPassedIcon } from "@/assets/icons/KycPassedIcon";
import { ModeratedIcon } from "@/assets/icons/ModeratedIcon";
import { CERTIFICATE_STATUS } from "@/utils/constants";
import { t } from "i18next";

export const KycStatus = ({ status }: { status: string }) => {
  const handleRenderStatus = () => {
    switch (status) {
      case CERTIFICATE_STATUS.PENDING:
        return (
          <div className="flex items-center gap-2">
            <ModeratedIcon />
            <span className="mb-[2px] text-[16px] font-normal text-[#3D5AFE]">{t("kycPage.pending")}</span>
          </div>
        );
      case CERTIFICATE_STATUS.APPROVED:
        return (
          <div className="flex items-center gap-2">
            <KycPassedIcon />
            <span className="mb-[2px] text-[16px] font-normal text-[#00b42a]">{t("kycPage.examinationPassed")}</span>
          </div>
        );
      case CERTIFICATE_STATUS.REJECTED:
        return (
          <div className="flex items-center gap-2">
            <AuditNotPassedIcon />
            <span className="mb-[2px] text-[16px] font-normal text-[red]">{t("kycPage.rejected")}</span>
          </div>
        );

      default:
        break;
    }
  };
  return <>{handleRenderStatus()}</>;
};
