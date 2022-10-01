import React from "react";

interface ButtonProps {
  size?: "default" | "lg";
  color?: "main" | "light" | "dark";
  type?: "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = ({
  size = "default",
  color = "main",
  children,
  type,
  onClick,
}: ButtonProps) => {
  if (size == "lg") {
    return (
      <button
        type={type}
        className={`w-fit h-fit bg-${color} px-4 py-3 rounded text:lg md:text-xl text-white hover:bg-opacity-80 duration-500`}
        onClick={!onClick ? () => alert("On Progress") : onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`w-fit h-fit bg-${color} px-2 py-1 rounded text:lg md:text-xl text-white hover:bg-opacity-80 duration-500`}
      onClick={!onClick ? () => alert("On Progress") : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
