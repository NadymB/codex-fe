import cuid from "cuid";

export const convertName = (formatFile: string, fileName: string) => {
  const extension = fileName.split(".").pop();
  const uuid = cuid();

  return formatFile + "-" + uuid + "." + extension;
};
