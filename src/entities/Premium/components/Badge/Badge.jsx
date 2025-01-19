import Caption from "@/shared/ui/Caption/Caption.jsx";
import styles from "./Badge.module.css";
import classNames from "@/shared/lib/helpers/classNames.js";

export function Badge({ children, className }) {
  return (
    <div className={classNames(styles.badge, className)}>
      <Caption className={classNames(styles.badge__title)}>{children}</Caption>
    </div>
  );
}
