import React from "react";

export const DirectIcon = ({ color }: { color?: string }) => {
  return (
    <svg viewBox="0 0 26 26" width="19" fill={color || "#000"} height="19">
      <polygon points="9.4,6.8 9.4,8.8 15.8,8.8 6.6,18.1 8,19.5 17.3,10.2 17.3,16.7 19.3,16.7 19.3,6.8 "></polygon>
    </svg>
  );
};
