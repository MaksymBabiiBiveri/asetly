import React from 'react';
import classes from './CreateNewCompany.module.scss';
import { Button } from '@components';

interface CreateNewCompanyProps {}

const CreateNewCompany: React.FC<CreateNewCompanyProps> = () => {
  return (
    <div className={classes.createNewCompany}>
      <div className={classes.createNewCompany_wrapper}>
        <div className={classes.header_box}>
          <h5>New Company</h5>
          <div className={classes.button_box}>
            <Button color="outline">Cancel</Button>
            <Button color="primary">Save</Button>
          </div>
        </div>
        <form>{/*<div className={classes.divider} />*/}</form>
      </div>
    </div>
  );
};

export default CreateNewCompany;
