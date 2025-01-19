import styles from "./Text.module.css";

export default function Text({ children, className, size, ...props }) {
  return (
    <span
      className={`${styles.text} ${className}`}
      style={{ fontSize: `${size}px` }}
      {...props}
    >
      {children}
    </span>
  );
}
