import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const Close = ({ color = "currentColor", width = "24px", height = "24px" }: Props) => (
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
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/> 
  </svg>
);

export default Close;
 