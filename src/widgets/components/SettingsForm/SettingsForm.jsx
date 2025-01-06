import {useRef} from "react";
import Input from "@/shared/ui/Input/Input.jsx";
import Form from "@/shared/ui/Form/Form.jsx";
import {settingsForm} from "@/widgets/const/settings.js";
import {retrieveFormValues} from "@/shared/lib/helpers/retrieveFormValues.js";
import styles from './SettingsForm.module.css'

export default function SettingsForm() {
    const ref = useRef();

    const handleChange = (e) => {
        e.preventDefault();

        const formValues = retrieveFormValues(ref.current)
        console.log(formValues);
    }

    return (
        <div className={styles.container}>
            <Form ref={ref} id={settingsForm.id} className={styles.form} onChange={handleChange}>
                {settingsForm.forms.map((item) => (
                    <Input
                        key={item.id}
                        placeholder={item.placeholder}
                        required={item.required}
                        name={item.name}
                        id={item.id}
                        autocomplete={false}
                    />
                ))}
            </Form>
        </div>
    );
}