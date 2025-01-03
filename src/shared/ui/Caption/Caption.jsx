import styles from './Caption.module.css'

function Caption({ children, className }) {
    return (
        <span className={`${styles.caption} ${className}`}>
            {children}
        </span>
    );
}

export default Caption;