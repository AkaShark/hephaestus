import { Action, ActionPanel, Form, useNavigation } from "@raycast/api";
import { InputJsonFormValues, InputJsonProps } from "./types";
import { FormValidation, useForm } from "@raycast/utils";
import { ResultDetailView } from "./resultView";


export function InputJSON({navTitle, actionTitle, type, onConvert, extraNode}: InputJsonProps) {
    const { push } = useNavigation();
    const { handleSubmit } = useForm<InputJsonFormValues>({
        onSubmit: async (values) => {
            console.log("start convert type:", type, "option:", values.option);
            const result = await onConvert(values);
            if (!result) return;
            push(<ResultDetailView result={result} />);
        },
        validation: {
            jsonValue: FormValidation.Required,
        },
    });

    const renderAction = () => {
        const submitButton = () => {
            return (
                <Action.SubmitForm
                    title={actionTitle}
                    onSubmit={(values) => handleSubmit({...values} as InputJsonFormValues)}
                />
            )
        };

        return (
            <ActionPanel.Section>
                {submitButton()}
            </ActionPanel.Section>
        )
    };

    return (
        <Form
            navigationTitle={navTitle}
            actions={<ActionPanel>{renderAction()}</ActionPanel>}
        >
            <Form.TextArea id="jsonValue" title="JSON" placeholder="Enter your JSON here"  autoFocus/>
            {extraNode}
        </Form>
    )
}