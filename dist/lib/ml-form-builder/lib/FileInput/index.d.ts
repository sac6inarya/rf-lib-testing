import React from "react";
import { ReadAsType } from "../../Utils";
import { FieldItemProps, FieldProps } from "../Types";
import "./index.scss";
export interface TFile {
    name: string;
    type: string;
    size: string | number;
    base64?: string | ArrayBuffer | null;
    file: File;
}
export interface FileInputField extends FieldItemProps {
    readAs?: ReadAsType;
    encoding?: string;
    multiple?: boolean;
    accept?: string;
    disableDefaultTooltip?: boolean;
    invisible?: boolean;
    onFilesChange?: (files: FileList) => void;
    onDone?: (imgFiles: TFile[], remFiles?: File[]) => void;
    wrapWith?: (input: JSX.Element) => JSX.Element;
    inputClasses?: string | string[];
}
interface FileInputProps extends FieldProps {
    fieldProps?: FileInputField;
}
export declare const FileInput: React.FC<FileInputProps>;
export {};
//# sourceMappingURL=index.d.ts.map