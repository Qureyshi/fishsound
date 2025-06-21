import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const Home = ({ color = "currentColor", width = "24px", height = "24px" }: Props) => (
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
     
  <path  d="M7.8 1.15C8.14619 0.890356 8.56726 0.75 9 0.75C9.43274 0.75 9.85381 0.890356 10.2 1.15L17.2 6.4C17.4484 6.58629 17.65 6.82786 17.7889 7.10557C17.9277 7.38328 18 7.68951 18 8V17.5C18 18.0304 17.7893 18.5391 17.4142 18.9142C17.0391 19.2893 16.5304 19.5 16 19.5H2C1.46957 19.5 0.960859 19.2893 0.585786 18.9142C0.210714 18.5391 0 18.0304 0 17.5V8C0 7.68951 0.0722902 7.38328 0.211146 7.10557C0.350001 6.82786 0.551608 6.58629 0.8 6.4L7.8 1.15ZM9 2.75L2 8V17.5H16V8L9 2.75Z" />
  </svg>
);

export default Home;

 

 