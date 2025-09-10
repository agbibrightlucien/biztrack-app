import React from "react";

interface LinkTextProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const LinkText: React.FC<LinkTextProps> = ({
  text,
  onClick,
  href,
  className = "",
}) => {
  const baseClasses =
    "text-blue-600 hover:text-blue-800 cursor-pointer transition-colors";
  const classes = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {text}
      </a>
    );
  }

  return (
    <span onClick={onClick} className={classes}>
      {text}
    </span>
  );
};

export default LinkText;
