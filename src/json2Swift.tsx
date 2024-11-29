import { Form } from "@raycast/api";
import { formatJson } from "./jsonFormat/formatConvert";
import { InputJSON } from "./utils/inputJSONView";
import { SwiftType, Types } from "./utils/types";
import { convertSwift } from "./json2Swift/swiftConvert";

export default function Command() {
  function swiftTypeForm() {
    return (
        <Form.Dropdown id="option" title="Type" storeValue>
          <Form.Dropdown.Item value={SwiftType.Struct} title="Struct" />
          <Form.Dropdown.Item value={SwiftType.Class} title="Class" />
        </Form.Dropdown>
    )
  }

  function swiftRootName() {
    return (
        <Form.TextField id="name" defaultValue="User" title="Root Name"/>
    )
  }

    return (
        <InputJSON
            navTitle="JSON to Swift"
            actionTitle="Generate"
            type={Types.Swift}
            onConvert={async (values) => await convertSwift(values.jsonValue, values.option as SwiftType, values.name ?? "User")}
            extraNode={[swiftTypeForm(), swiftRootName()]}
        />
    )
}
