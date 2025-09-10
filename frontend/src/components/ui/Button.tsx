import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const LoadingSpinner: React.FC = () => {
  return (
    <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
  );
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  variant = "primary",
  fullWidth = false,
}) => {
  const baseClasses =
    "px-6 py-3 font-medium text-base rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-button";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  };

  const widthClasses = fullWidth ? "w-full" : "";

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClasses}`}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? "ml-2" : ""}>{text}</span>
    </button>
  );
};

export default Button;
