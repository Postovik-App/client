import {Cell} from "@/shared/ui/Cell/Cell.jsx";
import ArrowRightIcon from "@/shared/assets/arrow-right.svg?react";
import Text from "@/shared/ui/Text/Text.jsx";
import styles from "./ActionCell.module.css"

export function ActionCell({
    icon,
    name,
    description,
    className,
    ...restProps
}) {
    return (
        <Cell
            before={icon}
            title={name}
            after={<ArrowRightIcon />}
            description={
                <Text size={15} className={styles.description}>
                    {description}
                </Text>
            }
            className={className}
            {...restProps}
        />
    )
}