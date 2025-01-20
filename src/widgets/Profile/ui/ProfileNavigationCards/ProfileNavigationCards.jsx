import { useNavigate } from "react-router-dom";

import { navigationCards } from "@/widgets/Profile/const/profile.js";
import NavigationCard from "@/shared/ui/NavigationCard/NavigationCard.jsx";
import styles from "./ProfileNavigationCards.module.css";

export default function ProfileNavigationCards() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {navigationCards.map((item) => (
        <NavigationCard
          key={item.id}
          item={item}
          className={styles.card}
          onClick={() => navigate(item.navigation)}
        />
      ))}
    </div>
  );
}
