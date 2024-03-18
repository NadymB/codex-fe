/* eslint-disable @next/next/no-img-element */
"use client";

import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { GoBack } from "@/components/layouts/GoBack";
import { UploadImage } from "@/components/uploadImage";
import { useAuth } from "@/hooks/useAuth";
import { useAliUpload } from "@/services/CloundService";
import { CERTIFICATE_TYPE, getStaticURL } from "@/utils/constants";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useRef, useState } from "react";

export const TYPE_IMAGE = {
  CARDID_FRONT: "cardIdFront",
  CARDID_BACK: "cardIdBack",
  SELFIE: "selfie",
};
import { t } from "i18next";
import Link from "next/link";

const KycPage = () => {
  const { currentUser } = useAuth();
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
    try {
      if (
        cardIdFrontImages.length > 0 &&
        cardIdBackImages.length > 0 &&
        selfieImages.length > 0
      ) {
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

        let imagesCardIdFront = [];
        let imagesCardIdBack = [];
        let imagesSelfie = [];

        if (
          uploadedImagesIdFront &&
          uploadedImagesSelfie &&
          uploadedImagesIdBack
        ) {
          imagesCardIdFront = uploadedImagesIdFront.map(
            (image: any) => image.url
          );
          imagesCardIdBack = uploadedImagesIdBack.map(
            (image: any) => image.url
          );
          imagesSelfie = uploadedImagesSelfie.map((image: any) => image.url);
          // const data = await authService.verifyLv1({
          //   certificateType: CERTIFICATE_TYPE.ID_CARD,
          //   certificateFront: imagesCardIdFront[0],
          //   certificateBack: imagesCardIdBack[0],
          //   selfieImage: imagesSelfie[0],
          //   level: 1,
          // });
          // console.log("data:", data);
        } else {
          throw new Error("");
        }
      }
    } catch (error) {}
  };
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={t("kycPage.title")} />
      <div className="flex flex-col  px-4 my-4">
        <div>
          <FormControl className=" flex flex-wrap my-1">
            <span className="text-[#888888]">{t("kycPage.warning")}</span>
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
            src={cardIdFrontPreview || `${getStaticURL()}/assets/images/id.png`}
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
              className={`${cardIdFrontImages.length > 0 ? "text-[#3D5AFE]" : "text-[red]"} `}
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
            src={cardIdBackPreview || `${getStaticURL()}/assets/images/id.png`}
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
              className={`${cardIdBackImages.length > 0 ? "text-[#3D5AFE]" : "text-[red]"} `}
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
            src={selfiePreview || `${getStaticURL()}/assets/images/selfie.webp`}
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
              className={`${selfieImages.length > 0 ? "text-[#3D5AFE]" : "text-[red]"} `}
            >
              {t("kycPage.clickToSelectSelfie")}
            </span>
          </div>
        </div>
        <div className="w-full mt-6">
          <Button
            sx={{ padding: 0, textTransform: "none" }}
            className="p-0 w-full overflow-hidden normal-case"
            variant="contained"
            onClick={hanleVerify}
          >
            <div className=" flex justify-center w-full px-6 py-2  bg-[#3d5afe]  text-white text-sm text-center text-medium rounded">
              {t("kycPage.submit")}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KycPage;
