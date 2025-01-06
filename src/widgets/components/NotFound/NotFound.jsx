import styles from './NotFound.module.css'
import classNames from "@/shared/lib/helpers/classNames.js";
import Title from "@/shared/ui/Title/Title.jsx";
import Text from "@/shared/ui/Text/Text.jsx";
import Lottie from 'lottie-react'
import eggAnimation from '@/shared/animations/egg.json'
import {useRef} from "react";

export default function NotFound({
    icon,
    title,
    tendText,
    className,
    tendTextOnClick,
    ...restProps
}) {
    const lottieRef = useRef();
    const Icon = icon ? icon : () => (
        <Lottie
            lottieRef={lottieRef}
            animationData={eggAnimation}
            autoplay={true}
            loop={false}
            onClick={() => lottieRef.current.goToAndPlay(0)}
            className={styles.icon}
        />
    )

    return (
        <div className={classNames(styles.container, className)} {...restProps}>
            <div className={styles.icon__container}>
                <Icon/>
            </div>
            <Title size={24}>{title}</Title>
            <Text className={styles.tend__text} size={17} onClick={tendTextOnClick}>{tendText}</Text>
        </div>
    );
}