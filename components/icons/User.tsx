import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const User = ({ color = "currentColor", width = "24px", height = "24px" }: Props) => (
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
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/> 
  </svg>
);

export default User;
 