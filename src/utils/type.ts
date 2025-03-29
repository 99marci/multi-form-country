export type FormDataUSA = {
  socialSecurityNumber: string;
  state: string;
  zipCode: string;
  image: FileList | undefined;
};

export type FormDataUAE = {
  emiratesID: string;
  visaType: string;
  city: string;
  image: FileList | undefined;
};

export type FormDataGermany = {
  taxID: string;
  bundesland: string;
  postalCode: string;
  image: FileList | undefined;
};

export type FormDataIndia = {
  aadhaarNumber: string;
  state: string;
  PINCode: string;
  image: FileList | undefined;
};

export type FormDataCanada = {
  SIN: string;
  province: string;
  postalCode: string;
  image: FileList | undefined;
};

export interface Forms {
  FormDataUSA: FormDataUSA;
  FormDataIndia: FormDataIndia;
  FormDataCanada: FormDataCanada;
  FormDataGermany: FormDataGermany;
  FormDataUAE: FormDataUAE;
}

export type supportedFormDataKeys = keyof Forms;

export type SupportedForms =
  | FormDataUSA
  | FormDataCanada
  | FormDataGermany
  | FormDataUAE
  | FormDataIndia;

export const fieldNamesUSA = {
  socialSecurityNumber: "socialSecurityNumber",
  state: "state",
  zipCode: "zipCode",
  image: "image",
};

export const fieldNamesUAE = {
  emiratesID: "emiratesID",
  visaType: "visaType",
  city: "city",
  image: "image",
};

export const fieldNamesGermany = {
  taxID: "taxID",
  bundesland: "bundesland",
  postalCode: "postalCode",
  image: "image",
};

export const fieldNamesIndia = {
  aadhaarNumber: "aadhaarNumber",
  state: "state",
  pinCode: "pinCode",
  image: "image",
};

export const fieldNamesCanada = {
  SIN: "SIN",
  province: "province",
  postalCode: "postalCode",
  image: "image",
};
