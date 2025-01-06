import NotFound from "@/widgets/components/NotFound/NotFound.jsx";
import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import {useNavigate} from "react-router-dom";
import {useMainButton} from "@/shared/lib/hooks/useMainButton.js";
import ArticlesWidget from "@/widgets/components/ArticlesWidget/ArticlesWidget.jsx";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import styles from './ArticlesPage.module.css'

const fakeArticles = [{
    id: 1,
    title: "Article #1ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
}]

export default function ArticlesPage() {
    const navigate = useNavigate();
    const handleMainButtonClick = () => {
        navigate('/articles/new');
    }

    useBackButton();
    useMainButton({text: "New Article"}, handleMainButtonClick);


    if (!fakeArticles.length) {
        return (
            <NotFound
                title='No articles yet'
                tendText={'Change it!'}
                className={styles.notFound}
                tendTextOnClick={handleMainButtonClick}
            />
        );
    }

    return (
        <>
            <Breadcrumbs className={styles.breadcrumbs}>Articles</Breadcrumbs>
            <ArticlesWidget articles={fakeArticles} />
        </>
    )
}