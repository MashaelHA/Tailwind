import React from "react";

const Button = ({
  color,
  text,
  shade,
  fontSize,
  hieght,
  leftIcon,
  rightIcon,
}) => {
  const buttonClasses = `bg-${color}-${shade} text-Shades-0 font-semibold px-4 rounded-full inline-flex p-1 justify-center items-center gap-2 text-${fontSize} h-${hieght}`; // hover:bg-${color}-600 py-2 px-4

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
  return (
    <button className={buttonClasses}>
       {leftIcon && icon}
      {text}
      {rightIcon && icon}
    </button>
  );
};

export default Button;
