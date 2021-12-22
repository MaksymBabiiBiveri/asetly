import React from 'react';
import { UseFormRegister } from 'react-hook-form';

enum InputType {
  button,
  file,
  password,
  text,
  submit,
  number,
}

interface InputProps {
  id: string;
  placeholder: string;
  type?: keyof typeof InputType;
  register: UseFormRegister<any>;
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { id, placeholder, type = 'text', register, name } = props;

  return (
    <input placeholder={placeholder} id={id} type={type} {...register(name)} />
  );
};

export default Input;
