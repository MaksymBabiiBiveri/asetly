import React from 'react';
import classes from './InputContainer.module.scss';

interface InputContainerProps {
  title: string;
}

const InputContainer: React.FC<InputContainerProps> = (props) => {
  const { title, children } = props;
  let gridTemplate = '355px 355px';
  if (Array.isArray(children)) {
    if (children.length <= 3) {
      gridTemplate = '355px';
    }
  }

  return (
    <div className={classes.inputContainer}>
      <h5 className={classes.inputContainer_title}>{title}</h5>
      <div
        className={classes.inputContainer_box}
        style={{ gridTemplateColumns: gridTemplate }}
      >
        {children}
      </div>
    </div>
  );
};
export default InputContainer;
