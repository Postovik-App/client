import styles from './Select.module.css'
import classNames from "@/shared/lib/helpers/classNames.js";

export function Select({children, className, ...restProps}) {
    return (
        <select className={classNames(styles.select, className)} {...restProps}>
            {children}
        </select>
    )
}