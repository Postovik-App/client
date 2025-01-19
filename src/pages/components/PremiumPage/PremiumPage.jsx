import { Layout } from "@/pages/components/Layout/Layout.jsx";
import { PremiumAvatar } from "@/widgets/components/PremiumAvatar/PremiumAvatar.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import styles from "./PremiumPage.module.css";
import { SubscriptionsList } from "@/widgets/components/SubscriptionsList/SubscriptionsList.jsx";
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
