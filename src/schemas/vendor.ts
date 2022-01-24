import * as yup from 'yup';

export const schemaVendor = yup.object({
  name: yup
    .string()
    .required('This field is required')
    .max(100, 'Max length 100 characters'),
  partnerCode: yup
    .string()
    .required('This field is required')
    .max(50, 'Max length 50 characters'),
  phone: yup.string().required('This field is required'),
  address: yup.string().required('This field is required'),
  taxNumber: yup.string().max(10, 'Max length 10 characters'),
  taxOffice: yup.string().max(50, 'Max length 50 characters'),
  cityId: yup.object({
    label: yup.string(),
    value: yup.number(),
  }),
  countryId: yup.object({
    label: yup.string(),
    value: yup.number(),
  }),
  email: yup.string().email('Email is not valid'),
  secondPhone: yup.string(),
  description: yup.string(),
});
