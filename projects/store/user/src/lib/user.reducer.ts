import { Action, createReducer, on } from '@ngrx/store';
import { UserInfo } from '@firebase/auth-types';
import * as userAction from './user.actions';

export interface State {
  user: UserInfo;
}

export const userFeatureKey = 'user';

export const initialState: State = {
  user: null
};

const userReducer = createReducer(
  initialState,
  on( userAction.userSuccess,
    (( state, { userInfo }) => {
      return ({ ...state, user: { ...userInfo } });
    })
  )
);

export function reducer(state: State | undefined, action: Action ): State {
  return userReducer( state, action );
}
