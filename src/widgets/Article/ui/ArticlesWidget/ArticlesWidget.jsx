import Article from "@/entities/Article/components/Article/Article.jsx";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./ArticlesWidget.module.css";

export default function ArticlesWidget({ articles, className }) {
  return (
    <div className={classNames(styles.container, className)}>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}
