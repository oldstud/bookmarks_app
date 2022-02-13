import axios from 'axios'
import { LoginDataI, SignInDataI} from '../interface/api/auth.interface';
import API_URLS from '../constants/api/api-urls.constants';

export const httpLogin = (data: LoginDataI) => {
    return axios.post(API_URLS.login,  data);
};

export const httpRegistration = (data: SignInDataI) => {
    return axios.post(API_URLS.reg, data);
};

export const httpLogOut = () => {
    return axios.post(API_URLS.logout);
};