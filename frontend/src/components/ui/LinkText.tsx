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
    "text-primary hover:text-primary-light cursor-pointer transition-colors duration-200 font-medium hover:underline";
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
