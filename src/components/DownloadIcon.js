import React from "react";

const DownloadIcon = ({ color, shade, bgColor, bgShade, size }) => {
  const downloadIconClasses = `inline-flex text-${color}-${shade} px-2 justify-center items-center gap-2 rounded-full bg-${bgColor}-${bgShade} py-2`; // py-2 border-2 border-${color}-${shade}

  return (
    <div className={downloadIconClasses}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-${size} h-${size}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </div>
  );
};

export default DownloadIcon;
