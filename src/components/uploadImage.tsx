import { toast } from "react-toastify";

import { t } from "i18next";
import { MAX_SIZE_IMAGE } from "@/utils/constants";
export const UploadImage = (event: any) => {
  const maxPhotos = 10;
  const allowedExtensions = ["png", "jpg", "jpeg", "gif", "webp","svg"];

  const files = Array.from(event.target.files);
  const filesAccepted = files.filter((file: any) => {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      toast(`${t("invalidFileFormat")}`, {
        position: "bottom-center",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (file.size <= MAX_SIZE_IMAGE) {
      return file;
    } else {
      toast(`${t("minimumCapacityError")}`, {
        position: "bottom-center",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  });
  return filesAccepted;
};
