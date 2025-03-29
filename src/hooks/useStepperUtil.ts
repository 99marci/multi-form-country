"use client";

import { useStepperStore } from "@/utils/store/stepperStore";
import { ReactElement } from "react";

export function useStepperUtil(steps: ReactElement[]) {
  const { currentStep, increment, decrement } = useStepperStore();

  const next = (): void => {
    if (currentStep < steps.length - 1 && steps.length !== 1) {
      increment();
    }
  };

  const back = () => {
    if (currentStep > 0) {
      decrement();
    }
  };

  const hasOneElement: boolean = steps.length === 1;
  const isLast: boolean = steps.length - 1 === currentStep;

  const isFirst: boolean = currentStep === 0;

  const progress: number = Math.ceil((currentStep / (steps.length - 1)) * 100);

  return {
    step: steps[currentStep],
    isFirst,
    isLast,
    hasOneElement,
    progress,
    next,
    back,
  };
}
