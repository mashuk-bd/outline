import React from "react";
import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <button className={`outline-button outline-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
