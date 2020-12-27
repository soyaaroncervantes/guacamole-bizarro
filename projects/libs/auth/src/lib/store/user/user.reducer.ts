import { Action, createReducer, on } from '@ngrx/store';
import { UserInfo } from '@firebase/auth-types';
import * as userAction from './user.actions';

export interface State {
  userInfo: UserInfo;
}

export const userFeatureKey = 'user';

export const initialState: State = {
  userInfo: null
};

const userReducer = createReducer(
  initialState,
  on( userAction.getUser, ( state => ({ ...state }) ) ),
  on( userAction.userSuccess, (( state, { userInfo }) => ({ ...state, userInfo: { ...userInfo } }) ) ),
  on( userAction.logoutSuccess, ( state => ({ ...state, userInfo: null }) ) ),
  on( userAction.userFailure, ( state => ({ ...state, userInfo: null }) ) )
);

export function reducer(state: State | undefined, action: Action ): State {
  return userReducer( state, action );
}
