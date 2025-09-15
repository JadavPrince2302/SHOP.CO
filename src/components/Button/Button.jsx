import React from "react";


const Button = ({ children, onClick, variant = "primary", size = "md", className = "" }) => {

  const variants = {
    primary: "bg-black text-white font-satoshi",
    secondary: "bg-white text-black font-satoshi",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
