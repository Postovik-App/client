import {Layout} from "@/pages/components/Layout/Layout.jsx";
import {useNavigate} from "react-router-dom";
import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import {useMainButton} from "@/shared/lib/hooks/useMainButton.js";
import NotFound from "@/widgets/components/NotFound/NotFound.jsx";
import styles from "./ChannelsPage.module.css"

const fakeChannels = [
    {
        id: 1,
        title: 'SeasPay'
    }
]

export function ChannelsPage() {
    const navigate = useNavigate();
    const handleMainButtonClick = () => {
        navigate('/channels/new');
    }

    useBackButton();
    useMainButton({text: "Link Channel"}, handleMainButtonClick);

    return (
        <NotFound
            title='No channels yet'
            tendText={'Change it!'}
            className={styles.notFound}
            tendTextOnClick={handleMainButtonClick}
        />
    );

    // return (
    //     <Layout>
    //
    //     </Layout>
    // )
}