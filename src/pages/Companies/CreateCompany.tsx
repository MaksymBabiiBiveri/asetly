import React from 'react';
import { Input, Button } from '@components';
import classes from './CreateCompany.module.scss';
import cl from 'classnames';

interface CreateProps {}

export const CreateCompany: React.FC<CreateProps> = () => {
  return (
    <form className={classes.block}>
        <header className={classes.block__header}>
            <h5 className={classes.block__title}>New company</h5>
            <div className={classes.block__buttons}>
                <Button textButton='Cancel' type='button' color='outline' />
                <Button textButton='Save' type='submit' color='primary' />
            </div>
        </header>

        <main className={cl(classes.block__main, classes.main)}>
            <div className={classes.main__top}>
                <h6 className={classes.main__title}>Summary</h6>

                <div className={classes.main__inputs}>
                    <Input 
                        title='Company Name' 
                        placeholder='Company Name' 
                        type='text' name='Company Name' 
                        id='Company Name' 
                        required={true} />

                    <Input 
                        title='Tax Office' 
                        placeholder='Tax Office' 
                        type='text' name='Tax Office' 
                        id='Tax Office' />

                    <Input 
                        title='Company Code' 
                        placeholder='Company code' 
                        type='text' name='Company code' 
                        id='Company code' 
                        required={true} />

                    <Input 
                        title='TXN' 
                        placeholder='TXN' 
                        type='text' name='TXN' 
                        id='TXN' />
                </div>
            </div>

            <div className={classes.main__bottom}>
                <div>
                    <h6 className={classes.main__title}>Location</h6>

                    <div className={classes.main__inputs}>
                        <Input 
                            title='Country' 
                            placeholder='Choose country' 
                            type='text' name='Country' 
                            id='Country' />
                        
                        <Input 
                            title='City' 
                            placeholder='Choose city' 
                            type='text' name='City' 
                            id='City' />

                        <Input 
                            title='Address' 
                            placeholder='Add address' 
                            type='text' name='Address' 
                            id='Address' />
                    </div>
                </div>

                <div>
                    <h6 className={classes.main__title}>Contacts</h6>

                    <div className={classes.main__inputs}>
                        <Input 
                            title='Email' 
                            placeholder='Email' 
                            type='email' name='Email' 
                            id='Email' />

                        <Input 
                            title='Phone number' 
                            placeholder='Phone number' 
                            type='tel' name='Phone number' 
                            id='Phone number' />
                    </div>
                </div>
            </div>
        </main>
    </form>
  );
};
