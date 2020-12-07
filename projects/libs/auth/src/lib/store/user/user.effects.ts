import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiLoginService } from '../../services/api/login/api-login.service';
import { ApiCreateUserService } from '../../services/api/create-user/api-create-user.service';
import { ApiLogoutService } from '../../services/api/logout/api-logout.service';

import * as fromAction from './user.actions';
import { userObservableAction$ } from './user.utilities';

import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private apiLoginService: ApiLoginService,
    private apiLogoutService: ApiLogoutService,
    private apiCreateUserService: ApiCreateUserService,
    private router: Router
  ) { }

  createUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.createUser ),
      mergeMap( ({ user }) =>
        userObservableAction$( this.apiCreateUserService.createUser( user ) )
          .pipe(
            catchError( errors => of( fromAction.userFailure({ errors }) ) )
          )
      )
    )
  );

  loginUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.loginGoogle ),
      mergeMap( () =>
        userObservableAction$( this.apiLoginService.loginGoogle() )
          .pipe(
            catchError( errors => of( fromAction.userFailure({ errors }) ) )
          )
      )
    )
  );

  loginGoogle$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.login ),
      mergeMap( ({ user }) =>
        userObservableAction$( this.apiLoginService.loginUser( user ) )
          .pipe(
            catchError( errors => of( fromAction.userFailure({ errors }) ) )
          )
      )
    )
  );

  logout$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.logout ),
      mergeMap( () =>
        this.apiLogoutService.logout
          .pipe(
            map( () => fromAction.logoutSuccess() )
          )
      )
    )
  );

}
