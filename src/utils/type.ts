export interface FormDataUSA {
  socialSecurityNumber: string;
  state: string;
  zipCode: string;
  image: FileList | undefined;
}

export interface FormDataUAE {
  emiratesID: string;
  visaType: string;
  city: string;
  image: FileList | undefined;
}

export interface FormDataGermany {
  taxID: string;
  bundesland: string;
  postalCode: string;
  image: FileList | undefined;
}

export interface FormDataIndia {
  aadhaarNumber: string;
  state: string;
  pinCode: string;
  image: FileList | undefined;
}

export interface FormDataCanada {
  SIN: string;
  province: string;
  postalCode: string;
  image: FileList | undefined;
}

export type SupportedForms = {
  USA: FormDataUSA;
  India: FormDataIndia;
  Canada: FormDataCanada;
  Germany: FormDataGermany;
  UAE: FormDataUAE;
};

export type CountryCode = keyof SupportedForms;

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
