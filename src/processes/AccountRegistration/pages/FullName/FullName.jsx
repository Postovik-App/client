import { Layout } from "@/pages/Layout/Layout.jsx";
import { Breadcrumbs } from "@/processes/AccountRegistration/components/Breadcrumbs/Breadcrumbs.jsx";
import UserAvatar from "@/widgets/Profile/ui/UserAvatar/UserAvatar.jsx";

export function FullName() {
  return (
    <Layout>
      <Breadcrumbs>Who you are ?!</Breadcrumbs>
      <UserAvatar />
    </Layout>
  );
}
