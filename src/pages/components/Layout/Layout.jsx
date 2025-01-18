import styles from './Layout.module.css'
import classNames from "@/shared/lib/helpers/classNames.js";

export const Layout = ({ children, className, ...restProps }) => (
    <div
        className={classNames(styles.layout, className)}
        {...restProps}
    >
        {children}
    </div>
)
