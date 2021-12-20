import React from 'react';
import classes from './Button.module.scss';
import cl from 'classnames';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  color: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  children: JSX.Element | string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, color, disabled = false, onClick } = props;
  const styleButton =
    color === 'primary'
      ? classes.button_primary
      : color === 'secondary'
      ? classes.button_secondary
      : color === 'outline'
      ? classes.button_outline
      : '';

  return (
    <button
      className={cl(classes.button, styleButton)}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
