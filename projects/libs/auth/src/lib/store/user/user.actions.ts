import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';
import { UserInfo } from '@firebase/auth-types';

export const login = createAction( '[ API/User ] Login User', props<{ user: UserInterface }>() );
export const loginGoogle = createAction( '[ API/User ] Google Login' );
export const loginTwitter = createAction( '[ API/User ] Twitter Login' );

export const createUser = createAction( '[ API/User ] Create User', props<{ user: UserInterface }>() );
export const logout = createAction('[ API/User ] Logout User');

export const getUser =  createAction('[ API/User ] Get User' );

export const logoutSuccess = createAction('[ API/User ] Logout User Success');
export const userSuccess = createAction( '[ API/User ] User Success', props<{ userInfo: UserInfo }>() );
export const userFailure = createAction( '[ API/User ] User Failure', props<{ errors: any }>() );
