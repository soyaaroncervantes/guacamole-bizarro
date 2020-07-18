import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiLoginService } from '@services/api-login';
import { ApiCreateUserService } from '@services/api-create-user';

import * as fromAction from '@actions/user';
import { catchError, map, mergeMap, pluck, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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
            pluck( 'user' ),
            map( firebaseUser => fromAction.userSuccess({ user: firebaseUser }) )
          )
      )
    )
  );

  loginUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.login ),
      mergeMap( action =>
      this.apiLoginService.loginUser( action.user )
        .pipe(
          pluck( 'user' ),
          map( user => fromAction.userSuccess({ user }) )
        )
      )
    )
  );

}
