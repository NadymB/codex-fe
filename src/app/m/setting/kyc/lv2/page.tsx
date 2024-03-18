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
  CARDID_FRONT: "AddressProof",
  CARDID_BACK: "cardIdBack",
  SELFIE: "selfie",
};
import { t } from "i18next";
import Link from "next/link";

const KycPage = () => {
  const { currentUser } = useAuth();
  const imageAddressProofRef = useRef<any>(null);
  const imageCardIdBackRef = useRef<any>(null);
  const imageSelfiedRef = useRef<any>(null);
  const [addressProofImages, setAddressProofImages] = useState<any[]>([]);
  const [cardIdBackImages, setCardIdBackImages] = useState<any[]>([]);
  const [selfieImages, setSelfieImages] = useState<any[]>([]);
  const [addressProofPreview, setAddressProofPreview] = useState<string>();
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
    try {
      if (
        addressProofImages.length > 0 &&
        cardIdBackImages.length > 0 &&
        selfieImages.length > 0
      ) {
        const uploadedImagesIdFront = await 
          onAliUpload(
            addressProofImages,
            "",
            `certificate_address_proof_id_${currentUser?.id}`
          )

        let imagesAddressProof = [];

        if (
          uploadedImagesIdFront
        ) {
          imagesAddressProof = uploadedImagesIdFront.map(
            (image: any) => image.url
          );
          // const data = await authService.verifyLv1({
          //   certificateType: CERTIFICATE_TYPE.ID_CARD,
          //   certificateFront: imagesAddressProof[0],
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
       
        <div
          className=" flex flex-col items-center justify-center gap-[10px] py-8 mb-4 border border-[#3D5AFE] border-dashed"
          onClick={() => {
            return (
              imageAddressProofRef.current && imageAddressProofRef.current.click()
            );
          }}
        >
          <img
            className="max-w-[80%]"
            src={addressProofPreview || `${getStaticURL()}/assets/images/id.png`}
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
              className={`${addressProofImages.length > 0 ? "text-[#3D5AFE]" : "text-[red]"} `}
            >
              {t("kycPage.clickToSelectIDFront")}
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
