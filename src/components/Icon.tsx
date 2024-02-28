import React from "react";

const Icon = (props: any) => (
  <svg
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.width}
    height={props.height}
    fill={props.fill}
  >
    <g>
      {props.d.map((value: any, index: number) => (
        <path key={index} d={value.d} fill={value.fill}></path>
      ))}
    </g>
  </svg>
);

export default Icon;
