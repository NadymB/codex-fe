/* eslint-disable @next/next/no-img-element */
"use client";

import { VisaIcon } from "@/assets/icons/VisaIcon";
import { GoBack } from "@/components/layouts/GoBack";
import { UploadImage } from "@/components/uploadImage";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/AuthServices";
import { useAliUpload } from "@/services/CloundService";
import { getStaticURL } from "@/utils/constants";
import { Button, CircularProgress } from "@mui/material";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const TYPE_IMAGE = {
  CARDID_FRONT: "AddressProof",
  CARDID_BACK: "cardIdBack",
  SELFIE: "selfie",
};

const KycPageLv2 = () => {
  const { currentUser } = useAuth();
  const [dataKycLv2, setDataKycLv2] = useState<any>();
  const imageAddressProofRef = useRef<any>(null);
  const [addressProofImages, setAddressProofImages] = useState<any[]>([]);
  const [addressProofPreview, setAddressProofPreview] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleGetKyc = async () => {
    try {
      const response = await authService.getKyc();
      if (response.success) {
        const kycLv2 = response.data.find((item: any) => item.level == 2);
        if (kycLv2) {
          setDataKycLv2(kycLv2);
        }
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleGetKyc();
  }, []);
  const { onAliUpload } = useAliUpload();
  const handlePreviewImage = (event: any, type: string) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        let image = e.target.result;
        setAddressProofPreview(image);
      };
    }
  };
  const handleFileChange = async (event: any) => {
    const imgUpload = UploadImage(event);
    if (imgUpload.length !== 0) {
      setAddressProofImages(imgUpload);
      handlePreviewImage(event, TYPE_IMAGE.CARDID_FRONT);
    }
  };
  const hanleVerify = async () => {
    setIsLoading(true);

    try {
      const uploadedImagesIdFront = await onAliUpload(
        addressProofImages,
        "",
        `certificate_address_proof_id_${currentUser?.id}`
      );

      let imagesAddressProof = "";

      if (uploadedImagesIdFront) {
        imagesAddressProof =
          uploadedImagesIdFront.map((image: any) => image.url)[0] ||
          dataKycLv2.metadata.address;
        const data = await authService.verifyLv1({
          address: imagesAddressProof[0],
          level: 2,
        });
        if (imagesAddressProof !== "") {
          if (data.success == true) {
            toast(`${t("kycPage.uploadSuccess")}`, {
              position: "bottom-center",
              autoClose: 2000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              type: "success",
            });
            router.push("/m/setting/kyc");
          }
        } else {
          toast(`${t("somethingWentWrong")}`, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={t("kycPage.title")} />
      <div className="flex flex-col  px-4 my-4">
        <div className="py-[6px] px-4 flex items-center bg-[#fff4e5] rounded mb-4">
          <div className="py-2 text-[#663c00] ">{t("kycPage.warning")}</div>
        </div>
        <div
          className=" flex flex-col items-center justify-center gap-[10px] py-8 mb-4 border border-[#3D5AFE] border-dashed"
          onClick={() => {
            return (
              imageAddressProofRef.current &&
              imageAddressProofRef.current.click()
            );
          }}
        >
          <img
            className="max-w-[80%]"
            src={
              addressProofPreview ||
              dataKycLv2?.metadata.address ||
              `${getStaticURL()}/assets/images/id.png`
            }
            alt=""
          />
          <div className="flex items-center w-fit gap-2 text-[#fff]">
            <input
              ref={imageAddressProofRef}
              type="file"
              accept="image/*"
              name="image"
              id="imgUpload"
              onChange={(e) => handleFileChange(e)}
              hidden
            />
            <VisaIcon />
            <span
              className={`${addressProofPreview !== "" || dataKycLv2?.metadata.address !== "" ? "text-[#3D5AFE]" : "text-[red]"} `}
            >
              {t("kycPage.clickToSelectIDFront")}
            </span>
          </div>
        </div>

        <div className="w-full mt-6">
          <Button
            disabled={dataKycLv2?.isCanEdit === false}
            sx={{ padding: 0, textTransform: "none" }}
            className="p-0 w-full overflow-hidden normal-case"
            variant="contained"
            onClick={hanleVerify}
          >
            <div
              className={` flex items-center gap-2 justify-center w-full px-6 py-2 ${dataKycLv2?.isCanEdit === false ? "bg-[#343338] text-[#676769]" : "bg-[#3d5afe] text-white"}    text-sm text-center text-medium rounded`}
            >
              {isLoading && <CircularProgress color={"inherit"} size={18} />}
              {t("kycPage.submit")}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KycPageLv2;
