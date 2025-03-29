import { create } from "zustand/react";

type FormState<T> = {
  formData: Partial<T>;
  updateForm: (data: Partial<T>) => void;
  resetForm: () => void;
};

export const createFormState = <T>(initialState: T) =>
  create<FormState<T>>()((set) => ({
    formData: initialState,
    updateForm: (data) =>
      set((state) => ({ formData: { ...state.formData, ...data } })),
    resetForm: () => set({ formData: initialState }),
  }));
