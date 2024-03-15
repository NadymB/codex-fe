/* eslint-disable @next/next/no-img-element */
"use client";

import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { VisaIcon } from "@/assets/icons/VisaIcon";
import { GoBack } from "@/components/layouts/GoBack";
import { getStaticURL } from "@/utils/constants";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import Link from "next/link";

const KycPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-[#000000]">
      <GoBack title={"Xác thực"} />
      <div className="flex flex-col  px-4 my-4">
        <div>
          <FormControl className=" flex flex-wrap my-1">
            <span className="text-[#888888]">Chọn loại chứng chỉ</span>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
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
                label="Female"
                sx={{ color: "white" }}
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": { fill: "#888888" },
                      "&:checked + .MuiSvgIcon-root": { fill: "#3D5AFE" },
                    }}
                  />
                }
                label="Male"
                sx={{ color: "white" }}
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": { fill: "#888888" },
                      "&:checked + .MuiSvgIcon-root": { fill: "#3D5AFE" },
                    }}
                  />
                }
                label="Other"
                sx={{ color: "white" }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[10px] py-8 mb-4 border border-[#3D5AFE] border-dashed">
          <img
            className="max-w-[80%]"
            src={`${getStaticURL()}/assets/images/id.png`}
            alt=""
          />
          <div className="flex items-center w-fit gap-2 text-[#fff]">
            <VisaIcon />
            <span className="text-[#3D5AFE]">Bấm để chọn ID</span>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[10px] py-8 mb-4 border border-[#3D5AFE] border-dashed">
          <img
            className="max-w-[80%]"
            src={`${getStaticURL()}/assets/images/selfie.webp`}
            alt=""
          />
          <div className="flex items-center w-fit gap-2 text-[#fff]">
            <PhoneIcon />
            <span className="text-[#3D5AFE]">Bấm để chọn selfie</span>
          </div>
        </div>
        <div className="w-full mt-6">
          <Button
            sx={{ padding: 0, textTransform: "none" }}
            className="p-0 w-full overflow-hidden normal-case"
            variant="contained"
          >
            <Link
              href={"/m/setting/payment/create"}
              className=" flex justify-center w-full px-6 py-2  bg-[#3d5afe]  text-white text-sm text-center text-medium rounded"
            >
              Nộp
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KycPage;
