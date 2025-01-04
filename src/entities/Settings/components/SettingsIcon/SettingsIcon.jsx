import SettingsIcon from "@/shared/assets/settings.svg?react"
import styles from './SettingsIcon.module.css'

function SettingsIconButton() {
    return (
        <div className={styles.container}>
            <SettingsIcon/>
        </div>
    );
}

export default SettingsIconButton;