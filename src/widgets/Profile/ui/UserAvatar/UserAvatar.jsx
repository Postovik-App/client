import Avatar from "../../../../entities/User/components/Avatar/Avatar.jsx";
import { useTelegram } from "@/shared/lib/hooks/useTelegram.js";
import { formatName } from "../../lib/helpers/formatName.js";
import AvatarAcronym from "../../../../shared/ui/AvatarAcronym/AvatarAcronym.jsx";
import { getAcronym } from "../../lib/helpers/getAcronym.js";
import Caption from "../../../../shared/ui/Caption/Caption.jsx";
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
