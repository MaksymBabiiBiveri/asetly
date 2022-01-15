import React from 'react';
import classes from './CustomInput.module.scss';
import cl from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';
import InputContainer from '../InputContainer';

interface CustomInputProps {
  label: string;
  id: string;
  placeholder: string;
  type?: 'password' | 'text' | 'number';
  errorText?: string;
  statusActive?: boolean;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
}

const CustomInput = React.forwardRef<
  HTMLInputElement,
  Partial<UseFormRegisterReturn> & CustomInputProps
>((props, ref) => {
  const {
    label,
    id,
    statusActive,
    errorText,
    required,
    placeholder,
    type = 'text',
    disabled = false,
    defaultValue,
    ...rest
  } = props;

  const activeInput = statusActive ? classes.active_input : '';
  const errorInput = errorText ? classes.error_input : '';

  return (
    <InputContainer
      label={label}
      id={id}
      required={required}
      errorText={errorText}
      disabled={disabled}
    >
      <input
        id={id}
        placeholder={placeholder}
        ref={ref}
        type={type}
        className={cl(classes.custom_input, activeInput, errorInput)}
        disabled={disabled}
        defaultValue={defaultValue}
        {...rest}
      />
    </InputContainer>
  );
});

export default CustomInput;
