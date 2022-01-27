import React from 'react';
import cl from 'classnames';
import './InputContainer.scss';

export interface InputContainerProps {
  label: string;
  id: string;
  errorText?: string;
  required?: boolean;
  disabled?: boolean;
  statusActive?: boolean;
}

const InputContainer: React.FC<InputContainerProps> = (props) => {
  const { label, errorText, id, required, disabled = false, children } = props;

  const IsRequired = required ? '*' : '';
  const Error = errorText && !disabled ? 'custom-input-container__error' : '';
  const Disabled = disabled ? 'custom-input-container__disabled' : '';

  return (
    <div className={cl('custom-input-container', Error)}>
      <p className="custom-input-container__errorText">
        {!disabled && errorText}
      </p>
      {children}
      <label
        htmlFor={id}
        className={cl('custom-input-container__label', Disabled)}
      >
        {label}
        <span>{IsRequired}</span>
      </label>
    </div>
  );
};
export default InputContainer;
