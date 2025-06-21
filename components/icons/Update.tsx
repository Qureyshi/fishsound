import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const Update = ({ color = "currentColor", width = "24px", height = "24px" }: Props) => (
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
     <path d="M1.75 24.084H24.25" stroke="white"/>
<path d="M6.75 19.084V14.084L19.25 1.58398L24.25 6.58398L11.75 19.084H6.75Z"/>
<path d="M15.5 5.33398L20.5 10.334" stroke="white"/> 
  </svg>
);


export default Update;
