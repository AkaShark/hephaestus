import { Action, ActionPanel, Clipboard, Form, Icon, showToast, Toast, useNavigation } from "@raycast/api";
import { FormValidation, useForm } from "@raycast/utils";
import { SwiftType } from "./json2Swift/swiftConvert";
import { ResultDetailView } from "./utils/resultView";


interface FormValues {
  jsonValue: string;
  swiftType: SwiftType;
}

export default function Command() {
  const { push } = useNavigation();
  const {handleSubmit, itemProps} = useForm<FormValues>({
    onSubmit(values) {
      // handle swift conversion

      push(<ResultDetailView result={values.jsonValue + values.swiftType} />)
    },

    validation: {
      jsonValue: FormValidation.Required
    }
  })

  const renderActions = () => {
    const generateAction = () => {
      return <Action.SubmitForm
              title="Generate"
              onSubmit={(values) => {
                handleSubmit({...values} as FormValues)
              }}
              />
    }
    
    return (
    <ActionPanel.Section>
    {generateAction()}
    </ActionPanel.Section>)
  };  


  return ( 
    <Form actions={<ActionPanel>{renderActions()}</ActionPanel>}>
      <Form.TextArea id="jsonValue" title="JSON" placeholder="Enter JSON" autoFocus/>
      <Form.Dropdown id="swiftType" title="Swift" storeValue>
        <Form.Dropdown.Item value={SwiftType.Struct} title="Struct" />
        <Form.Dropdown.Item value={SwiftType.Class} title="Class" />
      </Form.Dropdown>
    </Form>
  );
}
