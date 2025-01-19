import { Cell } from "@/shared/ui/Cell/Cell.jsx";
import Avatar from "@/entities/User/components/Avatar/Avatar.jsx";
import styles from "./ChannelCell.module.css";
import classNames from "@/shared/lib/helpers/classNames.js";
import { SubscribersCount } from "@/entities/Channel/components/SubscribersCount/SubscribersCount.jsx";

export function ChannelCell({
  photoSource,
  name,
  subscribersCount,
  className,
  ...restProps
}) {
  return (
    <Cell
      before={<Avatar photoSrc={photoSource} size={40} />}
      title={name}
      after={
        <SubscribersCount isShort={true}>{subscribersCount}</SubscribersCount>
      }
      className={classNames(styles.cell, className)}
      {...restProps}
    />
  );
}
