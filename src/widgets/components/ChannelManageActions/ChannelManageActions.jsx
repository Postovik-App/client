import { List } from "@/shared/ui/List/List.jsx";
import { manageActions } from "@/widgets/const/channel.js";
import { Divider } from "@/shared/ui/Divider/Divider.jsx";
import { ActionCell } from "@/entities/Channel/components/ActionCell/ActionCell.jsx";
import styles from "./ChannelManageActions.module.css";

export function ChannelManageActions() {
  return (
    <div className={styles.wrapper}>
      <List>
        {manageActions.map((item, index) => (
          <div key={index}>
            <ActionCell
              icon={<item.icon />}
              title={item.name}
              description={item.description}
            />
            {index < manageActions.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
}
