"use client"
import { Input } from "@/shad-components/ui/input";
import { ChangeEvent } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import FormWrapper from "./form-wrapper";

type Props<T extends FieldValues> = {
    type: string,
    placeholder: string,
    name: Path<T>,
    register: UseFormRegister<T>,
    onChange?: (event: ChangeEvent) => void,
    errorMessage?: string,
};

const FormField = <T extends FieldValues>(props: Props<T>) => {
    return (
        <FormWrapper>
            <Input
                autoFocus
                type={props.type}
                placeholder={props.placeholder}
                accept={props.type === 'file' ? "image/*" : undefined}
                {...props.register(props.name, { required: "Please do not leave it blank!" })}
                onChange={props.onChange}
            />

            { props.errorMessage && <span className="error-message text-xs text-red-700">{props.errorMessage}</span>}
        </FormWrapper>
    );

}

export default FormField;