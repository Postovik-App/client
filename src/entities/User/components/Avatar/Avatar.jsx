import Image from "../../../../shared/ui/Image/Image";
import styles from './Avatar.module.css'

function Avatar({ photoSrc, size, className, fallbackIcon }) {
    return (
        <div className={`${styles.container} ${className}`}>
            <Image src={photoSrc} size={size} fallbackIcon={fallbackIcon} className={styles.avatar}/>
        </div>
    );
}

export default Avatar;