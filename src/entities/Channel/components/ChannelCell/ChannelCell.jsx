import {Cell} from "@/shared/ui/Cell/Cell.jsx";
import Avatar from "@/entities/User/components/Avatar/Avatar.jsx";
import Text from "@/shared/ui/Text/Text.jsx";
import styles from "./ChannelCell.module.css"
import classNames from "@/shared/lib/helpers/classNames.js";

export function ChannelCell({
    photoSource,
    name,
    subscribersCount,
    className,
    ...restProps
}) {
    return (
        <Cell
            before={<Avatar photoSrc={photoSource} size={40}/>}
            title={name}
            after={
                <div className={styles.subs__wrapper}>
                    <Text size={15} className={styles.count}>{subscribersCount}</Text>
                    <Text className={styles.subs} size={15}>subs</Text>
                </div>
            }
            className={classNames(styles.cell, className)}
            {...restProps}
        />
    )
}