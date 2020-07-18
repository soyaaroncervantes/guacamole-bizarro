import { createAction, props } from '@ngrx/store';
import * as firebase from 'firebase';
import { User } from '@interfaces/user';

export const login = createAction( '[ API/Albums ] Login User', props<{ user: User }>() );
export const createUser = createAction( '[ API/Albums ] Login User', props<{ user: User }>() );
export const userSuccess = createAction( '[ API/Albums ] Create User', props<{ user: firebase.User }>() );
