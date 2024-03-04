import React from "react";

export const IsTypingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-6"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle cx="84" cy="50" r="10" fill="#f7a600">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="0.4166666666666667s"
          keySplines="0 0.5 0.5 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="10;0"
        ></animate>
        <animate
          attributeName="fill"
          begin="0s"
          calcMode="discrete"
          dur="1.6666666666666667s"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="#f7a600;#f9ae5c;#bf7700;#ffd749;#f7a600"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#f7a600">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="0s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#ffd749">
        <animate
          attributeName="r"
          begin="-0.4166666666666667s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-0.4166666666666667s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#bf7700">
        <animate
          attributeName="r"
          begin="-0.8333333333333334s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-0.8333333333333334s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#f9ae5c">
        <animate
          attributeName="r"
          begin="-1.25s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-1.25s"
          calcMode="spline"
          dur="1.6666666666666667s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
    </svg>
  );
};
