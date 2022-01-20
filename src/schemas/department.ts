import * as yup from 'yup';

export const schemaDepartment = yup.object({
  name: yup.string().required('This field is required'),
  departmentCode: yup
    .string()
    .required('This field is required')
    .min(1, 'Company code must be max 4 characters')
    .max(4, 'Company code must be max 4 characters'),
  siteId: yup
    .number()
    .truncate(),
});