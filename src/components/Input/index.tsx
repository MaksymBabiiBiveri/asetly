import React from 'react';
import classes from './Input.module.scss';
import cl from 'classnames';

interface InputProps {
  title: string;
  placeholder: string;
  type: string;
  name: string;
  id: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { title, placeholder, required, type, name, id, disabled } = props;
  const req: string = required ? '*' : '';
  const reqClass: string = required ? classes.block__title_req : '';
  const disClass: string = disabled ? classes.block__title_disabled : '';

  return (
    <div className={cl(classes.block)}>
      <label className={cl(classes.block__title, reqClass, disClass)}>
        <span>
          {title}
          <span>{req}</span>
        </span>

        <input
          className={classes.block__input}
          required={required}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          disabled={disabled}
        />
      </label>
    </div>
  );
};

export default Input;
