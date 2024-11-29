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
    option?: SwiftType | ObjectiveCType;
    name?: string; // json convert class root name
}


export interface InputJsonProps {
    navTitle: string;
    actionTitle: string;
    type: Types;
    onConvert: (values: InputJsonFormValues) => Promise<string | null>;
    extraNode?: React.ReactNode[];
}