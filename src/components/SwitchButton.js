import React from "react";

const SwitchButton = ({ labelOn, labelOff, color, bgOn, colorTextOff }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="inline-flex justify-center items-center rounded-full border border-Natural-100 bg-Natural-50 w-70">
      <label className="inline-flex cursor-pointer items-center justify-center rounded-full p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center justify-center rounded-full py-2 px-3 font-medium w-40 ${
            isChecked
              ? `text-${color} bg-${bgOn}`
              : `text-${colorTextOff} bg-Natural-50`
          }`}
        >
          {labelOn}
        </span>
        <span
          className={`flex items-center justify-center rounded-full py-2 px-3 font-medium w-40 ${
            isChecked
              ? `text-${colorTextOff} bg-Natural-50`
              : `text-${color} bg-${bgOn}`
          }`}
        >
          {labelOff}
        </span>
      </label>
    </div>
  );
};

export default SwitchButton;
