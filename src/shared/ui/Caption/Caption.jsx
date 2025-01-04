import styles from './Caption.module.css'

function Caption({ children, size, className }) {
    return (
        <span className={`${styles.caption} ${className}`} style={{fontSize: `${size}px`}}>
            {children}
        </span>
    );
}

export default Caption;