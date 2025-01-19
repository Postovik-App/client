import Caption from "@/shared/ui/Caption/Caption.jsx";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./PremiumTitle.module.css";

export function PremiumTitle({ children, className }) {
  return (
    <Caption className={classNames(className, styles.title)}>
      {children}
    </Caption>
  );
}
