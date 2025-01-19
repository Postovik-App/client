import { forwardRef, useRef, useLayoutEffect } from "react";
import { typeText } from "@/shared/lib/helpers/typeText.js";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./TypingText.module.css";

export const TypingText = forwardRef(function TypingText(
  { className, text, typeSpeed },
  ref,
) {
  const typingRef = useRef(null);

  useLayoutEffect(() => {
    typeText({
      element: typingRef.current,
      mainText: text,
      typeSpeed: typeSpeed,
    });
  }, [typeSpeed, text]);

  return (
    <div ref={ref}>
      <span
        ref={typingRef}
        className={classNames(styles.typing__text, className)}
      ></span>
    </div>
  );
});
