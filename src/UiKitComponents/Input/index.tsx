import React from 'react';

import classes from './Input.module.scss';
import cl from 'classnames';

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
  label: string;
  errorText?: string;
  type?: keyof typeof InputType;
  required?: boolean;
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    placeholder,
    label,
    errorText,
    type = 'text',
    required = false,
    disabled = false,
    ...rest
  } = props;

  const InputIsRequired = required ? '*' : '';
  const InputError = errorText ? classes.input_error : '';

  return (
    <div className={cl(classes.input_wrapper, InputError)}>
      <p className={classes.errorText}>{errorText}</p>
      <input
        className={classes.input}
        placeholder={placeholder}
        id={id}
        type={type}
        disabled={disabled}
        ref={ref}
        {...rest}
      />
      <label htmlFor={id} className={classes.label_input}>
        {label}
        <span>{InputIsRequired}</span>
      </label>
    </div>
  );
});

export default Input;
