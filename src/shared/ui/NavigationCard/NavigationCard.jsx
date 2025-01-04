import styles from './NavigationCard.module.css'
import classNames from "@/shared/lib/helpers/classNames.js";
import Caption from "@/shared/ui/Caption/Caption.jsx";

export default function NavigationCard({item, className, ...restProps}) {

    return (
        <div className={classNames(styles.container, className)} {...restProps}>
            <item.icon/>
            <Caption size={15}>{item.title}</Caption>
        </div>
    )
}