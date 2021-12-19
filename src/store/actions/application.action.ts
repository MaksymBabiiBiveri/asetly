// import { ThunkAction } from 'redux-thunk';
// import { RootState } from '../index';
// import { Dispatch } from 'redux';
import { ApplicationActions } from '../types/application';
import { GET_TOKEN } from '../actionTypes';
// import axios from '../../config/axios';
// import { AxiosResponse } from 'axios';
//
// type Data = {
//   [key: string]: string | null;
//   token: string;
// };

// export const GetToken =
//   (): ThunkAction<any, RootState, any, any> =>
//   async (dispatch: Dispatch<ApplicationActions>) => {
//     const data = {
//       userMail: 'admin@asetly.com',
//       password: '123123',
//       siteId: 1,
//     };
//     try {
//       const requestAuth = await axios.post('/Auth/token', data);
//       const responseAuth: AxiosResponse<Data, any> = await requestAuth;
//       const response = await responseAuth.data;
//       dispatch({ type: GET_TOKEN, response });
//     } catch (error: any) {
//       const response = error.message;
//       dispatch({ type: THROW_ERROR, response });
//     }
//   };
export const getToken = (): ApplicationActions => ({
  type: GET_TOKEN,
  api: {
    url: '/Auth/token',
    method: 'POST',
  },
  payload: {
    userMail: 'admin@asetly.com',
    password: '123123',
    siteId: 1,
  },
});
