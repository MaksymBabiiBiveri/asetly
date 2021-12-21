import React from 'react';

import classes from './Input.module.scss';
import cl from 'classnames';

enum InputType {
  button,
  checkbox,
  file,
  password,
  radio,
  text,
  submit,
}

interface InputProps {
  id: string;
  placeholder: string;
  label: string;
  type?: keyof typeof InputType;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    placeholder,
    label,
    type = 'text',
    required = false,
    disabled = false,
    error = false,
    ...rest
  } = props;

  const InputIsRequired = required ? '*' : '';
  const InputError = error ? classes.input_error : '';

  return (
    <div className={cl(classes.input_wrapper, InputError)}>
      <input
        className={classes.input}
        placeholder={placeholder}
        id={id}
        type={type}
        required={required}
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
