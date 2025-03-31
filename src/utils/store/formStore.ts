import { defaultInit } from "../default-initializer";
import { CountryCode, SupportedForms } from "../type";
import { create } from "zustand/react";
import { persist } from "zustand/middleware";

type FormState = {
  formData: SupportedForms[CountryCode] | undefined;
  updateFormState: (data: Partial<SupportedForms[CountryCode]>) => void;
  resetFormState: (newCountryName: CountryCode) => void;
};

export const useCountryFormState = create<
  FormState,
  [["zustand/persist", unknown]]
>(
  persist(
    (set) => ({
      formData: undefined,
      updateFormState: (data) =>
        set((state) => ({
          formData: state.formData
            ? { ...state.formData, ...data }
            : (data as SupportedForms[CountryCode]),
        })),
      resetFormState: (newCountry: CountryCode) =>
        set(() => {
          return {
            formData: defaultInit[newCountry],
          };
        }),
    }),
    {
      name: `storage-form`,
      partialize: (state) => ({
        formData: state.formData,
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(persistedState as FormState),
      }),
      version: 1,
    }
  )
);
