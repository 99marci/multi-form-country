// src/utils/loadForms.tsx
import { ReactElement } from "react";
import { Path, UseFormRegister, FieldErrors } from "react-hook-form";
import CountrySelector from "@/components/country-selector.component";
import FormField from "@/components/form-field.component";
import Preview from "@/components/preview.component";
import { steps } from "@/utils/steps";
import { CountryCode, SupportedForms } from "@/utils/type";

interface LoadFormsProps<T extends CountryCode> {
  country: T | undefined;
  errors: FieldErrors;
  register: UseFormRegister<SupportedForms[T]>;
  resetFormState: (newCountry: CountryCode) => void;
  control: any;
}

export const loadForms = <T extends CountryCode>({
  country,
  errors,
  control,
  register,
  resetFormState,
}: LoadFormsProps<T>): ReactElement[] => {
  const elementArray: ReactElement[] = [];

  // Add country selector
  elementArray.push(
    <CountrySelector key="country-selector" resetFormState={resetFormState} />
  );

  // Add form fields based on selected country
  if (country && steps({ errors, register })[country]) {
    steps({ errors, register })[country].forEach((step) => {
      elementArray.push(
        <FormField
          key={step.field}
          type={step.type || "text"}
          placeholder={step.placeHolder || ""}
          name={step.name as Path<SupportedForms[typeof country]>}
          register={step.register}
          errors={errors}
        />
      );
    });
  }

  // Add preview
  elementArray.push(<Preview key="preview" control={control} />);

  return elementArray;
};
