import { Breadcrumbs as BreadcrumbsUI } from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs({ children, className, ...restProps }) {
  return (
    <BreadcrumbsUI
      className={classNames(className, styles.breadcrumbs)}
      {...restProps}
    >
      {children}
    </BreadcrumbsUI>
  );
}
