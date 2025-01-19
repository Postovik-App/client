import { forwardRef } from "react";
import styles from "./Title.module.css";

const Title = forwardRef(function Title(
  { children, className, size, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={`${styles.title} ${className}`}
      style={{ fontSize: `${size}px` }}
      {...props}
    >
      {children}
    </span>
  );
});

export default Title;
