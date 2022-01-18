import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompanies, GetOneCompany } from '@Actions/company.action';
import { RootState } from '@RootStateType';
import { Loader } from '@common';
import { HeaderEditAction, ModalDelete } from '@components';
import { useToggle } from '@hooks';
import Preview from '@pages/CompanyPages/EditCompany/Preview';
import Edit from '@pages/CompanyPages/EditCompany/Edit';

type CompanyParams = {
  CompanyID: string;
};

interface EditCompanyProps {}

const getCompanyState = (state: RootState) => state.CompanyReducer;

const EditCompany: React.FC<EditCompanyProps> = () => {
  const params = useParams<CompanyParams>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modeEdit, setModeEdit] = useToggle();
  const [openModal, setOpenModal] = useToggle();

  const { currentCompany, loadingCompany } = useSelector(getCompanyState);
  const companyID = params.CompanyID ? params.CompanyID : '';

  const deleteCompany = () => {
    if (currentCompany) {
      dispatch(deleteCompanies([currentCompany.companyId]));
    }
    setOpenModal(!open);
    navigate('/Companies');
  };

  useEffect(() => {
    dispatch(GetOneCompany(companyID));
  }, []);

  if (loadingCompany || !currentCompany) {
    return <Loader />;
  }

  return (
    <div>
      <div className="padding_wrapper_page">
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
