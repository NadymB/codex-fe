/* eslint-disable @next/next/no-img-element */
"use client";

import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { GoBack } from "@/components/layouts/GoBack";
import { UploadImage } from "@/components/uploadImage";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/AuthServices";
import { useAliUpload } from "@/services/CloundService";
import { CERTIFICATE_TYPE, getStaticURL } from "@/utils/constants";
import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const TYPE_IMAGE = {
  CARDID_FRONT: "cardIdFront",
  CARDID_BACK: "cardIdBack",
  SELFIE: "selfie",
};

const KycPageLv1 = () => {
  const { currentUser } = useAuth();
  const [dataKycLv1, setDataKycLv1] = useState<any>();
  const imageCardIdFrontRef = useRef<any>(null);
  const imageCardIdBackRef = useRef<any>(null);
  const imageSelfiedRef = useRef<any>(null);
  const [cardIdFrontImages, setCardIdFrontImages] = useState<any[]>([]);
  const [cardIdBackImages, setCardIdBackImages] = useState<any[]>([]);
  const [selfieImages, setSelfieImages] = useState<any[]>([]);
  const [cardIdFrontPreview, setCardIdFrontPreview] = useState<string>();
  const [cardIdBackPreview, setCardIdBackPreview] = useState<string>();
  const [selfiePreview, setSelfiePreview] = useState<string>();
  const [certificateType, setCertificateType] = useState<string>(
    CERTIFICATE_TYPE.ID_CARD
  );
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetKyc = async () => {
    try {
      const response = await authService.getKyc();
      if (response.success) {
        const kycLv1 = response.data.find((item: any) => item.level == 1);
        if (kycLv1) {
          setDataKycLv1(kycLv1);
          setCertificateType(kycLv1.metadata.certificateType);
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
        if (type == TYPE_IMAGE.CARDID_FRONT) {
          setCardIdFrontPreview(image);
          return;
        } else if (type == TYPE_IMAGE.CARDID_BACK) {
          setCardIdBackPreview(image);
          return;
        }
        setSelfiePreview(image);
      };
    }
  };
  const handleFileChange = async (event: any, type: string) => {
    const imgUpload = UploadImage(event);
    if (imgUpload.length !== 0) {
      switch (type) {
        case TYPE_IMAGE.CARDID_FRONT:
          setCardIdFrontImages(imgUpload);
          handlePreviewImage(event, TYPE_IMAGE.CARDID_FRONT);
          break;
        case TYPE_IMAGE.CARDID_BACK:
          setCardIdBackImages(imgUpload);
          handlePreviewImage(event, TYPE_IMAGE.CARDID_BACK);
          break;
        case TYPE_IMAGE.SELFIE:
          setSelfieImages(imgUpload);
          handlePreviewImage(event, TYPE_IMAGE.SELFIE);

          break;
        default:
          break;
      }
    }
  };
  const hanleVerify = async () => {
    setIsLoading(true);
    try {
      const [
        uploadedImagesIdFront,
        uploadedImagesIdBack,
        uploadedImagesSelfie,
      ] = await Promise.all([
        onAliUpload(
          cardIdFrontImages,
          "",
          `certificate_front_id_${currentUser?.id}`
        ),
        onAliUpload(
          cardIdBackImages,
          "",
          `certificate_back_id_${currentUser?.id}`
        ),
        onAliUpload(
          selfieImages,
          "",
          `certificate_selfie_id_${currentUser?.id}`
        ),
      ]);

      let certificateFront = "";
      let certificateBack = "";
      let selfieImage = "";

      if (
        uploadedImagesIdFront &&
        uploadedImagesSelfie &&
        uploadedImagesIdBack
      ) {
        certificateFront =
          uploadedImagesIdFront.map((image: any) => image.url)[0] ||
          dataKycLv1?.metadata?.certificateBack;
        certificateBack =
          uploadedImagesIdBack.map((image: any) => image.url)[0] ||
          dataKycLv1?.metadata?.certificateFront;
        selfieImage =
          uploadedImagesSelfie.map((image: any) => image.url)[0] ||
          dataKycLv1?.metadata?.selfieImage;

        if (
          certificateFront !== "" &&
          certificateBack !== "" &&
          selfieImage !== ""
        ) {
          const data = await authService.verifyLv1({
            certificateType: CERTIFICATE_TYPE.ID_CARD,
            certificateFront,
            certificateBack,
            selfieImage,
            level: 1,
          });
          if (data.success == true) {
            toast(`${t("kycPage.uploadSuccess")}`, {
              position: "bottom-left",
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
        <div>
          <FormControl className=" flex flex-wrap my-1">
          <div className="py-[6px] px-4 flex items-center bg-[#fff4e5] rounded mb-4">
          <div className="py-2 text-[#663c00] ">{t("kycPage.warning")}</div>
        </div>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="demo-radio-buttons-group-label"
              value={certificateType}
              onChange={(e) => setCertificateType(e.target.value)}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value={CERTIFICATE_TYPE.ID_CARD}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": { fill: "#888888" },
                      "&:checked + .MuiSvgIcon-root": {
                        fill: "#3D5AFE !important",
                      },
                    }}
                  />
                }
                label="ID card"
                sx={{ color: "white" }}
              />
              <FormControlLabel
                value={CERTIFICATE_TYPE.PASSPORT}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": { fill: "#888888" },
                      "&:checked + .MuiSvgIcon-root": { fill: "#3D5AFE" },
                    }}
                  />
                }
                label="Passport"
                sx={{ color: "white" }}
              />
              <FormControlLabel
                value={CERTIFICATE_TYPE.DRIVING_LICENSE}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": { fill: "#888888" },
                      "&:checked + .MuiSvgIcon-root": { fill: "#3D5AFE" },
                    }}
                  />
                }
                label="Drving license"
                sx={{ color: "white" }}
              />
              <FormControlLabel
                value={CERTIFICATE_TYPE.RESIDENCE_PERMIT}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": { fill: "#888888" },
                      "&:checked + .MuiSvgIcon-root": { fill: "#3D5AFE" },
                    }}
                  />
                }
                label="Residence permit"
                sx={{ color: "white" }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          className=" flex flex-col items-center justify-center gap-[10px] py-8 mb-4 border border-[#3D5AFE] border-dashed"
          onClick={() => {
            return (
              imageCardIdFrontRef.current && imageCardIdFrontRef.current.click()
            );
          }}
        >
          <img
            className="max-w-[80%]"
            src={
              cardIdFrontPreview ||
              dataKycLv1?.metadata?.certificateFront ||
              `${getStaticURL()}/assets/images/id.png`
            }
            alt=""
          />
          <div className="flex items-center w-fit gap-2 text-[#fff]">
            <input
              ref={imageCardIdFrontRef}
              type="file"
              accept="image/*"
              name="image"
              id="imgUpload"
              onChange={(e) => handleFileChange(e, TYPE_IMAGE.CARDID_FRONT)}
              hidden
            />
            <VisaIcon />
            <span
              className={`${cardIdFrontPreview !== "" || dataKycLv1?.metadata.certificateFront !== "" ? "text-[#3D5AFE]" : "text-[red]"} `}
            >
              {t("kycPage.clickToSelectIDFront")}
            </span>
          </div>
        </div>
        <div
          className=" flex flex-col items-center justify-center gap-[10px] py-8 mb-4 border border-[#3D5AFE] border-dashed"
          onClick={() => {
            return (
              imageCardIdBackRef.current && imageCardIdBackRef.current.click()
            );
          }}
        >
          <img
            className="max-w-[80%]"
            src={
              cardIdBackPreview ||
              dataKycLv1?.metadata?.certificateBack ||
              `${getStaticURL()}/assets/images/id.png`
            }
            alt=""
          />
          <div className="flex items-center w-fit gap-2 text-[#fff]">
            <input
              ref={imageCardIdBackRef}
              type="file"
              accept="image/*"
              name="image"
              id="imgUpload"
              onChange={(e) => handleFileChange(e, TYPE_IMAGE.CARDID_BACK)}
              hidden
            />
            <VisaIcon />
            <span
              className={`${cardIdBackPreview !== "" || dataKycLv1?.metadata?.certificateBack !== "" ? "text-[#3D5AFE]" : "text-[red]"} `}
            >
              {t("kycPage.clickToSelectIDBack")}
            </span>
          </div>
        </div>
        <div
          className=" flex flex-col items-center justify-center gap-[10px] py-8 mb-4 border border-[#3D5AFE] border-dashed"
          onClick={() => {
            return imageSelfiedRef.current && imageSelfiedRef.current.click();
          }}
        >
          <img
            className="max-w-[80%]"
            src={
              selfiePreview ||
              dataKycLv1?.metadata?.selfieImage ||
              `${getStaticURL()}/assets/images/selfie.webp`
            }
            alt=""
          />
          <div className="flex items-center w-fit gap-2 text-[#fff]">
            <input
              ref={imageSelfiedRef}
              type="file"
              accept="image/*"
              name="image"
              id="imgUpload"
              onChange={(e) => handleFileChange(e, TYPE_IMAGE.SELFIE)}
              hidden
            />
            <PhoneIcon />
            <span
              className={`${selfiePreview !== "" || dataKycLv1?.metadata?.selfieImage !== "" ? "text-[#3D5AFE]" : "text-[red]"} `}
            >
              {t("kycPage.clickToSelectSelfie")}
            </span>
          </div>
        </div>
        <div className="w-full mt-6">
          <Button
          disabled={dataKycLv1?.isCanEdit===false}
            sx={{ padding: 0, textTransform: "none" }}
            className="p-0 w-full overflow-hidden normal-case"
            variant="contained"
            onClick={hanleVerify}
          >
            <div className={` flex items-center gap-2 justify-center w-full px-6 py-2 ${dataKycLv1?.isCanEdit===false?"bg-[#343338] text-[#676769]":"bg-[#3d5afe] text-white" }    text-sm text-center text-medium rounded`}>
              {isLoading && <CircularProgress color={"inherit"} size={18} />}
              {t("kycPage.submit")}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KycPageLv1;
