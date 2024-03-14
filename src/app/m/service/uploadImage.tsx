import { toast } from "react-toastify";

import i18next from "i18next";
import { MAX_SIZE_IMAGE } from "@/utils/constants";
export const UploadImage = (event: any) => {
  const maxPhotos = 5;
  const allowedExtensions = ["png", "jpg", "jpeg"];

  const files = Array.from(event.target.files);
  const filesAccepted = files.filter((file: any) => {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      toast(`${i18next.t("invalidFileFormat")}`, {
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
      toast(`${i18next.t("minimumCapacityError")}`, {
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
