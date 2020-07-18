import { Action, createReducer, on } from '@ngrx/store';
import * as userAction from '@actions/user';
import * as firebase from 'firebase';

export interface State {
  user: firebase.User;
}

export const userFeatureKey = 'user';

export const initialState: State = {
  user: null
};

const userReducer = createReducer(
  initialState,
  on( userAction.userSuccess, ( state, { user } ) => ( { ...state, user: {...user} } ) )
);

export function reducer(state: State | undefined, action: Action ): State {
  return userReducer( state, action );
}
