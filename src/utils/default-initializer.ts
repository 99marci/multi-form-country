import {
  FormDataCanada,
  FormDataGermany,
  FormDataIndia,
  FormDataUAE,
  FormDataUSA,
  SupportedForms,
} from "./type";

export const defaultInit: SupportedForms = {
  USA: {
    socialSecurityNumber: "",
    state: "",
    zipCode: "",
    image: undefined,
  } as FormDataUSA,
  Germany: {
    taxID: "",
    bundesland: "",
    postalCode: "",
    image: undefined,
  } as FormDataGermany,
  India: {
    aadhaarNumber: "",
    state: "",
    pinCode: "",
    image: undefined,
  } as FormDataIndia,
  UAE: {
    emiratesID: "",
    visaType: "",
    city: "",
    image: undefined,
  } as FormDataUAE,
  Canada: {
    SIN: "",
    province: "",
    postalCode: "",
    image: undefined,
  } as FormDataCanada,
};
