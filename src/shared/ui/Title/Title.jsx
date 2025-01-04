import styles from './Title.module.css'

export default function Title({ children, className, size, ...props }) {
    return (
        <span className={`${styles.title} ${className}`} style={{fontSize: `${size}px`}} {...props}>{children}</span>
    )
}
