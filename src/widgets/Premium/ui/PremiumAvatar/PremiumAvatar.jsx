import styles from "./PremiumAvatar.module.css";
import Avatar from "@/entities/User/components/Avatar/Avatar.jsx";
import { useTelegram } from "@/shared/lib/hooks/useTelegram.js";
import { Badge } from "@/entities/Premium/components/Badge/Badge.jsx";
import { PremiumDescription } from "@/entities/Premium/components/PremiumDescription/PremiumDescription.jsx";
import { premiumAvatarText } from "@/widgets/Premium/const/premium.js";
import { PremiumTitle } from "@/entities/Premium/components/PremiumTitle/PremiumTitle.jsx";

export function PremiumAvatar() {
  const { user } = useTelegram();

  return (
    <div className={styles.wrapper}>
      <Avatar photoSrc={user.photoUrl} size={90} />
      <div className={styles.text__wrapper}>
        <div className={styles.title__wrapper}>
          <PremiumTitle>{premiumAvatarText.title}</PremiumTitle>
          <Badge>{premiumAvatarText.badge}</Badge>
        </div>
        <PremiumDescription>{premiumAvatarText.description}</PremiumDescription>
      </div>
    </div>
  );
}
