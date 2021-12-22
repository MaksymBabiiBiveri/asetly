import React, { createContext } from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
  onSubmit: (data: any) => void;
}

export const FormContext = createContext<any>(null);

const Form: React.FC<FormProps> = (props) => {
  const { children, onSubmit } = props;
  const { register, handleSubmit } = useForm();
  return (
    <FormContext.Provider value={register}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormContext.Provider>
  );
};
export default Form;
