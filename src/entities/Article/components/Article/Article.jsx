import styles from "./Article.module.css";
import classNames from "@/shared/lib/helpers/classNames.js";
import Caption from "@/shared/ui/Caption/Caption.jsx";
import PenIcon from "@/shared/assets/pen.svg?react";

export default function Article({ article, className }) {
  return (
    <div className={classNames(styles.container, className)}>
      <Caption size={18} className={styles.caption}>
        {article.title}
      </Caption>
      <PenIcon className={styles.edit__icon} />
    </div>
  );
}
