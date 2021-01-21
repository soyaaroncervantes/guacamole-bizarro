import { Action, createReducer, on } from '@ngrx/store';
import { UserInfo } from '@firebase/auth-types';
import * as userAction from './user.actions';

export interface UserState {
  userInfo: UserInfo;
}

export const userFeatureKey = 'user';

export const initialState: UserState = {
  userInfo: null,
};

const createUserReducer = createReducer(
  initialState,
  on(userAction.getUser, (state) => ({ ...state })),
  on(userAction.userSuccess, (state, { userInfo }) => ({ ...state, userInfo: { ...userInfo } })),
  on(userAction.logoutSuccess, (state) => ({ ...state, userInfo: null })),
  on(userAction.userFailure, (state) => ({ ...state, userInfo: null })),
);

export const userReducer = (state: UserState | undefined, action: Action): UserState =>
  createUserReducer(state, action);
