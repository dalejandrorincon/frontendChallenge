import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  className,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
