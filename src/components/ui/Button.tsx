import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
