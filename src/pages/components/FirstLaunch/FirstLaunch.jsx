import EyesChat from "@/widgets/components/EyesChat/EyesChat.jsx";
import {firstLaunchChatText} from "@/pages/const/firstLaunch.js";
import {useMainButton} from "@/shared/lib/hooks/useMainButton.js";
import {useSecondaryButton} from "@/shared/lib/hooks/useSecondaryButton.js";
import {useNavigate} from "react-router-dom";

export default function FirstLaunch() {
    const navigate = useNavigate();
    const mainButtonParams = {text: "Leeets do it!"}
    const secondaryButtonParams = {text: "Hell Nah...", position: 'bottom'}

    const handleMainButtonClick = () => {
        navigate('/set-up')
    }
    const handleSecondaryButtonClick = () => {
        navigate('/')
    }

    useMainButton(mainButtonParams, handleMainButtonClick);
    useSecondaryButton(secondaryButtonParams, handleSecondaryButtonClick);

    return (
        <>
            <EyesChat text={firstLaunchChatText} />
        </>
    )
}