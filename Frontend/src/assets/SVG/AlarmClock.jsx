import React from "react";

const AlarmClock = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ className }
    >
      <circle cx="12" cy="13" r="8"></circle>
      <path d="M12 9v4l2 2"></path>
      <path d="M5 3 2 6"></path>
      <path d="m22 6-3-3"></path>
      <path d="M6.38 18.7 4 21"></path>
      <path d="M17.64 18.67 20 21"></path>
    </svg>
  );
};

export default AlarmClock;
