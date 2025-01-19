import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./List.module.css";

export function List({ children, className, ...restProps }) {
  return (
    <div className={classNames(className, styles.wrapper)} {...restProps}>
      {children}
    </div>
  );
}
