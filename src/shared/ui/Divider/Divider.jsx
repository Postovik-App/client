import styles from './Divider.module.css'
import classNames from "@/shared/lib/helpers/classNames.js";

export function Divider({ className }) {
    return (
        <div className={classNames(styles.divider, className)}></div>
    )
}