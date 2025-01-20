import { SettingsCells } from "@/widgets/Settings/ui/SettingsCells/SettingsCells.jsx";
import { settingsCells } from "@/pages/SettingsPage/const/settings.js";
import styles from "@/pages/EditAccountPage/EditAccountPage.module.css";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import { Layout } from "@/pages/Layout/Layout.jsx";

export function SettingsPage() {
  useBackButton("/");

  return (
    <Layout>
      <Breadcrumbs>Settings</Breadcrumbs>
      <SettingsCells cells={settingsCells} className={styles.list} />
    </Layout>
  );
}
