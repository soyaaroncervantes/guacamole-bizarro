import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiLoginService } from '@services/api-login';
import { ApiCreateUserService } from '@services/api-create-user';

import { from, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import * as fromAction from './user.actions';

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
        from( this.apiCreateUserService.createUser( user ) )
          .pipe(
            tap( console.log ),
            map( userCredential => fromAction.userSuccess({ userCredential }) ),
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
