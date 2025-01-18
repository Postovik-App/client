import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import {ThemeList} from "@/widgets/components/ThemeList/ThemeList.jsx";

export function ThemePage() {
    useBackButton('/settings')

    return (
        <div>
            <Breadcrumbs>Theme</Breadcrumbs>
            <ThemeList />
        </div>
    )
}