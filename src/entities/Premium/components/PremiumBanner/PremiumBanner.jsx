import styles from "./PremiumBanner.module.css";
import Banner from "@/shared/ui/Banner/Banner.jsx";
import { bannerText } from "@/entities/Premium/const/banner.js";
import { useNavigate } from "react-router-dom";

export default function PremiumBanner() {
  const navigate = useNavigate();

  return (
    <Banner
      header={bannerText["title"]}
      description={bannerText["description"]}
      className={styles.banner}
      buttonTitle={bannerText["buttonTitle"]}
      onClick={() => navigate("/premium")}
    />
  );
}
