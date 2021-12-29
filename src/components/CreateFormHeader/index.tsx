import React from 'react';
import classes from './CreateFormHeader.module.scss';
import { Button } from '@UiKitComponents';
import { createBrowserHistory } from 'history';

interface CreateFormHeaderProps {
  title: string;
  errors: object;
}

const CreateFormHeader: React.FC<CreateFormHeaderProps> = (props) => {
  const { title, errors } = props;
  const history = createBrowserHistory();
  const backPageHandler = () => {
    history.back();
  };

  return (
    <div className={classes.header_box}>
      <h5>{title}</h5>
      <div className={classes.button_box}>
        <Button variant="outline" onClick={backPageHandler}>
          Cancel
        </Button>
        <Button
          variant="primary"
          type="submit"
          disabled={!!Object.keys(errors).length && true}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default CreateFormHeader;
