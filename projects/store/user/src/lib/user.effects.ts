import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { ApiLoginService } from '@services/api-login';
import { ApiCreateUserService } from '@services/api-create-user';

import { websiteRoutes } from '@const/website';

import { UserCredential, UserInfo } from '@firebase/auth-types';

import { of } from 'rxjs';
import { catchError, map, mergeMap, pluck, tap } from 'rxjs/operators';

import * as fromAction from './user.actions';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private apiLoginService: ApiLoginService,
    private apiCreateUserService: ApiCreateUserService,
    private router: Router
  ) { }

  createUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.createUser ),
      mergeMap( ({ user }) =>
        this.apiCreateUserService.createUser( user )
          .pipe(
            pluck( 'user' ),
            map( ( { uid, displayName, phoneNumber, photoURL, email } ) => {
              return { uid, displayName, phoneNumber, photoURL, email };
            }),
            map( ( userInfo: UserInfo ) => fromAction.userSuccess({ userInfo }) ),
            tap( () => this.router.navigate([ websiteRoutes.parent, websiteRoutes.children.albums ]) ),
            catchError( errors => of( fromAction.userFailure({ errors }) ) )
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
            pluck( 'user' ),
            map( ( { uid, displayName, phoneNumber, photoURL, email } ) => {
              return { uid, displayName, phoneNumber, photoURL, email };
            }),
            map( ( userInfo: UserInfo ) => fromAction.userSuccess({ userInfo }) ),
            tap( () => this.router.navigate([ websiteRoutes.parent, websiteRoutes.children.albums ]) ),
            catchError( errors => of( fromAction.userFailure({ errors }) ) )
          )
      )
    )
  );

}
