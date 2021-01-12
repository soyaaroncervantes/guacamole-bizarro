import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';
import { UserInfo } from '@firebase/auth-types';

export const login = createAction( '[ API/Auth ] Login Auth', props<{ user: UserInterface }>() );
export const loginGoogle = createAction( '[ API/Auth ] Google Login' );
export const loginTwitter = createAction( '[ API/Auth ] Twitter Login' );
export const loginFacebook = createAction( '[ API/Auth ] Facebook Login' );

export const checkEmail = createAction( '[ API/Auth ] Check Email', props<{ email: string }>() );

export const createUser = createAction( '[ API/Auth ] Create Auth', props<{ user: UserInterface }>() );
export const logout = createAction('[ API/Auth ] Logout Auth');

export const getUser =  createAction('[ API/Auth ] Get Auth' );

export const logoutSuccess = createAction('[ API/Auth ] Logout Auth Success');
export const userSuccess = createAction( '[ API/Auth ] Auth Success', props<{ userInfo: UserInfo }>() );
export const userFailure = createAction( '[ API/Auth ] Auth Failure', props<{ errors: any }>() );
