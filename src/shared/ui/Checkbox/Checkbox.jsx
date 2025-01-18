import {SelectIcon} from "@/shared/ui/Checkbox/icons/SelectIcon.jsx";
import {SelectCheckedIcon} from "@/shared/ui/Checkbox/icons/SelectCheckedIcon.jsx";

import styles from './Checkbox.module.css'
import classNames from "@/shared/lib/helpers/classNames.js";

export function Checkbox({className, isShowSelectIcon, ...restProps}) {
    return (
        <label className={classNames(
            styles.wrapper,
            className,
        )}
        >
            <input type="checkbox" className={styles.input} {...restProps} />
            <SelectIcon
                className={classNames(
                    styles.select__icon,
                    !isShowSelectIcon && styles.hidden
                )}
                aria-hidden={true}
            />
            <SelectCheckedIcon className={styles.checked__icon} aria-hidden={true}/>
        </label>
    )
}