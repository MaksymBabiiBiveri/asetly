import React from 'react';
import classes from './Button.module.scss';
import cl from 'classnames';

interface ButtonProps {
  color: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, color, type = 'button', disabled = false, onClick } = props;
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
