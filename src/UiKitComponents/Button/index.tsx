import React from 'react';
import classes from './Button.module.scss';
import cl from 'classnames';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  formSubmit?: string;
  iconElement?: React.ReactElement;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant,
    iconElement,
    type = 'button',
    disabled = false,
    onClick,
  } = props;
  const styleButton =
    variant === 'primary'
      ? classes.button_primary
      : variant === 'secondary'
      ? classes.button_secondary
      : variant === 'outline'
      ? classes.button_outline
      : variant === 'icon'
      ? classes.button_icon
      : '';

  return (
    <button
      className={cl(classes.button, styleButton)}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {iconElement ? <span className={classes.icon}>{iconElement}</span> : null}
      {children}
    </button>
  );
};

export default Button;
