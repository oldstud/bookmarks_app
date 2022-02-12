import { createAction } from '@reduxjs/toolkit';

export const logInRequest = createAction<any, 'auth/logInRequest'>('auth/logInRequest');
export const logInSuccess = createAction<any, 'auth/logInSuccess'>('auth/logInSuccess');
export const logInError = createAction<any, 'auth/logInError'>('auth/logInError');

export const signUpRequest = createAction<any, 'auth/signUpRequest'>('auth/signUpRequest');
export const signUpSuccess = createAction<any, 'auth/signUpSuccess'>('auth/signUpSuccess');
export const signUpError = createAction<any, 'auth/signUpError'>('auth/signUpError');

export const logOutRequest = createAction<any, 'auth/logOutRequest'>('auth/logOutRequest');
export const logOutSuccess = createAction<any, 'auth/logOutSuccess'>('auth/logOutSuccess');
export const logOutError = createAction<any, 'auth/logOutError'>('auth/logOutError');

export const getCurrentUserRequest = createAction<any, 'auth/getCurrentUserRequest'>('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction<any, 'auth/getCurrentUserSuccess'>('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction<any, 'auth/getCurrentUserError'>('auth/getCurrentUserError');