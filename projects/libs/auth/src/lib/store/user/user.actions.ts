import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';
import { UserInfo } from '@firebase/auth-types';

export const login = createAction( '[ API/User ] Login User', props<{ user: User }>() );
export const loginGoogle = createAction( '[ API/User ] Login User' );
export const createUser = createAction( '[ API/User ] Create User', props<{ user: User }>() );
export const logout = createAction('[ API/User ] Logout User');

export const getUser =  createAction('[ API/User ] Get User' );

export const logoutSuccess = createAction('[ API/User ] Logout User Success');
export const userSuccess = createAction( '[ API/User ] User Success', props<{ userInfo: UserInfo }>() );
export const userFailure = createAction( '[ API/User ] User Failure', props<{ errors: any }>() );
