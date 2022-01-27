import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDepartmentList } from '@Actions/department.action';
import { DepartmentState } from '@Types/department.types';
import { RootState } from '@RootStateType';
import { EmptyPage, TableHeaderActions } from '@components';
import { CustomTable } from '@UiKitComponents';
import { Loader } from '@common';
import { DataKeyType } from '@Types/application.types';

interface ListDepartmentProps {}

const dataKeyDepartmentList: DataKeyType[] = [
  {
    key: 'departmentCode',
    label: 'DEPARTMENT CODE',
    align: 'left',
    width: 110,
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'name',
    label: 'DEPARTMENT NAME',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },

  {
    key: 'parentDepartment.name',
    label: 'PARENT DEPARTMENT',
    align: 'left',
    flexGrow: 1,
  },
  {
    key: 'siteId',
    label: 'LOCATION',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
];

const getDepartmentState = (state: RootState) => state.DepartmentReducer;

const ListDepartment: React.FC<ListDepartmentProps> = () => {
  const { departmentList, loadingDepartment } = useSelector<RootState, DepartmentState>(
    getDepartmentState
  );
  const [checkedItemsList, setCheckedItemsList] = useState<number[] | string[]>(
    []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!departmentList.length) {
      dispatch(GetDepartmentList());
    }
  }, [departmentList]);  

  if (loadingDepartment) {
    return <Loader />;
  }

  if (departmentList && !departmentList.length) {
    return (
      <EmptyPage textButton="Department" redirectPath="newDepartment">
        <h5>You don`t have companies yet</h5>
        <h5>Click the button and create a new company</h5>
      </EmptyPage>
    );
  }    

  return (
    <div>
      <div className="padding_wrapper_table-page">
        <TableHeaderActions
          checkedItemsList={checkedItemsList}
          pageCreatingUrl="/Departments/newDepartment"
          textRedirectButton="New Department"
        />
        <CustomTable
          data={departmentList}
          dataKey={dataKeyDepartmentList}
          currentDataKey="departmentId"
          setCheckedItemsList={setCheckedItemsList}
        />
      </div>
    </div>
  );
};

export default ListDepartment;
