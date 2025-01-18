import styles from "./Cell.module.css"
import classNames from "@/shared/lib/helpers/classNames.js";
import Text from "@/shared/ui/Text/Text.jsx";

export function Cell({
    before,
    after,
    navigationLabel,
    title,
    description,
    className,
    ...restProps
}) {
    return (
        <label
            className={classNames(styles.wrapper, className)}
            {...restProps}
        >
            <div className={styles.before__wrapper}>
                {before}
                <div className={styles.text__wrapper}>
                    <Text size={17}>{title}</Text>
                    {description}
                </div>
            </div>
            <div className={styles.after__wrapper}>
                <Text size={17} className={styles.label}>{navigationLabel}</Text>
                {after}
            </div>
        </label>
    )
}