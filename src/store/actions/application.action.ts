import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import axios from '../../config/axios';
import { AxiosResponse } from 'axios';

type Data = {
  [key: string]: string | null;
  token: string;
};

export const GetToken =
  (): ThunkAction<any, RootState, any, any> => async () => {
    const data = {
      userMail: 'admin@asetly.com',
      password: '123123',
      siteId: 1,
    };

    try {
      const requestAuth = await axios.post('/Auth/token', data);
      const responseAuth: AxiosResponse<Data, any> = await requestAuth;
      const token = responseAuth.data.token;
      localStorage.setItem('token', token);
    } catch (error: any) {
    }
  };
