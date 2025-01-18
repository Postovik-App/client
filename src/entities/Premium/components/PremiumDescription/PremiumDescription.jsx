import Text from "@/shared/ui/Text/Text.jsx";
import styles from './PremiumDescription.module.css'
import classNames from "@/shared/lib/helpers/classNames.js";

export function PremiumDescription({ children, className }) {
    return (
        <Text className={classNames(styles.description, className)} size={17}>
            {children}
        </Text>
    )
}