export enum Types {
    JSON = "JSON",
    Swift = "Swift",
    ObjectiveC = "ObjectiveC",
}

export enum SwiftType {
    Struct = "Struct",
    Class = "Class",
}

export enum ObjectiveCType {
    JSONModel = "JSONModel",
}

export interface InputJsonFormValues {
    jsonValue: string;
    type: Types;
    option?: SwiftType | ObjectiveCType;
}


export interface InputJsonProps {
    navTitle: string;
    actionTitle: string;
    type: Types;
    onConvert: (values: InputJsonFormValues) => Promise<string | null>;
    extraNode?: React.ReactNode;
}