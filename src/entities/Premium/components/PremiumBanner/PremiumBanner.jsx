import styles from './PremiumBanner.module.css'
import Banner from "@/shared/ui/Banner/Banner.jsx";
import {bannerText} from "@/entities/Premium/const/banner.js";

export default function PremiumBanner() {
    return (
        <div>
            <Banner
                header={bannerText['title']}
                description={bannerText['description']}
                className={styles.banner}
                buttonTitle={bannerText['buttonTitle']}
            />
        </div>
    )
}