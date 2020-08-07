import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UserInfo } from '@firebase/auth-types';
import * as userAction from './user.actions';

export interface State {
  info: UserInfo;
}

export const userFeatureKey = 'user';

export const initialState: State = {
  info: null
};

const userReducer = createReducer(
  initialState,
  on( userAction.getUser, ( state => ({ ...state }) ) ),
  on( userAction.userSuccess, (( state, { userInfo }) => ({ ...state, info: { ...userInfo } }) ) )
);

const featureInfoSelector = createFeatureSelector<State>(userFeatureKey);

export const getInfo = createSelector(
  featureInfoSelector,
  state => state.info
);

export function reducer(state: State | undefined, action: Action ): State {
  return userReducer( state, action );
}
