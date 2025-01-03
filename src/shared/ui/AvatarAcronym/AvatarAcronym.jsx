import Caption from "../Caption/Caption";
import styles from "./AvatarAcronym.module.css"

function AvatarAcronym({acronym}) {
    return (
        <Caption className={styles.acronym}>
            {acronym}
        </Caption>
    );
}

export default AvatarAcronym;