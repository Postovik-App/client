import { SettingsCells } from "@/widgets/components/SettingsCells/SettingsCells.jsx";
import { settingsCells } from "@/pages/const/settings.js";
import styles from "@/pages/components/EditAccountPage/EditAccountPage.module.css";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import { Layout } from "@/pages/components/Layout/Layout.jsx";

export function SettingsPage() {
  useBackButton("/");

  return (
    <Layout>
      <Breadcrumbs>Settings</Breadcrumbs>
      <SettingsCells cells={settingsCells} className={styles.list} />
    </Layout>
  );
}
