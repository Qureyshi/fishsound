import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const Plus = ({ color = "currentColor", width = "24px", height = "24px" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"/><path d="M12 5v14"/>
  </svg>
);
 
export default Plus;
