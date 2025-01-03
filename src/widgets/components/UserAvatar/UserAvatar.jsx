import Avatar from "../../../entities/User/components/Avatar/Avatar";
import { useTelegram } from "../../../shared/lib/hooks/useTelegram";
import { formatName } from "../../helpers/formatName";
import AvatarAcronym from "../../../shared/ui/AvatarAcronym/AvatarAcronym";
import { getAcronym } from "../../helpers/getAcronym";
import Caption from "../../../shared/ui/Caption/Caption";
import styles from "./UserAvatar.module.css"

function UserAvatar() {
    const { user } = useTelegram()
    const userFullname = formatName({user})

    return (
        <div className={styles.container}>
            <Avatar
                photoSrc={user.photoUrl}
                size={100}
                fallbackIcon={<AvatarAcronym acronym={getAcronym(userFullname)}/>}
            />
            <Caption>
                {userFullname}
            </Caption>
        </div>
    );
}

export default UserAvatar;