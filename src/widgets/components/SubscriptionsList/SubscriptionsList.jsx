import styles from "./SubscriptionsList.module.css";
import { List } from "@/shared/ui/List/List.jsx";
import { premiumSubscriptions } from "@/widgets/const/premium.js";
import { Cell } from "@/shared/ui/Cell/Cell.jsx";
import { Divider } from "@/shared/ui/Divider/Divider.jsx";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox.jsx";
import { PremiumPrice } from "@/entities/Premium/components/PremiumPrice/PremiumPrice.jsx";
import Text from "@/shared/ui/Text/Text.jsx";

export function SubscriptionsList() {
  return (
    <div className={styles.wrapper}>
      <List>
        {premiumSubscriptions.map((item, index) => (
          <div key={item.id}>
            <Cell
              before={<Checkbox isShowSelectIcon={true} />}
              title={item.title}
              after={<PremiumPrice price={item.monthPrice} />}
              description={
                <Text className={styles.description}>{item.description}</Text>
              }
            />
            {index < premiumSubscriptions.length - 1 && (
              <Divider className={styles.divider} />
            )}
          </div>
        ))}
      </List>
    </div>
  );
}
