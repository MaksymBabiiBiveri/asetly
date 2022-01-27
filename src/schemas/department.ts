import * as yup from 'yup';

export const schemaDepartment = yup.object({
  name: yup
    .string()
    .required('This field is required')
    .max(100, 'Max length 100 characters'),
  departmentCode: yup
    .string()
    .required('This field is required')
    .min(1, 'Department code must be max 4 characters')
    .max(4, 'Department code must be max 4 characters'),
  siteId: yup
    .number()
    .truncate(),
});