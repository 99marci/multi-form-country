import { create } from "zustand/react"

type StepperState = {
    currentStep: number
    increment: () => void
    decrement: () => void
}

export const useStepperStore = create<StepperState>()(
    (set,get) => ({
    currentStep: 0,
    increment: () => set({ currentStep: get().currentStep + 1}),
    decrement: () => set({ currentStep: get().currentStep - 1}),
    })
  )