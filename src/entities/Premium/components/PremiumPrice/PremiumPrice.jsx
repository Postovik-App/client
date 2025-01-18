import styles from './PremiumPrice.module.css'
import Text from "@/shared/ui/Text/Text.jsx";
import classNames from "@/shared/lib/helpers/classNames.js";
import TelegramStarIcon from '@/shared/assets/telegram-star.svg?react'

export function PremiumPrice({ price, className, ...restProps }) {
    return (
        <div
            className={classNames(styles.wrapper, className)}
            {...restProps}
        >
            <Text size={17}>
                {`${price}/m`}
            </Text>
            <TelegramStarIcon/>
        </div>
    )
}