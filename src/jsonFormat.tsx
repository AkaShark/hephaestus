import { Action, ActionPanel, Form, useNavigation } from "@raycast/api";
import { ResultDetailView } from "./utils/resultView";
import { FormValidation, useForm } from "@raycast/utils/dist/useForm";
import { formatJson } from "./jsonFormat/formatConvert";


interface FormValues {
    jsonValue: string;
}

export default function Command() {
    const {push} = useNavigation();
    const {handleSubmit, itemProps} = useForm<FormValues>({
        async onSubmit(values) {
            // handle json format
            const formattedJson = await formatJson(values.jsonValue);
            if (!formattedJson) return;
            push(<ResultDetailView result={formattedJson} />)
        },
        validation: {
            jsonValue: FormValidation.Required
        }
    })

    const renderActions = () => {
        const formatAction = () => {
            return <Action.SubmitForm
            title="Format"
            onSubmit={(values) => {
                handleSubmit({...values} as FormValues)
            }}
            />
        }

        return <ActionPanel.Section>{formatAction()}</ActionPanel.Section>
    }

    return (
    <Form actions={<ActionPanel>{renderActions()}</ActionPanel>}>
        <Form.TextArea id="jsonValue" title="JSON" placeholder="Enter JSON" autoFocus/>
    </Form>
    )
}
