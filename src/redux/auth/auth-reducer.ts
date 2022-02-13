import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as action from './auth-actions';

const userReducer = createReducer(null, {
  [action.signUpSuccess.type]: (_, { payload }) => payload,
  [action.logInSuccess.type]: (_, { payload }) => payload,
  [action.logOutSuccess.type]: () => null,
  [action.getCurrentUserSuccess.type]: (_, { payload }) => payload,
});

const isLoggedInReducer = createReducer(false, {
  [action.getCurrentUserSuccess.type]: () => true,
  [action.signUpSuccess.type]: () => true,
  [action.logInSuccess.type]: () => true,
  [action.logOutSuccess.type]: () => false,
});

const tokenReducer = createReducer(null, {
  [action.signUpSuccess.type]: (_, { payload }) => payload.token,
  [action.logInSuccess.type]: (_, { payload }) => payload.token,
});

const errorReducer = createReducer(null, {
  [action.signUpError.type]: (_, { payload }) => payload,
  [action.logInError.type]: (_, { payload }) => payload,
  [action.logOutError.type]: (_, { payload }) => payload,
  [action.getCurrentUserError.type]: (_, { payload }) => payload,
});
const loaderReducer = createReducer(false, {
  [action.signUpRequest.type]: () => true,
  [action.signUpSuccess.type]: () => false,
  [action.signUpError.type]: () => false,
  [action.logInRequest.type]: () => true,
  [action.logInSuccess.type]: () => false,
  [action.logInError.type]: () => false,
  [action.logOutRequest.type]: () => true,
  [action.logOutSuccess.type]: () => false,
  [action.logOutError.type]: () => false,
});

const authRootReducer = combineReducers({
  user: userReducer,
  isLoggedIn: isLoggedInReducer,
  token: tokenReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default authRootReducer;