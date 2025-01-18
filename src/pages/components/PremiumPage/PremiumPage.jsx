import {Layout} from "@/pages/components/Layout/Layout.jsx";
import {PremiumAvatar} from "@/widgets/components/PremiumAvatar/PremiumAvatar.jsx";
import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import styles from "./PremiumPage.module.css"

export function PremiumPage() {
    useBackButton()

    return (
        <Layout className={styles.layout}>
            <PremiumAvatar />
        </Layout>
    )
}