import Caption from "@/shared/ui/Caption/Caption.jsx";
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({children}) {
    return (
        <Caption className={styles.breadcrumbs} size={15}>
            {children}
        </Caption>
    );
}