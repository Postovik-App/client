import { forwardRef } from "react";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./Textarea.module.css";

const Textarea = forwardRef(
  ({ className, onChange, value, ...restProps }, ref) => {
    return (
      <textarea
        className={classNames(styles.textarea, className)}
        ref={ref}
        onChange={onChange}
        value={value}
        {...restProps}
      />
    );
  },
);

export default Textarea;
