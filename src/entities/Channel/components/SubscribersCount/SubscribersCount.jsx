import styles from "./SubscribersCount.module.css";
import Text from "@/shared/ui/Text/Text.jsx";
import classNames from "@/shared/lib/helpers/classNames.js";

export function SubscribersCount({
  children,
  className,
  isShort,
  ...restProps
}) {
  return (
    <div className={classNames(styles.wrapper, className)} {...restProps}>
      <Text size={15} className={styles.count}>
        {children}
      </Text>
      <Text className={styles.subs} size={15}>
        {isShort ? "subs" : "subscribers"}
      </Text>
    </div>
  );
}
