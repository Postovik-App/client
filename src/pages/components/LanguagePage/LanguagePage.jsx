import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import {LanguageList} from "@/widgets/components/LanguageList/LanguageList.jsx";
import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";

export function LanguagePage() {
    useBackButton('/settings')

    return (
        <div>
            <Breadcrumbs>Language</Breadcrumbs>
            <LanguageList/>
        </div>
    )
}