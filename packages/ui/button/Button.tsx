import * as React from "react";
import s from "./styles.module.css";
import cn from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cn(s.button, className)} {...props}>
      {children}
    </button>
  );
};
