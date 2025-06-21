import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const Stop = ({ color = "currentColor", width = "24px", height = "24px" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    stroke={color}
    strokeWidth={0}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="6" height="20" x="4" y="2" rx="2"/><rect width="6" height="20" x="14" y="2" rx="2"/>
  </svg>
);

export default Stop;

