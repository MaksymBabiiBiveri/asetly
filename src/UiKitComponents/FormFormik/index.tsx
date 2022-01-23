import React from 'react';
import { useFormik } from 'formik';
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  FormikErrors,
  FormikState,
  FormikTouched,
} from 'formik/dist/types';

interface TypeFormik<Values> {
  initialValues: Values;
  initialErrors: FormikErrors<unknown>;
  initialTouched: FormikTouched<unknown>;
  initialStatus: any;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T1 = string | React.ChangeEvent<any>>(
      field: T1
    ): T1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleReset: (e: any) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  resetForm: (nextState?: Partial<FormikState<Values>> | undefined) => void;
  setErrors: (errors: FormikErrors<Values>) => void;
  setFormikState: (
    stateOrCb:
      | FormikState<Values>
      | ((state: FormikState<Values>) => FormikState<Values>)
  ) => void;
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<Values>> | Promise<void>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<Values>> | Promise<void>;
  setFieldError: (field: string, value: string | undefined) => void;
  setStatus: (status: any) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setTouched: (
    touched: FormikTouched<Values>,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<Values>> | Promise<void>;
  setValues: (
    values: React.SetStateAction<Values>,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<Values>> | Promise<void>;
  submitForm: () => Promise<any>;
  validateForm: (values?: Values) => Promise<FormikErrors<Values>>;
  validateField: (name: string) => Promise<void> | Promise<string | undefined>;
  isValid: boolean;
  dirty: boolean;
  unregisterField: (name: string) => void;
  registerField: (name: string, { validate }: any) => void;
  getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  getFieldMeta: (name: string) => FieldMetaProps<any>;
  getFieldHelpers: (name: string) => FieldHelperProps<any>;
  validateOnBlur: boolean;
  validateOnChange: boolean;
  validateOnMount: boolean;
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  isSubmitting: boolean;
  isValidating: boolean;
  status?: any;
  submitCount: number;
}
//
// type TFormik<T> =
//   | FormikHandlers
//   | FormikState<T>
//   | FormikErrors<unknown>
//   | FormikTouched<unknown>
//   | FieldMetaProps<T>
//   | FieldInputProps<T>
//   | FieldHelperProps<T>;

interface FormFormikProps<FormikValues> {
  defaultValue: FormikValues;
  children: (methods: TypeFormik<FormikValues>) => React.ReactNode;
  returnSubmitValue: (values: FormikValues) => void;
}

function FormFormik<FormikValues>(props: FormFormikProps<FormikValues>) {
  const { defaultValue, children, returnSubmitValue } = props;
  const formik = useFormik<FormikValues>({
    initialValues: { ...defaultValue },
    onSubmit: (values) => {
      returnSubmitValue(values);
    },
  });
  return <form onSubmit={formik.handleSubmit}>{children(formik)}</form>;
}

export default FormFormik;
