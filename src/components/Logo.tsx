import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.96 11.28C29.04 13.04 30.4 15.6 30.4 18.48C30.4 24.32 25.52 29.2 19.68 29.2C13.84 29.2 8.96 24.32 8.96 18.48C8.96 12.64 13.84 7.76 19.68 7.76C22.56 7.76 25.12 9.12 26.96 11.28Z"
        fill="url(#logo-gradient)"
      />
      <path
        d="M19.68 29.2C13.84 29.2 8.96 24.32 8.96 18.48C8.96 12.64 13.84 7.76 19.68 7.76V29.2Z"
        fill="#00AAB2"
      />
      <circle cx="32" cy="18.48" r="4" fill="#00C4CC" />
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="8.96"
          y1="18.48"
          x2="30.4"
          y2="18.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00E0EA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
