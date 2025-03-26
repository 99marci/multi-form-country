import { FormDataCanada, FormDataGermany, FormDataIndia, FormDataUAE, FormDataUSA, Forms } from "./type";

export const defaultInit: Forms= {
    FormDataUSA: {
        socialSecurityNumber: '',
        state: '',
        zipCode: '',
        image: undefined
    } as FormDataUSA,
    FormDataGermany: {
        taxID: '',
        bundesland: '',
        postalCode: '',
        image: undefined
    } as FormDataGermany,
    FormDataIndia: {
        aadhaarNumber: '',
        state: '',
        PINCode: '',
        image: undefined
    } as FormDataIndia,
    FormDataUAE: {
        emiratesID: '',
        visaType: '',
        city: '',
        image: undefined
    } as FormDataUAE,
    FormDataCanada: {
        SIN: '',
        province: '',
        postalCode: '',
        image: undefined
    } as FormDataCanada
}