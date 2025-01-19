import { Channel } from "@/entities/Channel/components/Channel/Channel.jsx";
import styles from "./ChannelsInfo.module.css";

export function ChannelsInfo() {
  return (
    <div className={styles.wrapper}>
      <Channel name={"SeasPay"} subscribers={100} />
    </div>
  );
}
