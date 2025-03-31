"use client";
import { Input } from "@/shad-components/ui/input";
import {
  FieldErrors,
  FieldValues,
  Path,
  useController,
  UseFormRegister,
} from "react-hook-form";
import FormWrapper from "./form-wrapper";
import { fileValidator } from "@/utils/file-validator";
import { useEffect, useRef } from "react";

type Props<T extends FieldValues> = {
  type: string;
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors;
  control: any;
  value?: File | null; // Add this to receive the file
};

const FormField = <T extends FieldValues>(props: Props<T>) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    field: { value },
  } = useController({
    name: props.name,
    control: props.control,
  });

  let errorMessage = "";
  if (props.errors && props.errors[props.name]) {
    errorMessage = props.errors[props.name]?.message?.toString() || "";
  }

  // Restore file input state when component mounts or value changes
  useEffect(() => {
    if (props.type === 'file' && value && fileInputRef.current) {
      fileInputRef.current.files = value
    }
  }, [value]);

  return (
    <FormWrapper>
      {props.type === "file" ? (
        <>
          <Input
            autoFocus
            type="file"
            accept="image/*"
            {...props.register(props.name, {
              required: "Please do not leave the field blank!",
            })}
            ref={(e) => {
              props.register(props.name).ref(e);
              fileInputRef.current = e;
            }}
            onChange={async (e) => {
              props.register(props.name).onChange(e); // Keep form updated
              await fileValidator(e);
            }}
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
