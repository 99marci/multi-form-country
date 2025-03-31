"use client";
import { useStepperUtil } from "@/hooks/useStepperUtil";
import { SupportedForms } from "@/utils/type";
import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Progress } from "@/shad-components/ui/progress";
import { Button } from "@/shad-components/ui/button";

import { useCountryFormState } from "@/utils/store/formStore";
import { loadForms } from "@/utils/loadForm";
import { useCountryStore } from "@/utils/store/countryStore";

export default function Home() {
  const { formData, updateFormState, resetFormState } = useCountryFormState();
  const { country } = useCountryStore();

  const {
    handleSubmit,
    register,
    trigger,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<SupportedForms[typeof country]>({
    defaultValues: formData,
  });

  useEffect(() => {
    if (country) {
      reset(formData);
    }
  }, [country]);

  const loadFormElements = useMemo(() => {
    return loadForms({
      country,
      errors,
      control,
      register,
      resetFormState,
    });
  }, [country, errors, control, register, resetFormState]);

  const formValues = watch();

  const {
    isFirst,
    isLast,
    step,
    progress,
    hasOneElement,
    next,
    back,
    setZero,
  } = useStepperUtil(loadFormElements);

  const onSubmit = (data: Partial<SupportedForms[typeof country]>) => {
    alert(JSON.stringify(data));
    resetFormState("USA"); //as this is default
    reset();
  };

  const handleNext = async () => {
    const isFormValid = await trigger(undefined, { shouldFocus: true });

    if (isFormValid && country) {
      if (isLast) {
        handleSubmit(onSubmit)();
        setZero();
      } else {
        updateFormState(formValues);
        next();
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center white m-3">
      <Progress value={progress} className="m-5 w-120" />
      <div className="border border-solid border-black border-1 m-5 h-90 w-120 p-5">
        <form className="relative h-full w-full justify-content p-2 mb-5">
          {step}
          <div>
            <Button
              type="button"
              className="absolute w-18 bottom-0 left-2"
              disabled={isFirst}
              onClick={back}
            >
              Back
            </Button>
            <Button
              type="button"
              className="absolute w-18 bottom-0 right-2"
              disabled={hasOneElement}
              onClick={handleNext}
            >
              {isLast ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
