import React from "react";

interface ButtonProps {
  icon: any;
  size: number;
  customClasses: string;
  onClick: () => void;
}

const CustomIconButton = ({
  icon,
  size,
  customClasses,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 rounded border px-2 py-2 text-center font-medium transition-all duration-300 ease-in-out hover:bg-opacity-90 ${customClasses}`}
    >
      <img
        src={icon}
        width={size}
        alt="Icon"
        className="transition-all duration-300 ease-in-out hover:brightness-150 hover:drop-shadow-[0_0_10px_#fff]"
      />
    </button>
  );
};

export default CustomIconButton;
