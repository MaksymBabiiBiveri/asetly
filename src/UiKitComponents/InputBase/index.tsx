import React from 'react';
import cl from 'classnames';
import classes from './InputBase.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputBaseProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password';
  errorText?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  statusActive?: boolean;
}

const InputBase = React.forwardRef<
  HTMLInputElement,
  Partial<UseFormRegisterReturn> & InputBaseProps
>((props, ref) => {
  const {
    label,
    errorText,
    id,
    required,
    placeholder,
    type = 'text',
    defaultValue,
    statusActive,
    ...rest
  } = props;

  const InputIsRequired = required ? '*' : '';
  const InputError = errorText ? classes.input_error : '';

  return (
    <div className={cl(classes.input_wrapper, InputError)}>
      <p className={classes.errorText}>{errorText}</p>

      <input
        className={statusActive ? classes.active_input : ''}
        type={type}
        id={id}
        placeholder={placeholder}
        ref={ref}
        defaultValue={defaultValue}
        {...rest}
      />

      <label htmlFor={id} className={classes.label_input}>
        {label}
        <span>{InputIsRequired}</span>
      </label>
    </div>
  );
});
export default InputBase;
