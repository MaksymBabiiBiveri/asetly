import * as yup from 'yup';

export let schemaNewCompany = yup.object({
  name: yup.string().required('This field is required'),
  partnerCode: yup.string().required('This field is required'),
  taxOffice: yup.string(),
  taxNumber: yup.string(),
  cityId: yup
    .number()
    .required('This field is required')
    .positive('The field is not valid. Only positive numbers')
    .truncate(),

  address: yup.string().required('This field is required'),
  email: yup.string().email('Email is not valid'),
  phone: yup.string().required('This field is required'),
});
