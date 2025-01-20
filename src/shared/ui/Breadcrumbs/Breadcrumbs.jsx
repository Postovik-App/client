import Caption from "@/shared/ui/Caption/Caption.jsx";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs({ children, className }) {
  return (
    <Caption className={classNames(styles.breadcrumbs, className)} size={15}>
      {children}
    </Caption>
  );
}
