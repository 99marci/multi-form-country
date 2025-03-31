"use client";
import { Input } from "@/shad-components/ui/input";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import FormWrapper from "./form-wrapper";
import { fileValidator } from "@/utils/methods";

type Props<T extends FieldValues> = {
  type: string;
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors;
};

const FormField = <T extends FieldValues>(props: Props<T>) => {
  let errorMessage = "";
  if (props.errors && props.errors[props.name]) {
    errorMessage = props.errors[props.name]?.message?.toString() || "";
  }

  return (
    <FormWrapper>
      {props.type === "file" ? (
        <>
          <Input
            autoFocus
            type={"file"}
            accept="image/*"
            {...props.register(props.name, {
              required: "Please do not leave the field blank!",
            })}
            onChange={fileValidator}
          />
        </>
      ) : (
        <Input
          autoFocus
          type={"text"}
          placeholder={props.placeholder}
          {...props.register(props.name, {
            required: "Please do not leave the field blank!",
          })}
        />
      )}

      {errorMessage && (
        <span className="error-message text-xs text-red-700">
          {errorMessage}
        </span>
      )}
    </FormWrapper>
  );
};

export default FormField;
