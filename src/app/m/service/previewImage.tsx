import { CloseIcon } from "@/assets/icons/CloseIcon";
import React, { useState } from "react";

const ImageGallery = ({ image }:{image:string}) => {
  const [previewImage, setPreviewImage] = useState<string>("");

  const openPreview = (image:string) => {
    console.log('xin chaof');
    setPreviewImage(image);
  };

  const closePreview = () => {
    setPreviewImage("");
  };

  return (
    <>
        <img
          className="w-sm max-w-full"
          onClick={() => openPreview(image)}
          src={image}
          alt="Image"
        />
      {previewImage!=="" && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000083] bg-opacity-50 z-50  p-10" onClick={closePreview}>
          <div className="relative h-full w-full flex justify-center items-center">
            <img src={previewImage} alt="Preview" className="max-w-full max-h-full " />
            <button className="absolute top-0 right-0  p-2 rounded-full" onClick={closePreview}>
              <CloseIcon color="#fff"/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
