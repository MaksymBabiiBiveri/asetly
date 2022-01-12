import React from 'react';
import classes from './HeaderEditAction.module.scss';
import { Button } from '@UiKitComponents';
import { TrashBasket } from '@common';

interface HeaderEditActionProps {
  title: string;
  onEditButton?: (params?: any) => void;
  onDeleteButton?: (params?: any) => void;
}

const HeaderEditAction: React.FC<HeaderEditActionProps> = (props) => {
  const { title, onEditButton, onDeleteButton } = props;

  return (
    <div className={classes.header_box}>
      <h5>{title}</h5>
      <div className={classes.button_box}>
        <Button
          variant="secondary"
          iconElement={<TrashBasket />}
          onClick={onDeleteButton}
        >
          Delete
        </Button>
        <Button variant="primary" type="button" onClick={onEditButton}>
          Edit
        </Button>
      </div>
    </div>
  );
};
export default HeaderEditAction;
