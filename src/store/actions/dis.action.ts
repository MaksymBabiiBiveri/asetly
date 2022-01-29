import axios from '../../config/axios';
import {  GetOneDepartment, GetParentDepartment } from './department.action';

export const dis = (id:string|number) => (dispatch:any) => {
  axios.get(`/Department/GetDepartmentById/${id}`)
    .then((obj:any) => {
        dispatch(GetOneDepartment(obj.data.resultObject[0]))
        if(obj.data.resultObject[0].parentDepartmentId) {
          dispatch(GetParentDepartment(obj.data.resultObject[0].parentDepartmentId))
        }
      }
    )
}
