import { Layout } from "@/pages/components/Layout/Layout.jsx";
import { useBackButton } from "@/shared/lib/hooks/useBackButton.js";
import { useMainButton } from "@/shared/lib/hooks/useMainButton.js";
import { closeMiniApp } from "@telegram-apps/sdk-react";
import NotFound from "@/widgets/components/NotFound/NotFound.jsx";
import styles from "./ChannelsPage.module.css";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import { ChannelsList } from "@/widgets/components/ChannelsList/ChannelsList.jsx";

const fakeChannels = [
  {
    id: 1,
    title: "SeasPay",
    subscribersCount: 100,
  },
  {
    id: 2,
    title: "Sinn00s",
    subscribersCount: 10000,
  },
];

export function ChannelsPage() {
  const handleMainButtonClick = () => {
    closeMiniApp(true);
  };

  useBackButton("/");
  useMainButton({ text: "Link Channel" }, handleMainButtonClick);

  if (!fakeChannels) {
    return (
      <NotFound
        title="No channels yet"
        tendText={"Change it!"}
        className={styles.notFound}
        tendTextOnClick={handleMainButtonClick}
      />
    );
  }

  return (
    <Layout className={styles.layout}>
      <Breadcrumbs>Channels</Breadcrumbs>
      <ChannelsList channels={fakeChannels} />
    </Layout>
  );
}
