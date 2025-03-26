'use client'
import CountrySelector from "@/components/country-selector.component";
import FormField from "@/components/form-field.component";
import Preview from "@/components/preview.component";
import { useStepperUtil } from "@/hooks/useStepperUtil";
import { steps } from "@/utils/steps";
import { FormDataUSA, SupportedForms } from "@/utils/type";
import { ReactElement, useCallback, useEffect } from "react";
import { Path, useForm } from 'react-hook-form';
import { Progress } from "@/shad-components/ui/progress"
import { Button } from "@/shad-components/ui/button"

import { defaultInit } from "@/utils/default-initializer";
import { createFormState } from "@/utils/store/formStore";
import { useCountryStore } from "@/utils/store/countryStore";

export default function Home() {
  const { country } = useCountryStore();

  const useFormStore = createFormState<SupportedForms | undefined>(country && defaultInit[country])
  const { formData, updateForm, resetForm } = useFormStore()

  const { handleSubmit, register, trigger, reset, watch, formState: { errors }} = useForm({
    defaultValues: {...formData}
  });

  const watchM = useCallback(() => {
    return watch();
  }, [watch]);

  useEffect(() => {
    reset();
  }, [country, reset])

  const loadForms = (): ReactElement[] => {
    const elementArray: ReactElement[] = [];
    elementArray.push(<CountrySelector resetHandler={resetForm} />) // First select country context

    // Then build up form for the country context
    if (country && steps({ errors: errors, register: register})[country]) {
      steps({ errors: errors, register: register})[country].forEach((step) => {
        elementArray.push(
            <FormField key={step.field} type={step.type} placeholder={step.placeHolder || ""} name={step.name as Path<FormDataUSA>} onChange={step.onChange} register={step.register} errorMessage={step.error && step.error.message && step.error.message.toString()} />
        );
      });
    }

    elementArray.push(<Preview key="jey" previousSteps={watchM()}/>)

    return elementArray;
  };

  const { isFirst, isLast, step, progress, hasOneElement, next, back } = useStepperUtil(loadForms());

  const onSubmit = (data: Partial<FormDataUSA>) => {
    alert(JSON.stringify(data));
    resetForm();
  }

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (isLast) {
        handleSubmit(onSubmit)()
      } else {
        updateForm(watchM())
        next();
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center white m-3">
      <Progress value={progress} className="m-5 w-120" />
      <div className="border border-solid border-black border-1 m-5 h-90 w-120 p-5">
        <form className="relative h-full w-full justify-content p-2 mb-5">
          {step}
          <div>
            <Button type="button" className="absolute w-18 bottom-0 left-2" disabled={isFirst} onClick={back}>Back</Button>
            <Button type="button" className="absolute w-18 bottom-0 right-2" disabled={hasOneElement} onClick={handleNext}>{isLast ? "Submit" : "Next"}</Button>
          </div>
        </form>
      </div>

    </div>
  );
}
