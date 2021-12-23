import React, { memo } from 'react';
import classes from './Divider.module.scss';

interface DividerProps {
  margin: string;
}

const Divider: React.FC<DividerProps> = (props) => {
  const { margin } = props;
  return <div className={classes.divider} style={{ margin: margin }} />;
};
export default memo(Divider);
