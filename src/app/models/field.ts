import { Type } from "@angular/core";

export interface FieldTypeDefinition {
    type: string;
    label: string;
    icon: string;
    defaultConfig:any,
    settingsConfig:FieldSetiingsDefinition[],
    component:Type<unknown>
}
export interface FieldSetiingsDefinition {
    type:'text'|'checkbox'|'select';
    key:string;
    label:string;
    options?:OptionItem[];
}
export interface OptionItem {
    label:string;
    value:string;
}
export interface FormField {
    id: string;
    type: string;
    label: string;
    required: boolean;
    inputType?:string;
}