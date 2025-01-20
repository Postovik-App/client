import UserAvatar from "../../widgets/Profile/ui/UserAvatar/UserAvatar.jsx";
import SettingsIconButton from "../../entities/Settings/components/SettingsIcon/SettingsIcon.jsx";
import PremiumBanner from "@/entities/Premium/components/PremiumBanner/PremiumBanner.jsx";
import ProfileNavigationCards from "@/widgets/Profile/ui/ProfileNavigationCards/ProfileNavigationCards.jsx";
import { Layout } from "@/pages/Layout/Layout.jsx";

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
