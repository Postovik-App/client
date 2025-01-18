import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import {ThemeList} from "@/widgets/components/ThemeList/ThemeList.jsx";
import {Layout} from "@/pages/components/Layout/Layout.jsx";

export function ThemePage() {
    useBackButton('/settings')

    return (
        <Layout>
            <Breadcrumbs>Theme</Breadcrumbs>
            <ThemeList />
        </Layout>
    )
}