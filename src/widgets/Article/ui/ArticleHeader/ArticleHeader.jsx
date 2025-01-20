import ArticleInput from "@/entities/Article/components/Input/Input.jsx";
import styles from "./ArticleHeader.module.css";
import Avatar from "@/entities/User/components/Avatar/Avatar.jsx";

export function ArticleHeader() {
  return (
    <div className={styles.wrapper}>
      <ArticleInput placeholder={"Title"} />
      <Avatar size={50} className={styles.avatar} />
    </div>
  );
}
