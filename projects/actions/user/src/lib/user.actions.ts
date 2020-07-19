import { createAction, props } from '@ngrx/store';
import { User } from '@interfaces/user';
import { UserCredential } from '@firebase/auth-types';

export const login = createAction( '[ API/User ] Login User', props<{ user: User }>() );
export const createUser = createAction( '[ API/User ] Create User', props<{ user: User }>() );
export const userSuccess = createAction( '[ API/User ] User Success', props<{ userCredential: UserCredential }>() );
export const userFailure = createAction( '[ API/User ] User Failure', props<{ errors: any }>() );
