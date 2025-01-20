import styles from "./ArticleBody.module.css";
import Textarea from "@/shared/ui/Textarea/Textarea.jsx";

export function ArticleBody() {
  return (
    <div className={styles.wrapper}>
      <Textarea
        className={styles.textarea}
        autoCorrect={true}
        placeholder={"Tell the world something"}
        spellCheck={true}
      />
    </div>
  );
}
