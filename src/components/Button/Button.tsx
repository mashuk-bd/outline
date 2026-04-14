import React from "react";
import type { ButtonProps } from "./Button.types";
import { buttonBase, buttonVariants } from "./Button.css";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <button className={`${buttonBase} ${buttonVariants[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
