import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import {useNavigate} from "react-router-dom";
import UserAvatar from "@/widgets/components/UserAvatar/UserAvatar.jsx";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import SettingsForm from "@/widgets/components/SettingsForm/SettingsForm.jsx";
import {useMainButton} from "@/shared/lib/hooks/useMainButton.js";
import styles from "./EditAccountPage.module.css"

export function EditAccountPage() {
    const navigate = useNavigate();
    useBackButton('/settings')
    useMainButton({text: 'Save'}, () => navigate('/'))

    return (
        <div>
            <Breadcrumbs>Account</Breadcrumbs>
            <UserAvatar className={styles.avatar}/>
            <SettingsForm/>
        </div>
    )
}