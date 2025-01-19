import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import { LanguageList } from "@/widgets/components/LanguageList/LanguageList.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import { Layout } from "@/pages/components/Layout/Layout.jsx";

export function LanguagePage() {
  useBackButton("/settings");

  return (
    <Layout>
      <Breadcrumbs>Language</Breadcrumbs>
      <LanguageList />
    </Layout>
  );
}
