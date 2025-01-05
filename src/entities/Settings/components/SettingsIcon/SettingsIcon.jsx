import {useNavigate} from "react-router-dom";
import SettingsIcon from "@/shared/assets/settings.svg?react"
import styles from './SettingsIcon.module.css'

function SettingsIconButton() {
    const navigate = useNavigate();

    return (
        <div className={styles.container} onClick={() => {navigate('/settings')}}>
            <SettingsIcon/>
        </div>
    );
}

export default SettingsIconButton;