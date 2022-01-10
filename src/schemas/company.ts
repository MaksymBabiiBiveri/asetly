import * as yup from 'yup';

export const schemaCompany = yup.object({
  name: yup.string().required('This field is required'),
  companyCode: yup
    .string()
    .max(4)
    .min(4, 'Company code must be at least 4 characters')
    .required('This field is required'),
  taxOffice: yup.string(),
  taxNumber: yup.number().required('This field is required'),
  cityId: yup
    .number()
    .required('This field is required')
    .positive('The field is not valid. Only positive numbers')
    .truncate(),
  address: yup.string().required('This field is required'),
  contactName: yup
    .string()
    .required('This field is required')
    .email('Email is not valid'),
  phone: yup.string().required('This field is required'),
});
