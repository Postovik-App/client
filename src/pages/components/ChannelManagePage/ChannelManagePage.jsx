import {Layout} from "@/pages/components/Layout/Layout.jsx";
import {ChannelsInfo} from "@/widgets/components/ChannelsInfo/ChannelsInfo.jsx";
import {useBackButton} from "@/shared/lib/hooks/useBackButton.js";
import {Divider} from "@/shared/ui/Divider/Divider.jsx";
import styles from "./ChannelManagePage.module.css"
import {ChannelManageActions} from "@/widgets/components/ChannelManageActions/ChannelManageActions.jsx";

export function ChannelManagePage() {
    useBackButton('/channels')

    return (
        <Layout className={styles.layout}>
            <ChannelsInfo/>
            <Divider className={styles.divider}/>
            <ChannelManageActions/>
        </Layout>
    )
}