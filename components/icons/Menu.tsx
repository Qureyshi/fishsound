import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const Menu = ({ color = "#FFFFFF", width = "24px", height = "24px" }: Props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    >
      <path d="M4 6h40" />
      <path d="M4 18h40" />
      <path d="M4 30h40" />
    </svg>
  );
};

export default Menu;

 