import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './EditCompany.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetOneCompany } from '@Actions/company.action';
import { RootState } from '@RootStateType';
import { Loader } from '@common';
import { HeaderEditAction } from '@components';
import { useToggle } from '@hooks';
import Preview from '@pages/CompanyPages/EditCompany/Preview';
import Edit from '@pages/CompanyPages/EditCompany/Edit';
import ModalDelete from '../../../UiKitComponents/ModalDelete';

type CompanyParams = {
  CompanyID: string;
};

interface EditCompanyProps {}

const getCompanyState = (state: RootState) => state.CompanyReducer;

const EditCompany: React.FC<EditCompanyProps> = () => {
  const params = useParams<CompanyParams>();
  const dispatch = useDispatch();
  const [modeEdit, setModeEdit] = useToggle();
  const [openModal, setOpenModal] = useToggle();

  const { currentCompany, loadingCompany } = useSelector(getCompanyState);
  const companyID = params.CompanyID ? params.CompanyID : '';

  const deleteCompany = () => {
    console.log('delete');
    setOpenModal(!open);
  };

  useEffect(() => {
    dispatch(GetOneCompany(companyID));
  }, []);

  if (loadingCompany || !currentCompany) {
    return <Loader />;
  }

  return (
    <div className={classes.editCompany}>
      <div className={classes.editCompany_wrapper}>
        {!modeEdit && (
          <HeaderEditAction
            title={currentCompany.name}
            onEditButton={setModeEdit}
            onDeleteButton={setOpenModal}
          />
        )}
        {modeEdit ? (
          <Edit currentCompany={currentCompany} backToPreview={setModeEdit} />
        ) : (
          <Preview currentCompany={currentCompany} />
        )}
        <ModalDelete
          title="company"
          body="the company"
          name={currentCompany.name}
          open={openModal}
          setOpen={setOpenModal}
          onDelete={deleteCompany}
        />
      </div>
    </div>
  );
};

export default EditCompany;
