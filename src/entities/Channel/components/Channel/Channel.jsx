import styles from "./Channel.module.css";
import classNames from "@/shared/lib/helpers/classNames.js";
import Title from "@/shared/ui/Title/Title.jsx";
import { SubscribersCount } from "@/entities/Channel/components/SubscribersCount/SubscribersCount.jsx";
import Avatar from "@/entities/User/components/Avatar/Avatar.jsx";

export function Channel({ photo, name, className, subscribers, ...restProps }) {
  return (
    <div className={classNames(styles.wrapper, className)} {...restProps}>
      <div className={styles.left}>
        <Title size={20}>{name}</Title>
        <SubscribersCount>{subscribers}</SubscribersCount>
      </div>
      <div>
        <Avatar photoSrc={photo} size={100} />
      </div>
    </div>
  );
}
