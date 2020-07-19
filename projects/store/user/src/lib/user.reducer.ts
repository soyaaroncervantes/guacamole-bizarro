import { Action, createReducer, on } from '@ngrx/store';
import { UserCredential } from '@firebase/auth-types';
import * as userAction from './user.actions';

export interface State {
  user: UserCredential;
}

export const userFeatureKey = 'user';

export const initialState: State = {
  user: null
};

const userReducer = createReducer(
  initialState,
  on( userAction.userSuccess,
    ( state, { userCredential }) => ({ ...state, user: userCredential })
  )
);

export function reducer(state: State | undefined, action: Action ): State {
  return userReducer( state, action );
}
