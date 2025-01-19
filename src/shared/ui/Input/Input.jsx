import { forwardRef } from "react";
import styles from "./Input.module.css";
import classNames from "@/shared/lib/helpers/classNames.js";

const Input = forwardRef(function Input(
  { placeholder, type = "text", value, onChange, className, ...restProps },
  ref,
) {
  return (
    <input
      ref={ref}
      autoComplete="off"
      className={classNames(styles.input, className)}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      {...restProps}
    />
  );
});

export default Input;
