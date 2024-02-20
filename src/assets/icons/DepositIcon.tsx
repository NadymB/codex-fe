import React from "react";

export const DepositIcon = () => {
  return (
    <svg
      className="w-10 h-10"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={6}
        y={11.9999}
        width={20}
        height={14}
        rx={1}
        stroke="#fff"
      />
      <path
        stroke="#fff"
        d="M6 18.5l-1.777-7.998a1 1 0 01.785-1.198L21.07 6.181a1 1 0 011.161.74L23.5 12"
      />
      <path
        fill="#3D5AFE"
        d="M18.998 18.524l-.652-.758-.827.71.78.763.699-.715zm9.387 1a1 1 0 100-2v2zm-7.336 2.406a1 1 0 101.399-1.43l-1.4 1.43zm1.35-5.009a1 1 0 00-1.302-1.517L22.4 16.92zm-3.401 2.603h9.387v-2h-9.387v2zm-.7-.285l2.75 2.69 1.4-1.429-2.751-2.69-1.398 1.43zm1.351.044l2.75-2.362-1.302-1.517-2.75 2.362 1.302 1.517z"
        className="fill-primary-main"
      />
    </svg>
  );
};
