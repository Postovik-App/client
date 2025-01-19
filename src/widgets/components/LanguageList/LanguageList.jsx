import styles from "./LanguageList.module.css";
import Form from "@/shared/ui/Form/Form.jsx";
import { availableLanguages } from "@/widgets/const/language.js";
import { Cell } from "@/shared/ui/Cell/Cell.jsx";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox.jsx";
import { Divider } from "@/shared/ui/Divider/Divider.jsx";
import { List } from "@/shared/ui/List/List.jsx";

export function LanguageList() {
  return (
    <List className={styles.list}>
      <Form name="language-select">
        {availableLanguages.map((language, index) => (
          <div key={language.id}>
            <Cell
              title={language.title}
              before={
                <Checkbox
                  name="language-select"
                  value={language.name}
                  isShowSelectIcon={false}
                />
              }
            />
            {index < availableLanguages.length - 1 && <Divider />}
          </div>
        ))}
      </Form>
    </List>
  );
}
