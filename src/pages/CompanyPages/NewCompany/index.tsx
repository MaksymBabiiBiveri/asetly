import React, { useEffect } from 'react';
import classes from './NewCompany.module.scss';
import { Button, Input } from '@components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { City } from '../../../store/types/definition.types';
import { getCitiesList } from '../../../store/actions/definition.action';

interface NewCompanyProps {}

const NewCompany: React.FC<NewCompanyProps> = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const citiesList = useSelector<RootState, City[]>(
    (state) => state.DefinitionReducer.citiesList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!citiesList.length) {
      dispatch(getCitiesList());
    }
  });

  return (
    <div className={classes.newCompany}>
      <div className={classes.newCompany_wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.header_box}>
            <h5>New Company</h5>
            <div className={classes.button_box}>
              <Button color="outline">Cancel</Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </div>
          </div>
          <div className={classes.input_groups}>
            <div className={classes.input_box}>
              <h5 className={classes.input_group_title}>Summary</h5>
              <div className={classes.input_group}>
                <Input
                  id="CompanyName"
                  placeholder="Company name"
                  label="Company name"
                  required
                  {...register('name')}
                />
                <Input
                  id="CompanyCode"
                  placeholder="Company code"
                  label="Company code"
                  required
                  {...register('companyCode')}
                />
              </div>
            </div>
            <div
              className={classes.input_box}
              style={{ alignSelf: 'flex-end' }}
            >
              <div className={classes.input_group}>
                <Input
                  id="TaxOffice"
                  placeholder="Tax Office"
                  label="Tax Office"
                  {...register('taxOffice')}
                />
                <Input
                  id="TXN"
                  placeholder="TXN"
                  label="TXN"
                  {...register('taxNumber')}
                />
              </div>
            </div>
          </div>
          <div className={classes.divider} />
          <div className={classes.input_groups}>
            <div className={classes.input_box}>
              <h5 className={classes.input_group_title}>Location</h5>
              <div className={classes.input_group}>
                <Input
                  id="Country"
                  placeholder="Choose country"
                  label="Country"
                />
                <Input id="City" placeholder="Choose city" label="City" />

                <Input
                  id="Address"
                  placeholder="Add address"
                  label="Address"
                  {...register('address')}
                />
              </div>
            </div>
            <div className={classes.input_box}>
              <h5 className={classes.input_group_title}>Contacts</h5>
              <div className={classes.input_group}>
                <Input
                  id="Email"
                  placeholder="Email"
                  label="Email"
                  {...register('contactName')}
                />
                <Input
                  id="PhoneNumber"
                  placeholder="Phone number"
                  label="Phone number"
                  {...register('phone')}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCompany;
