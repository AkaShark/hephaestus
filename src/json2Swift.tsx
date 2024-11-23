import { Form } from "@raycast/api";
import { SwiftType, Types } from "./utils/types";
import { InputJSON } from "./utils/inputJSONView";

export default function Command() {
  const extraNode = (
    <Form>
      <Form.Dropdown id="swiftType" title="Swift" storeValue>
        <Form.Dropdown.Item value={SwiftType.Struct} title="Struct" />
        <Form.Dropdown.Item value={SwiftType.Class} title="Class" />
      </Form.Dropdown>
    </Form>
  );

  return (
    <InputJSON
      navTitle="JSON to Swift"
      actionTitle="Generate"
      type={Types.Swift}
      onConvert={async (values) => {
        if (values.option === SwiftType.Struct) {
          // handle struct conversion
        } else if (values.option === SwiftType.Class) {
          // handle class conversion
        }
        return "result";
      }}
      extraNode={extraNode}
    />
  );
}
