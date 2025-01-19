import UserAvatar from "../../../widgets/components/UserAvatar/UserAvatar";
import SettingsIconButton from "../../../entities/Settings/components/SettingsIcon/SettingsIcon";
import PremiumBanner from "@/entities/Premium/components/PremiumBanner/PremiumBanner.jsx";
import ProfileNavigationCards from "@/widgets/components/ProfileNavigationCards/ProfileNavigationCards.jsx";
import { Layout } from "@/pages/components/Layout/Layout.jsx";

export function ProfilePage() {
  return (
    <Layout>
      <SettingsIconButton />
      <UserAvatar />
      <PremiumBanner />
      <ProfileNavigationCards />
    </Layout>
  );
}
