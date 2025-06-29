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
    <path d="M2 16C2 14.9391 2.42143 13.9217 3.17157 13.1716C3.92172 12.4214 4.93913 12 6 12H14C15.0609 12 16.0783 12.4214 16.8284 13.1716C17.5786 13.9217 18 14.9391 18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16Z"/>
    <path d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8Z"/>
 
  </svg>
);

export default User;
 

 
