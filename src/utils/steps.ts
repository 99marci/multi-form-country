import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import {
  fieldNamesCanada,
  fieldNamesGermany,
  fieldNamesIndia,
  fieldNamesUAE,
  fieldNamesUSA,
} from "./type";

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors | undefined;
};
export const steps = <T extends FieldValues>(stepProps: Props<T>) => {
  return {
    USA: [
      {
        field: "Social Security Number",
        placeHolder: "Your Social Security Number",
        name: fieldNamesUSA.socialSecurityNumber,
        register: stepProps.register,
        error: stepProps.errors?.socialSecurityNumber,
      },
      {
        field: "State",
        placeHolder: "Your State",
        name: fieldNamesUSA.state,
        register: stepProps.register,
        error: stepProps.errors?.state,
      },
      {
        field: "Zip Code",
        placeHolder: "Your Zip Code",
        name: fieldNamesUSA.zipCode,
        register: stepProps.register,
        error: stepProps.errors?.zipCode,
      },
      {
        type: "file",
        field: "Image name",
        name: fieldNamesUSA.image,
        register: stepProps.register,
        error: stepProps.errors?.image,
      },
    ],
    UAE: [
      {
        field: "Emirates ID",
        placeHolder: "Your Emirates ID",
        name: fieldNamesUAE.emiratesID,
        register: stepProps.register,
        error: stepProps.errors?.emiratesID,
      },
      {
        field: "Visa Type",
        placeHolder: "Your Visa Type",
        name: fieldNamesUAE.visaType,
        register: stepProps.register,
        error: stepProps.errors?.visaType,
      },
      {
        field: "City",
        placeHolder: "Your City",
        name: fieldNamesUAE.city,
        register: stepProps.register,
        error: stepProps.errors?.city,
      },
      {
        field: "Image name",
        type: "file",
        name: fieldNamesUAE.image,
        register: stepProps.register,
        error: stepProps.errors?.image,
      },
    ],
    Germany: [
      {
        field: "Tax ID",
        placeHolder: "Your Tax ID",
        name: fieldNamesGermany.taxID,
        register: stepProps.register,
        error: stepProps.errors?.taxID,
      },
      {
        field: "Bundesland",
        placeHolder: "Your Bundesland",
        name: fieldNamesGermany.bundesland,
        register: stepProps.register,
        error: stepProps.errors?.bundesland,
      },
      {
        field: "Postal Code",
        placeHolder: "Your Postal Code",
        name: fieldNamesGermany.postalCode,
        register: stepProps.register,
        error: stepProps.errors?.postalCode,
      },
      {
        field: "Image name",
        type: "file",
        name: fieldNamesGermany.image,
        register: stepProps.register,
        error: stepProps.errors?.image,
      },
    ],
    India: [
      {
        field: "Aadhaar Number,",
        placeHolder: "Your Aadhaar Number",
        name: fieldNamesIndia.aadhaarNumber,
        register: stepProps.register,
        error: stepProps.errors?.aadHarNumber,
      },
      {
        field: "State",
        placeHolder: "Your State",
        name: fieldNamesIndia.state,
        register: stepProps.register,
        error: stepProps.errors?.state,
      },
      {
        field: "PIN Code",
        placeHolder: "Your PIN Code",
        name: fieldNamesIndia.pinCode,
        register: stepProps.register,
        error: stepProps.errors?.pinCode,
      },
      {
        field: "Image name",
        type: "file",
        name: fieldNamesIndia.image,
        register: stepProps.register,
        error: stepProps.errors?.image,
      },
    ],
    Canada: [
      {
        field: "SIN",
        placeHolder: "Your SIN",
        name: fieldNamesCanada.SIN,
        register: stepProps.register,
        error: stepProps.errors?.SIN,
      },
      {
        field: "Province",
        placeHolder: "Your Province",
        name: fieldNamesCanada.province,
        register: stepProps.register,
        error: stepProps.errors?.state,
      },
      {
        field: "Postal Code",
        placeHolder: "Your Postal Code",
        name: fieldNamesCanada.postalCode,
        register: stepProps.register,
        error: stepProps.errors?.zipCode,
      },
      {
        field: "Image name",
        type: "file",
        name: fieldNamesCanada.image,
        register: stepProps.register,
        error: stepProps.errors?.image,
      },
    ],
  };
};
