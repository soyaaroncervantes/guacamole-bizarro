import { Action } from '@ngrx/store';

import { UserInfo } from '@firebase/auth-types';
import { User } from 'firebase';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromAction from './user.actions';

const getUserInfo = ( user: User ): UserInfo => {
  return {
    uid: user.uid,
    providerId: user.providerId,
    photoURL: user.photoURL,
    phoneNumber: user.phoneNumber,
    email: user.email,
    displayName: user.displayName
  };
};

export const userObservableAction$ = ( observable: Observable<User> ): Observable<Action> => {
  return observable
    .pipe(
      map( getUserInfo ),
      map( userInfo => fromAction.userSuccess({ userInfo }) )
    );
};

