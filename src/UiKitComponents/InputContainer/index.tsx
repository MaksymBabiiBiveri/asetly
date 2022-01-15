import React from 'react';
import cl from 'classnames';
import classes from './InputContainer.module.scss';

interface InputContainerProps {
  label: string;
  id: string;
  errorText?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  statusActive?: boolean;
}

const InputContainer: React.FC<InputContainerProps> = (props) => {
  const { label, errorText, id, required, disabled = false, children } = props;

  const IsRequired = required ? '*' : '';
  const Error = errorText && !disabled ? classes.input_error : '';
  const Disabled = disabled ? classes.input_disabled : '';

  return (
    <div className={cl(classes.input_wrapper, Error)}>
      <p className={classes.errorText}>{!disabled && errorText}</p>
      {children}
      <label htmlFor={id} className={cl(classes.label_input, Disabled)}>
        {label}
        <span>{IsRequired}</span>
      </label>
    </div>
  );
};
export default InputContainer;
