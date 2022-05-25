import React from "react";

interface ButtonProps {
  size?: "default" | "lg";
  color?: "main" | "light" | "dark";
  type?: "submit" | "reset";
  children: React.ReactNode;
}
const Button = ({
  size = "default",
  color = "main",
  children,
  type,
}: ButtonProps) => {
  if (size == "lg") {
    return (
      <button
        type={type}
        className={`w-fit h-fit bg-${color} px-4 py-3 rounded text-xl text-white hover:bg-opacity-80 duration-500`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`w-fit h-fit bg-${color} px-2 py-1 rounded text-xl text-white hover:bg-opacity-80 duration-500`}
    >
      {children}
    </button>
  );
};

export default Button;
