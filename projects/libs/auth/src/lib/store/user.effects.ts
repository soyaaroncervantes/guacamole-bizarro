import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { ApiLoginService } from '../services/api/login/api-login.service';
import { ApiCreateUserService } from '../services/api/create-user/api-create-user.service';

import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { userObservableAction$ } from './user.utilities';

import * as fromAction from './user.actions';
import { websiteRoutes } from '@const/website';
import { of } from 'rxjs';

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
        userObservableAction$( this.apiCreateUserService.createUser( user ) )
          .pipe(
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
        userObservableAction$( this.apiLoginService.loginUser( user ) )
          .pipe(
            tap( () => this.router.navigate([ websiteRoutes.parent, websiteRoutes.children.albums ]) ),
            catchError( errors => of( fromAction.userFailure({ errors }) ) )
          )
      )
    )
  );

  logout$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.logout ),
      mergeMap( () =>
        this.apiLoginService.logout()
          .pipe(
            map( () => fromAction.logoutSuccess() )
          )
      )
    )
  );

}
