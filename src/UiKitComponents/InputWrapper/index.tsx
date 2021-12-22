import React, { useContext } from 'react';
import cl from 'classnames';
import classes from '../Input/Input.module.scss';
import { CustomInput } from '@UiKitComponents';
import { FormContext } from '../../components/Form';

interface InputWrapperProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  errorText?: string;
  placeholder: string;
}

const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  const { label, errorText, id, required, placeholder, name } = props;

  const register = useContext(FormContext);

  const InputIsRequired = required ? '*' : '';
  const InputError = errorText ? classes.input_error : '';

  return (
    <div className={cl(classes.input_wrapper, InputError)}>
      <p className={classes.errorText}>{errorText}</p>
      <CustomInput
        id={id}
        placeholder={placeholder}
        name={name}
        register={register}
      />
      <label htmlFor={id} className={classes.label_input}>
        {label}
        <span>{InputIsRequired}</span>
      </label>
    </div>
  );
};
export default InputWrapper;
