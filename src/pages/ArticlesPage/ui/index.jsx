import NotFound from "@/widgets/NotFound/NotFound.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import { useNavigate } from "react-router-dom";
import { useMainButton } from "@/shared/lib/hooks/useMainButton.js";
import ArticlesWidget from "@/widgets/Article/ui/ArticlesWidget/ArticlesWidget.jsx";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import styles from "./index.module.css";
import { Layout } from "@/pages/Layout/Layout.jsx";

const fakeArticles = [
  {
    id: 1,
    title: "Article #1",
  },
];

export function ArticlesPage() {
  const navigate = useNavigate();
  const handleMainButtonClick = () => {
    navigate("/articles/new");
  };

  useBackButton("/");
  useMainButton({ text: "New Article" }, handleMainButtonClick);

  if (!fakeArticles.length) {
    return (
      <NotFound
        title="No articles yet"
        tendText={"Change it!"}
        className={styles.notFound}
        tendTextOnClick={handleMainButtonClick}
      />
    );
  }

  return (
    <Layout>
      <Breadcrumbs className={styles.breadcrumbs}>Articles</Breadcrumbs>
      <ArticlesWidget articles={fakeArticles} />
    </Layout>
  );
}
