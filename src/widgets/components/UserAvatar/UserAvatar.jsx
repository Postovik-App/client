import Avatar from "../../../entities/User/components/Avatar/Avatar";
import { useTelegram } from "@/shared/lib/hooks/useTelegram.js";
import { formatName } from "../../helpers/formatName";
import AvatarAcronym from "../../../shared/ui/AvatarAcronym/AvatarAcronym";
import { getAcronym } from "../../helpers/getAcronym";
import Caption from "../../../shared/ui/Caption/Caption";
import classNames from "@/shared/lib/helpers/classNames.js";
import styles from "./UserAvatar.module.css";

function UserAvatar({ className }) {
  const { user } = useTelegram();
  const userFullName = formatName({ user });

  return (
    <div className={classNames(styles.container, className)}>
      <Avatar
        photoSrc={user.photoUrl}
        size={100}
        fallbackIcon={<AvatarAcronym acronym={getAcronym(userFullName)} />}
      />
      <Caption className={styles.name}>{userFullName}</Caption>
    </div>
  );
}

export default UserAvatar;
