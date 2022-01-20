import {DepartmentActions, NewDepartment, PutDepartment} from '../types/department.types';
import {
  DELETE_DEPARTMENT,
  GET_DEPARTMENT_LIST,
  GET_ONE_DEPARTMENT,
  POST_NEW_DEPARTMENT,
  PUT_DEPARTMENT,
} from '../actionTypes';

export const GetDepartmentList = (): DepartmentActions => ({
  type: GET_DEPARTMENT_LIST,
  api: {
    url: '/Department/GetDepartmentsList',
    method: 'GET',
  },
});

export const GetOneDepartment = (id: string | number): DepartmentActions => ({
  type: GET_ONE_DEPARTMENT,
  api: {
    url: `/Department/GetDepartmentById/${id}`,
    method: 'GET',
  },
});

export const postNewDepartment = (newDepartment: NewDepartment):
  DepartmentActions => ({
  type: POST_NEW_DEPARTMENT,

  api: {
    url: '/Department/AddDepartment',
    method: 'POST',
    data: {
      ...newDepartment,
    },
  },
});

export const updateDepartment = (department: PutDepartment): DepartmentActions => ({
  type: PUT_DEPARTMENT,
  api: {
    url: '/Department/UpdateDepartment',
    method: 'PUT',
    data: {
      ...department
    }
  },
});

export const deleteDepartment = (departmentIds: number[]): DepartmentActions => ({
  type: DELETE_DEPARTMENT,
  api: {
    url: `/Department/RemoveByIdList`,
    method: 'POST',
    data: {
      DepartmentIds: departmentIds,
    },
  },
});