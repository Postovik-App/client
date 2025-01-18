import styles from './Banner.module.css'
import Text from '@/shared/ui/Text/Text.jsx'
import Title from "@/shared/ui/Title/Title.jsx";
import Button from "@/shared/ui/Button/Button.jsx";
import classNames from "@/shared/lib/helpers/classNames.js";

export default function Banner({
    header,
    description,
    buttonTitle,
    className,
    ...restProps
}) {
    return (
            <div
                className={classNames(styles.banner, className)}
                {...restProps}
            >
                <div className={`${styles.text__container}`}>
                    <Title size={14}>
                        {header}
                    </Title>
                    <Text size={14} className={styles.description}>{description}</Text>
                </div>
                <div className={styles.button__container}>
                    <Button>
                        {buttonTitle}
                    </Button>
                </div>
            </div>
    );
}