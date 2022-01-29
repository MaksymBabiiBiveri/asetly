import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepartment } from '@Actions/department.action';
import { RootState } from '@RootStateType';
import { Loader } from '@common';
import { HeaderEditAction, ModalDelete } from '@components';
import { useToggle } from '@hooks';
import { dis } from '@Actions/dis.action';
import Preview from '@pages/DepartmentPages/EditDepartment/Preview';
import Edit from '@pages/DepartmentPages/EditDepartment/Edit';

type DepartmentParams = {
  DepartmentID: string;
};

interface EditDepartmentProps {}

const getDepartmentState = (state: RootState) => state.DepartmentReducer;

const EditDepartment: React.FC<EditDepartmentProps> = () => {
  const params = useParams<DepartmentParams>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modeEdit, setModeEdit] = useToggle();
  const [openModal, setOpenModal] = useToggle();

  const { currentDepartment, parentDepartment, loadingDepartment } = useSelector(getDepartmentState);
  const departmentID = params.DepartmentID ? params.DepartmentID : '';
  const parentName = parentDepartment ? parentDepartment.name : ' ';

  const deleteDepartments = () => {
    if (currentDepartment) {
      dispatch(deleteDepartment([currentDepartment.departmentId]));
    }
    setOpenModal(!open);
    navigate('/Departments');
  };
  
  useEffect(() => {
    dispatch(dis(departmentID));
  }, []);

  // console.log(currentDepartment);
  console.log(parentDepartment);
  
  
  if (loadingDepartment || !currentDepartment) {
    return <Loader />;
  } 

  return (
    <div>
      <div className="padding_wrapper_page">
        {!modeEdit && (
          <HeaderEditAction
            title={currentDepartment.name}
            onEditButton={setModeEdit}
            onDeleteButton={setOpenModal}
          />
        )}
        {modeEdit ? (
          <Edit currentDepartment={currentDepartment} parentName={parentName} backToPreview={setModeEdit} />
        ) : (
          <Preview currentDepartment={currentDepartment} parentName={parentName} />
        )}
        <ModalDelete
          title="department"
          body="the department"
          name={currentDepartment.name}
          open={openModal}
          setOpen={setOpenModal}
          onDelete={deleteDepartments}
        />
      </div>
    </div>
  );
};

export default EditDepartment;
