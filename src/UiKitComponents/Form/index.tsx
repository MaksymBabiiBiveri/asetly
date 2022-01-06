import React from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormProps<TFormValues> {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  yupSchema?: yup.AnyObjectSchema;
}

const schema = yup.object({});

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  yupSchema = schema,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: yupResolver(yupSchema),
  });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
export default Form;
