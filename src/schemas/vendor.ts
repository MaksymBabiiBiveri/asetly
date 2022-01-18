import * as yup from 'yup';

export const schemaVendor = yup.object({
  name: yup.string().required('This field is required'),
  partnerCode: yup
    .string()
    .required('This field is required')
    .min(1, 'Company code must be at least 4 characters')
    .max(4, 'Company code must be at least 4 characters'),
  taxOffice: yup.string(),
  taxNumber: yup
    .string()
    .required('This field is required'),
  cityId: yup
    .number()
    .required('This field is required')
    .positive('The field is not valid. Only positive numbers')
    .truncate(),
  countryId: yup
    .number()
    .required('This field is required')
    .positive('The field is not valid. Only positive numbers')
    .truncate(),
  address: yup.string().required('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .email('Email is not valid'),
  phone: yup.string().required('This field is required'),
});
