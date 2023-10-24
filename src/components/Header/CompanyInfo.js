import React from "react";

const CompanyInfo = ({
  imageUrl,
  color,
  text,
  shade,
  fontSize,
  height,
  width,
  leftIcon,
  rightIcon,
}) => {
  const icon = (
    <img
      src={imageUrl}
      alt="Company Logo"
      className={`w-${width} h-${height} rounded-full object-cover mr-4`}
    />
  );
  return (
    <div
      className={`flex text-${color}-${shade} font-semibold justify-end items-center text-${fontSize}`}
    >
      {leftIcon && icon}
      <p className="text-xl font-semibold mr-4">{text}</p>
      {rightIcon && icon}
    </div>
  );
};

export default CompanyInfo;
