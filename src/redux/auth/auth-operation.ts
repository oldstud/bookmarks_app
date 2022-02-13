import * as action from './auth-actions';
import axios from 'axios';
import {
    httpLogin,
    httpRegistration,
    httpLogOut,
} from '../../services';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export const LogIn = (formData: any) => async (dispatch: any) => {
  dispatch(action.logInRequest({}));

  try {
    const result = await httpLogin(formData);
    const { data } = result.data
    token.set(data.token);
    dispatch(action.logInSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(action.logInError(error));
  }
};

export const signUp = (formData: any) => async (dispatch: any) => {
  dispatch(action.signUpRequest({}));

  try {
    const result = await httpRegistration(formData);
    const { data } = result.data
    token.set(data.token);
    dispatch(action.signUpSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(action.signUpError(error));
  }
};

export const logOut = () => async (dispatch: any) => {
  dispatch(action.logOutRequest({}));

  try {
    await httpLogOut();
    token.unset();
    dispatch(action.logOutSuccess({}));
  } catch (error) {
    console.log(error);
    dispatch(action.logOutError(error));
  }
};

// export const getCurrentUser = () => async (dispatch: any, getState: any) => {
//   dispatch(action.getCurrentUserRequest({}));

//   const state = getState();
//   const persistedToken = state.auth.token;
//   console.log('persistedToken', persistedToken);
//   if (persistedToken === null) {
//     console.log('Токена нет, уходим из getCurrentUser');
//     return;
//   }
//   token.set(persistedToken);
//   try {
//     const { data } = await fetchGetCurrentUser();
//     console.log('data current user', data);
//     dispatch(action.getCurrentUserSuccess(data));
//   } catch (error) {
//     console.log(error);
//   }
// };