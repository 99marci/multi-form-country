"use client";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/shad-components/ui/select";
import FormWrapper from "./form-wrapper";
import { CountryCode } from "@/utils/type";
import { ReactElement } from "react";
import { useCountryStore } from "@/utils/store/countryStore";
type Props = {
  resetFormState: (country: CountryCode) => void;
};

export default function CountrySelector(props: Props):ReactElement {
  const { country, setCountry } = useCountryStore();

  const valueChangeHandler = (value: CountryCode) => {
    props.resetFormState(value);
    setCountry(value);
  };

  return (
    <FormWrapper>
      <Select value={country} onValueChange={valueChangeHandler}>
        <SelectTrigger>
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USA">USA</SelectItem>
          <SelectItem value="UAE">UAE</SelectItem>
          <SelectItem value="Germany">Germany</SelectItem>
          <SelectItem value="India">India</SelectItem>
          <SelectItem value="Canada">Canada</SelectItem>
        </SelectContent>
      </Select>
    </FormWrapper>
  );
}
