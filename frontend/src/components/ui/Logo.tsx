import React from "react";
import { Business } from "@mui/icons-material";

interface LogoProps {
  animated?: boolean;
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({ animated = false, size = "medium" }) => {
  const sizeClasses = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-6xl",
  };

  const iconSizes = {
    small: 24,
    medium: 32,
    large: 48,
  };

  return (
    <div
      className={`flex items-center space-x-2 ${
        animated ? "animate-pulse" : ""
      }`}
    >
      <Business className="text-blue-600" sx={{ fontSize: iconSizes[size] }} />
      <span className={`font-bold text-gray-800 ${sizeClasses[size]}`}>
        BizTrack
      </span>
    </div>
  );
};

export default Logo;
