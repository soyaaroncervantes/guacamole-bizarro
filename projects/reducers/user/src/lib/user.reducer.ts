import { Action, createReducer, on } from '@ngrx/store';
import * as userAction from '@actions/user';
import { UserCredential } from '@firebase/auth-types';

export interface State {
  user: UserCredential;
}

export const userFeatureKey = 'user';

export const initialState: State = {
  user: null
};

const userReducer = createReducer(
  initialState,
  on( userAction.userSuccess, ( state, { userCredential } ) => {
    console.log( '[Reducer] ', userCredential );
    return { ...state, user: userCredential };
  })
);

export function reducer(state: State | undefined, action: Action ): State {
  return userReducer( state, action );
}
