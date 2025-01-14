import classNames from "@/shared/lib/helpers/classNames.js";
import Lottie from "lottie-react";
import {TypingText} from "@/shared/ui/TypingText/TypingText.jsx";
import EyesAnimation from '@/shared/animations/eyes.json'
import styles from "./EyesChat.module.css"

export default function EyesChat({text, className, ...restProps}) {
    return (
        <div className={classNames(styles.container, className)} {...restProps}>
            <div className={styles.animation}>
                <Lottie animationData={EyesAnimation} />
            </div>
            <TypingText text={text} />
        </div>
    )
}