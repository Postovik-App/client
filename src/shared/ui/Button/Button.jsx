import styles from "./Button.module.css";
import classNames from "@/shared/lib/helpers/classNames.js";
import Title from "@/shared/ui/Title/Title.jsx";

export default function Button({
  children,
  className,
  isLoading = false,
  ...restProps
}) {
  return (
    <button
      className={classNames(
        className,
        isLoading === true && styles["loading"],
        styles.button,
      )}
      {...restProps}
    >
      <Title>{children}</Title>
    </button>
  );
}
