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
  type: keyof typeof InputType;
  name: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    id,
    name,
    placeholder,
    label,
    type = 'text',
    required = false,
    disabled = false,
    error = false,
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
        name={name}
        required={required}
        disabled={disabled}
      />
      <label htmlFor={id} className={classes.label_input}>
        {label}
        <span>{InputIsRequired}</span>
      </label>
    </div>
  );
};

export default Input;
