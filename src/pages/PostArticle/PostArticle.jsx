import { Layout } from "@/pages/Layout/Layout.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import { ArticleHeader } from "@/widgets/Article/ui/ArticleHeader/ArticleHeader.jsx";
import { ArticleBody } from "@/widgets/Article/ui/ArticleBody/ArticleBody.jsx";
import styles from "./PostArticle.module.css";
import { useMainButton } from "@/shared/lib/hooks/useMainButton.js";

export function PostArticle() {
  useBackButton("/articles");
  useMainButton({ text: "Publish", hasShineEffect: true });

  return (
    <Layout className={styles.layout}>
      <ArticleHeader />
      <ArticleBody />
    </Layout>
  );
}
