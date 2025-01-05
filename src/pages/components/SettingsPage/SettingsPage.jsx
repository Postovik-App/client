import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import {useNavigate} from "react-router-dom";
import UserAvatar from "@/widgets/components/UserAvatar/UserAvatar.jsx";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import SettingsForm from "@/widgets/components/SettingsForm/SettingsForm.jsx";
import {useMainButton} from "@/shared/lib/hooks/useMainButton.js";
import styles from "./SettingsPage.module.css"


export default function SettingsPage() {
    const navigate = useNavigate();
    useBackButton()
    useMainButton({text: 'Save'}, () => navigate('/'))

    return (
        <div>
            <Breadcrumbs>Settings</Breadcrumbs>
            <UserAvatar className={styles.avatar}/>
            <SettingsForm/>
        </div>
    )
}