import React from 'react';
import classes from './PreviewFiled.module.scss';

interface PreviewFieldProps {
  label: string;
  description: string | number;
}

const PreviewField: React.FC<PreviewFieldProps> = (props) => {
  const { label, description } = props;
  return (
    <div className={classes.field}>
      <label className={classes.field_label}>{label}</label>
      <p className={classes.field_description}>{description}</p>
    </div>
  );
};

export default PreviewField;
