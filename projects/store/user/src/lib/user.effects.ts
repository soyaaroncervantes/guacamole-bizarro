import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiLoginService } from '@services/api-login';
import { ApiCreateUserService } from '@services/api-create-user';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as fromAction from './user.actions';
import { User } from '@firebase/auth-types';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private apiLoginService: ApiLoginService,
    private apiCreateUserService: ApiCreateUserService
  ) { }

  createUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.createUser ),
      mergeMap( ({ user }) =>
        this.apiCreateUserService.createUser( user )
          .pipe(
            map( ( userCredential ) => fromAction.userSuccess({ userCredential }) ),
            catchError( errors => {
              console.error( errors );
              return of( fromAction.userFailure({ errors }) );
            })
          )
      )
    )
  );

  loginUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.login ),
      mergeMap( ({ user }) =>
        this.apiLoginService.loginUser( user )
          .pipe(
            map( userCredential => fromAction.userSuccess({ userCredential }) )
          )
      )
    )
  );

}
