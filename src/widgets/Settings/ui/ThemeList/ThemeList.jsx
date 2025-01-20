import { List } from "@/shared/ui/List/List.jsx";
import Form from "@/shared/ui/Form/Form.jsx";
import { Cell } from "@/shared/ui/Cell/Cell.jsx";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox.jsx";
import { Divider } from "@/shared/ui/Divider/Divider.jsx";
import { availableThemes } from "@/widgets/Settings/const/theme.js";
import styles from "./ThemeList.module.css";

export function ThemeList() {
  return (
    <List className={styles.list}>
      <Form name="theme-select">
        {availableThemes.map((theme, index) => (
          <div key={theme.id}>
            <Cell
              title={theme.title}
              before={
                <Checkbox
                  name="theme-select"
                  value={theme.name}
                  isShowSelectIcon={false}
                />
              }
            />
            {index < availableThemes.length - 1 && <Divider />}
          </div>
        ))}
      </Form>
    </List>
  );
}
