import { forwardRef } from "react";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./Form.module.css";

const Form = forwardRef(function Form(
  { children, className, ...restProps },
  ref,
) {
  return (
    <form
      ref={ref}
      className={classNames(styles.form, className)}
      {...restProps}
    >
      {children}
    </form>
  );
});

export default Form;
