import Input from "@/shared/ui/Input/Input.jsx";
import { forwardRef } from "react";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./Input.module.css";

const ArticleInput = forwardRef(
  (
    { className, placeholder, type = "text", value, onChange, ...restProps },
    ref,
  ) => {
    return (
      <Input
        className={classNames(styles.input, className)}
        ref={ref}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    );
  },
);

export default ArticleInput;
