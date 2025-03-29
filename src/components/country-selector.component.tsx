"use client";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/shad-components/ui/select";
import FormWrapper from "./form-wrapper";
import { useCountryStore } from "@/utils/store/countryStore";
import { supportedFormDataKeys } from "@/utils/type";

type Props = {
  resetHandler: () => void;
};

export default function CountrySelector(props: Props) {
  const { country, setCountry } = useCountryStore();

  const valueChangeHandler = (value: supportedFormDataKeys) => {
    props.resetHandler();
    setCountry(value);
  };

  return (
    <FormWrapper>
      <Select value={country} onValueChange={valueChangeHandler}>
        <SelectTrigger>
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="FormDataUSA">USA</SelectItem>
          <SelectItem value="FormDataUAE">UAE</SelectItem>
          <SelectItem value="FormDataGermany">Germany</SelectItem>
          <SelectItem value="FormDataIndia">India</SelectItem>
          <SelectItem value="FormDataCanada">Canada</SelectItem>
        </SelectContent>
      </Select>
    </FormWrapper>
  );
}
