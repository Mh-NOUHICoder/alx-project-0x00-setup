// components/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles, // required by interface
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none";
  const className = `${base} ${sizeClasses[size]} ${shape} ${styles}`.trim();

  return (
    <button type="button" className={className}>
      {title}
    </button>
  );
};

export default Button;
