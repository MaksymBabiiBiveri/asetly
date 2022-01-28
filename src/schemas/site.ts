import * as yup from 'yup';

export const schemaSite = yup.object({
  name: yup
    .string()
    .required('This field is required')
    .max(100, 'Max length 100 characters'),
  barcode: yup
  .string()
  .required('This field is required')
  .max(50, 'Max length 50 characters'),
  siteCode: yup
    .string()
    .required('This field is required')
    .max(50, 'Max length 50 characters'),
    // for select
  cityId: yup.object({
    label: yup.string(),
    value: yup.number(),
  }),
  countryId: yup.object({
    label: yup.string(),
    value: yup.number(),
  }),
  town: yup.string().max(100, 'Max length 100 characters'),
  area: yup.string().max(100, 'Max length 100 characters'),
  address: yup.string().required('This field is required'),
  description: yup.string(),
});
