import { create } from "zustand/react";
import { CountryCode } from "../type";
import { persist } from "zustand/middleware";
type CountryState = {
  country: CountryCode;
  setCountry: (newCountryName: CountryCode) => void;
};

export const useCountryStore = create<
  CountryState,
  [["zustand/persist", unknown]]
>(
  persist(
    (set) => ({
      country: "USA",
      setCountry: (newCountry: CountryCode) => set({ country: newCountry }),
    }),
    {
      name: "country",
    }
  )
);
