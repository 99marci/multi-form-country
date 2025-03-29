import { create } from "zustand/react";
import { supportedFormDataKeys } from "../type";

type CountryState = {
  country: supportedFormDataKeys | undefined;
  setCountry: (newCountryName: supportedFormDataKeys) => void;
};

export const useCountryStore = create<CountryState>()((set) => ({
  country: undefined,
  setCountry: (newCountry: supportedFormDataKeys) =>
    set({ country: newCountry }),
}));
