import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {settingsButton} from "@telegram-apps/sdk-react";

export default function SettingsButtonManipulator() {
    const navigate = useNavigate()

    useEffect(() => {
        const handleSettingsButtonClick = () => {
            navigate('/settings')
        }
        settingsButton.onClick(handleSettingsButtonClick)
        settingsButton.show()

        return () => {
            settingsButton.offClick(handleSettingsButtonClick)
        }
    })

    return null
}