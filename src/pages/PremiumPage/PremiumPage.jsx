import { Layout } from "@/pages/Layout/Layout.jsx";
import { PremiumAvatar } from "@/widgets/Premium/ui/PremiumAvatar/PremiumAvatar.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import styles from "./PremiumPage.module.css";
import { SubscriptionsList } from "@/widgets/Premium/ui/SubscriptionsList/SubscriptionsList.jsx";
import { useMainButton } from "@/shared/lib/hooks/useMainButton.js";

export function PremiumPage() {
  useBackButton();
  useMainButton({ text: "Subscribe" }, () => null);

  return (
    <Layout className={styles.layout}>
      <PremiumAvatar />
      <SubscriptionsList />
    </Layout>
  );
}
